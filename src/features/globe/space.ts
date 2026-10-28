import { geoOrthographic, geoPath, type GeoPermissibleObjects } from "d3-geo";
import { GLOBE } from "@/lib/tokens";
import type { Camera } from "./camera";
import { drawGlobe, type Frame } from "./draw";
import { context } from "./options";

/** How high orbit cases sit above the surface, as a share of the globe's radius. */
export const ORBIT_ALT = 0.14;

/** One lap of the Moon, in milliseconds. Slow enough to tap, quick enough to notice it moving. */
const PERIOD = 80_000;
/** The Moon shows when zoomed out further than this, fading in over FADE. */
const SHOW_BELOW = 1.9;
const FADE = 0.35;
/**
 * Its orbit, drawn as a tilted ellipse around the globe: size (in globe radii), flattening and tilt. On a tall
 * screen it stands almost upright, so the Moon passes above and below the globe instead of off the sides.
 */
const ORBIT = { a: 1.6, flat: 0.3 };
const tiltFor = (f: Frame) => (f.H > f.W * 1.2 ? -1.2 : -0.3);
/** Not to scale (that would be 0.27): small enough to read as far away, big enough to tap. */
const MOON_SIZE = 0.17;
/** While only the Moon moves, redraw at most this often (ms): it creeps a pixel at a time, so 20 fps looks smooth. */
const TICK = 50;
/** With reduced motion the Moon waits at one spot: lower right, in front of the orbit. */
const STILL_ANGLE = 0.6;

type MoonSpot = { x: number; y: number; r: number; front: boolean; alpha: number };

/**
 * The space around Earth, on its own canvas between the globe and the markers: the faint orbit shell that orbit
 * cases sit on, and, when zoomed out, the Moon circling the globe. Tapping the Moon takes you there.
 * It redraws every frame only while the Moon is moving and on screen.
 */
export class SpaceLayer {
  private ctx: CanvasRenderingContext2D;
  private moon: MoonSpot = { x: 0, y: 0, r: 0, front: true, alpha: 0 };
  private sprite: HTMLCanvasElement | null = null;
  private spriteKey = "";
  private moonLand: GeoPermissibleObjects | null = null;
  private lastDraw = 0;

  constructor(
    canvas: HTMLCanvasElement,
    private reduce: boolean,
  ) {
    this.ctx = context(canvas);
  }

  /** The Moon's seas, for the little Moon. Until they arrive it's a plain grey ball. */
  setMoonLand(land: GeoPermissibleObjects) {
    this.moonLand = land;
    this.spriteKey = "";
  }

  /** `orbit`: draw the orbit shell (there are orbit cases). `show`: the space layer belongs to this world. */
  draw(cam: Camera, now: number, moved: boolean, orbit: boolean, show: boolean) {
    const alpha = show ? Math.max(0, Math.min(1, (SHOW_BELOW - cam.zoom) / FADE)) : 0;
    const animating = alpha > 0 && !this.reduce;
    if (!moved && (!animating || now - this.lastDraw < TICK)) return;
    this.lastDraw = now;
    const f = cam.frame;
    const c = this.ctx;
    c.setTransform(f.DPR, 0, 0, f.DPR, 0, 0);
    c.clearRect(0, 0, f.W, f.H);
    this.moon.alpha = alpha;
    if (!show) return;
    const r = cam.radius;
    if (alpha > 0) this.drawMoon(c, f, r, now, alpha);
    if (orbit) {
      c.beginPath();
      c.arc(f.CX, f.CY, r * (1 + ORBIT_ALT), 0, Math.PI * 2);
      c.setLineDash([2, 5]);
      c.strokeStyle = GLOBE.orbit;
      c.lineWidth = 1;
      c.stroke();
      c.setLineDash([]);
    }
  }

  /** Whether a tap at (x, y) landed on the Moon. */
  hitMoon(x: number, y: number, cam: Camera) {
    const m = this.moon;
    if (m.alpha < 0.5 || Math.hypot(x - m.x, y - m.y) > m.r + 12) return false;
    // Behind the globe and covered by it: the tap belongs to the globe.
    return m.front || Math.hypot(x - cam.frame.CX, y - cam.frame.CY) > cam.radius;
  }

  private drawMoon(c: CanvasRenderingContext2D, f: Frame, r: number, now: number, alpha: number) {
    const t = this.reduce ? STILL_ANGLE : ((now % PERIOD) / PERIOD) * Math.PI * 2;
    const a = r * ORBIT.a;
    const b = a * ORBIT.flat;
    const ex = a * Math.cos(t);
    const ey = b * Math.sin(t);
    const tilt = tiltFor(f);
    const cos = Math.cos(tilt);
    const sin = Math.sin(tilt);
    const front = Math.sin(t) > 0;
    // A touch bigger at the front of its orbit, for depth.
    const mr = Math.max(9, r * MOON_SIZE * (1 + 0.1 * Math.sin(t)));
    this.moon = { x: f.CX + ex * cos - ey * sin, y: f.CY + ex * sin + ey * cos, r: mr, front, alpha };

    c.globalAlpha = alpha;
    // The far half of the orbit, and the Moon when it's there, pass behind the globe.
    this.orbitHalf(c, f, a, b, Math.PI);
    if (!front) this.stamp(c, f.DPR);
    c.globalCompositeOperation = "destination-out";
    c.beginPath();
    c.arc(f.CX, f.CY, r, 0, Math.PI * 2);
    c.fill();
    c.globalCompositeOperation = "source-over";
    this.orbitHalf(c, f, a, b, 0);
    if (front) this.stamp(c, f.DPR);
    c.globalAlpha = 1;
  }

  /** Half the Moon's orbit: the near half from angle 0, the far half from π. */
  private orbitHalf(c: CanvasRenderingContext2D, f: Frame, a: number, b: number, from: number) {
    c.beginPath();
    c.ellipse(f.CX, f.CY, a, b, tiltFor(f), from, from + Math.PI);
    c.strokeStyle = GLOBE.orbit;
    c.lineWidth = 1;
    c.stroke();
  }

  /** Draws the Moon from a cached picture, re-rendered only when its size changes noticeably. */
  private stamp(c: CanvasRenderingContext2D, dpr: number) {
    const { x, y, r } = this.moon;
    const size = Math.round(r / 2) * 2;
    const key = `${size}:${dpr}:${this.moonLand ? 1 : 0}`;
    if (key !== this.spriteKey || !this.sprite) {
      this.sprite = renderMoon(size, dpr, this.moonLand);
      this.spriteKey = key;
    }
    c.drawImage(this.sprite, x - size - 2, y - size - 2, size * 2 + 4, size * 2 + 4);
  }
}

/** The near side of the Moon, which always faces Earth, at radius `r` CSS pixels. */
function renderMoon(r: number, dpr: number, land: GeoPermissibleObjects | null) {
  const canvas = document.createElement("canvas");
  const px = (r * 2 + 4) * dpr;
  canvas.width = canvas.height = px;
  const c = canvas.getContext("2d");
  if (!c) return canvas;
  const projection = geoOrthographic()
    .rotate([0, 0])
    .scale(r)
    .translate([r + 2, r + 2])
    .clipAngle(90);
  const frame: Frame = { W: r * 2 + 4, H: r * 2 + 4, DPR: dpr, CX: r + 2, CY: r + 2 };
  drawGlobe(c, geoPath(projection, c), land ?? { type: "Sphere" }, frame, r, "moon");
  return canvas;
}
