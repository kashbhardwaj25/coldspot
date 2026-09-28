import { geoGraticule10, type GeoPath, type GeoPermissibleObjects } from "d3-geo";
import { CATEGORIES } from "@/lib/categories";
import type { Visible } from "./tuning";

/** Canvas size and ring position, in CSS pixels. */
export type Frame = { W: number; H: number; DPR: number; CX: number; CY: number };

const graticule = geoGraticule10();

function rgba(hex: string, a: number) {
  const n = parseInt(hex.slice(1), 16);
  return `rgba(${(n >> 16) & 255},${(n >> 8) & 255},${n & 255},${a})`;
}

function begin(c: CanvasRenderingContext2D, f: Frame) {
  c.setTransform(f.DPR, 0, 0, f.DPR, 0, 0);
  c.clearRect(0, 0, f.W, f.H);
}

/** Halo, sphere, graticule and coastlines. `r` is the globe radius in pixels. */
export function drawGlobe(
  c: CanvasRenderingContext2D,
  path: GeoPath,
  land: GeoPermissibleObjects,
  f: Frame,
  r: number,
  famous: boolean,
) {
  const { CX, CY } = f;
  begin(c, f);

  const halo = c.createRadialGradient(CX, CY, r * 0.96, CX, CY, r * 1.12);
  halo.addColorStop(0, famous ? "rgba(230,220,198,0.12)" : "rgba(169,220,235,0.14)");
  halo.addColorStop(1, "rgba(150,120,210,0)");
  c.fillStyle = halo;
  c.beginPath();
  c.arc(CX, CY, r * 1.12, 0, Math.PI * 2);
  c.fill();

  const g = c.createRadialGradient(CX - r * 0.3, CY - r * 0.35, r * 0.1, CX, CY, r);
  g.addColorStop(0, "#1E1830");
  g.addColorStop(1, "#0D0A14");
  c.fillStyle = g;
  c.beginPath();
  path({ type: "Sphere" });
  c.fill();

  c.beginPath();
  path(graticule);
  c.strokeStyle = famous ? "rgba(230,220,198,0.07)" : "rgba(236,229,214,0.045)";
  c.lineWidth = 1;
  c.stroke();

  c.beginPath();
  path(land);
  c.fillStyle = "#262036";
  c.fill();
  c.strokeStyle = "rgba(122,108,160,0.55)";
  c.lineWidth = 0.8;
  c.stroke();

  c.beginPath();
  path({ type: "Sphere" });
  c.strokeStyle = "rgba(197,162,238,0.22)";
  c.stroke();
}

type MarkerOptions = {
  tunedKey: string | null;
  famous: boolean;
  labels: boolean;
  font: string;
  /** Animation time in seconds, or null for no pulsing (reduced motion). */
  t: number | null;
};

/** Glowing markers: diamonds for famous cases, dots for stories. Draws farthest first. */
export function drawMarkers(c: CanvasRenderingContext2D, visible: Visible[], f: Frame, o: MarkerOptions) {
  begin(c, f);
  if (o.labels) {
    c.font = o.font;
    c.textBaseline = "middle";
  }
  for (let i = visible.length - 1; i >= 0; i--) {
    const v = visible[i];
    if (!v) continue;
    const color = CATEGORIES[v.item.category].color;
    const on = v.item.key === o.tunedKey;
    const phase = o.t === null ? 0 : o.t + ((Math.abs(v.item.lat) * 0.37) % 1);
    const pulse = 0.5 + 0.5 * Math.sin(phase * 2.4);
    const gr = (on ? 22 : 11) + pulse * (on ? 6 : 4);
    const grad = c.createRadialGradient(v.x, v.y, 0, v.x, v.y, gr);
    grad.addColorStop(0, rgba(color, on ? 0.55 : 0.32));
    grad.addColorStop(1, rgba(color, 0));
    c.fillStyle = grad;
    c.beginPath();
    c.arc(v.x, v.y, gr, 0, Math.PI * 2);
    c.fill();

    if (o.famous) drawDiamond(c, v, color, on, o.labels);
    else drawDot(c, v, color, on);
  }
}

function drawDiamond(c: CanvasRenderingContext2D, v: Visible, color: string, on: boolean, labels: boolean) {
  const r = on ? 5.4 : 4.2;
  c.save();
  c.translate(v.x, v.y);
  c.rotate(Math.PI / 4);
  c.fillStyle = color;
  c.fillRect(-r / 1.4, -r / 1.4, r * 1.414, r * 1.414);
  c.strokeStyle = "rgba(230,220,198,0.55)";
  c.lineWidth = 1;
  c.strokeRect(-r * 1.25, -r * 1.25, r * 2.5, r * 2.5);
  c.restore();
  if (labels && !on) {
    c.fillStyle = "rgba(230,220,198,0.72)";
    c.fillText(v.item.label, v.x + 12, v.y);
  }
}

function drawDot(c: CanvasRenderingContext2D, v: Visible, color: string, on: boolean) {
  c.fillStyle = color;
  c.beginPath();
  c.arc(v.x, v.y, on ? 4.2 : v.item.narrated ? 3.4 : 2.6, 0, Math.PI * 2);
  c.fill();
  if (v.item.narrated && !on) {
    c.strokeStyle = rgba(color, 0.6);
    c.lineWidth = 1;
    c.beginPath();
    c.arc(v.x, v.y, 6.2, 0, Math.PI * 2);
    c.stroke();
  }
}
