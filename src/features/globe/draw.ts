import { geoGraticule10, type GeoPath, type GeoPermissibleObjects } from "d3-geo";
import { GLOBE } from "@/lib/tokens";
import { CATEGORIES } from "@/lib/categories";
import { drawLabels, type Label } from "./labels";
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

/** Earth, or the Moon: grey stone, with its dark seas drawn where Earth has land. */
export type Skin = "earth" | "moon";

const SKINS = {
  earth: { light: GLOBE.oceanLight, dark: GLOBE.oceanDark, fill: GLOBE.land, edge: GLOBE.coast },
  moon: { light: GLOBE.moonLight, dark: GLOBE.moonDark, fill: GLOBE.maria, edge: GLOBE.mariaEdge },
};

/** Sphere, graticule and coastlines: a matte object in a dark room. `r` is the globe radius in pixels. */
export function drawGlobe(
  c: CanvasRenderingContext2D,
  path: GeoPath,
  land: GeoPermissibleObjects,
  f: Frame,
  r: number,
  skin: Skin = "earth",
) {
  const s = SKINS[skin];
  const { CX, CY } = f;
  begin(c, f);

  // A soft shadow below the sphere, so it sits in the room instead of glowing in it.
  const shade = c.createRadialGradient(CX, CY + r * 0.06, r * 0.92, CX, CY + r * 0.06, r * 1.1);
  shade.addColorStop(0, GLOBE.shadow);
  shade.addColorStop(1, "rgba(0, 0, 0, 0)");
  c.fillStyle = shade;
  c.beginPath();
  c.arc(CX, CY + r * 0.06, r * 1.1, 0, Math.PI * 2);
  c.fill();

  const g = c.createRadialGradient(CX - r * 0.3, CY - r * 0.35, r * 0.1, CX, CY, r);
  g.addColorStop(0, s.light);
  g.addColorStop(1, s.dark);
  c.fillStyle = g;
  c.beginPath();
  path({ type: "Sphere" });
  c.fill();

  c.beginPath();
  path(graticule);
  c.strokeStyle = GLOBE.grid;
  c.lineWidth = 1;
  c.stroke();

  c.beginPath();
  path(land);
  c.fillStyle = s.fill;
  c.fill();
  c.strokeStyle = s.edge;
  c.lineWidth = 0.8;
  c.stroke();

  c.beginPath();
  path({ type: "Sphere" });
  c.strokeStyle = GLOBE.rim;
  c.stroke();
}

type MarkerOptions = {
  tunedKey: string | null;
  famous: boolean;
  /** Case labels, already placed (see labels.ts). Empty when they're hidden. */
  labels: Label[];
  font: string;
  /** Phosphor charge per marker key (see glow.ts). Missing means unlit. */
  charge: Map<string, number>;
};

/**
 * Markers as glow pigment: diamonds for famous cases, dots for stories. Unlit markers are dim and give off no
 * light; charged ones (in the ring, or recently passed) glow in proportion to their charge. Draws farthest first.
 */
export function drawMarkers(c: CanvasRenderingContext2D, visible: Visible[], f: Frame, o: MarkerOptions) {
  begin(c, f);
  if (o.labels.length) {
    c.font = o.font;
    c.textBaseline = "middle";
  }
  for (let i = visible.length - 1; i >= 0; i--) {
    const v = visible[i];
    if (!v) continue;
    const color = CATEGORIES[v.item.category].color;
    const on = v.item.key === o.tunedKey;
    const k = o.charge.get(v.item.key) ?? 0;
    if (v.ground) {
      c.beginPath();
      c.moveTo(v.ground.x, v.ground.y);
      c.lineTo(v.x, v.y);
      c.strokeStyle = GLOBE.tether;
      c.lineWidth = 1;
      c.stroke();
    }
    if (k > 0.02) {
      const gr = 6 + 26 * k;
      const grad = c.createRadialGradient(v.x, v.y, 0, v.x, v.y, gr);
      grad.addColorStop(0, rgba(color, 0.75 * k));
      grad.addColorStop(0.35, rgba(color, 0.22 * k));
      grad.addColorStop(1, rgba(color, 0));
      c.fillStyle = grad;
      c.beginPath();
      c.arc(v.x, v.y, gr, 0, Math.PI * 2);
      c.fill();
    }
    c.globalAlpha = 0.42 + 0.58 * k;
    if (o.famous) drawDiamond(c, v, color, on);
    else drawDot(c, v, color, on);
    c.globalAlpha = 1;
  }
  if (o.labels.length) drawLabels(c, o.labels);
}
function drawDiamond(c: CanvasRenderingContext2D, v: Visible, color: string, on: boolean) {
  const r = on ? 5.4 : 4.2;
  c.save();
  c.translate(v.x, v.y);
  c.rotate(Math.PI / 4);
  c.fillStyle = color;
  c.fillRect(-r / 1.4, -r / 1.4, r * 1.414, r * 1.414);
  c.strokeStyle = GLOBE.diamondEdge;
  c.lineWidth = 1;
  c.strokeRect(-r * 1.25, -r * 1.25, r * 2.5, r * 2.5);
  c.restore();
}

function drawDot(c: CanvasRenderingContext2D, v: Visible, color: string, on: boolean) {
  c.fillStyle = color;
  c.beginPath();
  c.arc(v.x, v.y, on ? 4.2 : 2.6, 0, Math.PI * 2);
  c.fill();
}
