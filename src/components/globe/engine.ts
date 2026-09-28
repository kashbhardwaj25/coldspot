import {
  geoDistance,
  geoGraticule10,
  geoInterpolate,
  geoOrthographic,
  geoPath,
  type GeoPermissibleObjects,
} from "d3-geo";
import { CATEGORIES, type Category } from "@/lib/categories";
import type { Radio } from "./radio";

export type EngineItem = {
  key: string;
  category: Category;
  lat: number;
  lon: number;
  label: string;
  narrated: boolean;
};

export type View = { lon: number; lat: number; zoom: number };

type Options = {
  base: HTMLCanvasElement;
  dots: HTMLCanvasElement;
  land: GeoPermissibleObjects;
  view: View;
  radio: Radio;
  /** Where the ring sits: centre x, centre y in CSS pixels. */
  layout: (w: number, h: number) => { cx: number; cy: number };
  onTune: (key: string | null) => void;
  onNearest: (key: string | null) => void;
  onCoords: (text: string) => void;
  onInteract: () => void;
  onOpenTuned: () => void;
};

type Visible = { item: EngineItem; x: number; y: number; d: number };
type Anim = { tick: (now: number) => boolean };

const TUNE_IN = 22;
const TUNE_OUT = 32;
const SNAP = 56;
const MIN_ZOOM = 0.85;
const MAX_ZOOM = 26;

const easeOut = (t: number) => 1 - (1 - t) ** 3;
const easeInOut = (t: number) => (t < 0.5 ? 4 * t * t * t : 1 - (-2 * t + 2) ** 3 / 2);

function rgba(hex: string, a: number) {
  const n = parseInt(hex.slice(1), 16);
  return `rgba(${(n >> 16) & 255},${(n >> 8) & 255},${n & 255},${a})`;
}

export class GlobeEngine {
  private o: Options;
  private bctx: CanvasRenderingContext2D;
  private dctx: CanvasRenderingContext2D;
  private projection = geoOrthographic().clipAngle(90).precision(0.35);
  private path;
  private graticule = geoGraticule10();
  private reduce = typeof matchMedia !== "undefined" && matchMedia("(prefers-reduced-motion: reduce)").matches;

  private rot: [number, number, number];
  private zoom: number;
  private W = 0;
  private H = 0;
  private DPR = 1;
  private CX = 0;
  private CY = 0;
  private R0 = 0;

  private items: EngineItem[] = [];
  private famous = true;
  private visible: Visible[] = [];
  private tunedKey: string | null = null;
  private nearestKey: string | null | undefined = undefined;
  private dirty = true;

  private flight: Anim | null = null;
  private snap: Anim | null = null;
  private vel: [number, number] = [0, 0];
  private settleAt = 0;
  private pointers = new Map<number, { x: number; y: number }>();
  private pinch0: { d: number; z: number } | null = null;
  private lastMove = 0;
  private moved = false;
  private raf = 0;
  private cleanup: (() => void)[] = [];

  constructor(o: Options) {
    this.o = o;
    this.bctx = o.base.getContext("2d")!;
    this.dctx = o.dots.getContext("2d")!;
    this.path = geoPath(this.projection, this.bctx);
    this.rot = [-o.view.lon, -o.view.lat, 0];
    this.zoom = o.view.zoom;
    this.bind();
    this.resize();
    this.raf = requestAnimationFrame(this.frame);
  }

  destroy() {
    cancelAnimationFrame(this.raf);
    this.cleanup.forEach((f) => f());
  }

  /* ---------- public API ---------- */

  setItems(items: EngineItem[], famous: boolean) {
    this.items = items;
    this.famous = famous;
    this.dirty = true;
  }

  clearTune() {
    if (this.tunedKey !== null) {
      this.tunedKey = null;
      this.o.onTune(null);
    }
  }

  center() {
    return { lat: -this.rot[1], lon: ((-this.rot[0] + 540) % 360) - 180 };
  }

  flyTo(lon: number, lat: number, zoom?: number, duration = 1500) {
    this.stop();
    const from: [number, number] = [-this.rot[0], -this.rot[1]];
    const interp = geoInterpolate(from, [lon, lat]);
    const dist = geoDistance(from, [lon, lat]);
    const z0 = this.zoom;
    const z1 = zoom ?? Math.max(this.zoom, 3.2);
    const dip = Math.min(0.75, dist * 0.55);
    const t0 = performance.now();
    const D = this.reduce ? 1 : duration;
    this.flight = {
      tick: (now) => {
        const k = Math.min(1, (now - t0) / D);
        const e = easeInOut(k);
        const p = interp(e);
        this.rot[0] = -p[0];
        this.rot[1] = -p[1];
        this.zoom = (z0 + (z1 - z0) * e) * (1 - dip * Math.sin(Math.PI * e));
        this.dirty = true;
        return k < 1;
      },
    };
    this.o.onInteract();
  }

  zoomBy(f: number) {
    this.stop();
    const z0 = this.zoom;
    const z1 = Math.max(MIN_ZOOM, Math.min(MAX_ZOOM, this.zoom * f));
    const t0 = performance.now();
    this.flight = {
      tick: (now) => {
        const k = Math.min(1, (now - t0) / 320);
        this.zoom = z0 + (z1 - z0) * easeOut(k);
        this.dirty = true;
        return k < 1;
      },
    };
  }

  resize = () => {
    this.DPR = Math.min(window.devicePixelRatio || 1, 2);
    const rect = this.o.dots.getBoundingClientRect();
    this.W = rect.width;
    this.H = rect.height;
    for (const c of [this.o.base, this.o.dots]) {
      c.width = this.W * this.DPR;
      c.height = this.H * this.DPR;
    }
    const { cx, cy } = this.o.layout(this.W, this.H);
    this.CX = cx;
    this.CY = cy;
    this.R0 = Math.min(this.W, this.H) * 0.4;
    this.dirty = true;
  };

  /* ---------- input ---------- */

  private bind() {
    const el = this.o.dots;
    const on = <K extends keyof HTMLElementEventMap>(
      t: EventTarget,
      type: K,
      fn: (e: HTMLElementEventMap[K]) => void,
      opts?: AddEventListenerOptions,
    ) => {
      t.addEventListener(type, fn as EventListener, opts);
      this.cleanup.push(() => t.removeEventListener(type, fn as EventListener, opts));
    };

    on(el, "pointerdown", (e) => {
      el.setPointerCapture(e.pointerId);
      this.pointers.set(e.pointerId, { x: e.clientX, y: e.clientY });
      this.stop();
      this.moved = false;
      el.classList.add("dragging");
      if (this.pointers.size === 2) {
        const [a, b] = [...this.pointers.values()];
        this.pinch0 = { d: Math.hypot(a.x - b.x, a.y - b.y), z: this.zoom };
      }
      this.o.onInteract();
    });

    on(el, "pointermove", (e) => {
      const prev = this.pointers.get(e.pointerId);
      if (!prev) return;
      const cur = { x: e.clientX, y: e.clientY };
      this.pointers.set(e.pointerId, cur);
      if (this.pointers.size === 2 && this.pinch0) {
        const [a, b] = [...this.pointers.values()];
        this.zoom = this.clampZoom((this.pinch0.z * Math.hypot(a.x - b.x, a.y - b.y)) / this.pinch0.d);
        this.dirty = true;
        return;
      }
      const dx = cur.x - prev.x;
      const dy = cur.y - prev.y;
      if (Math.abs(dx) + Math.abs(dy) > 0.5) this.moved = true;
      const k = this.degPerPx();
      this.rot[0] += dx * k;
      this.rot[1] = this.clampLat(this.rot[1] - dy * k);
      const now = performance.now();
      const dt = Math.max(8, now - this.lastMove);
      this.lastMove = now;
      this.vel = [((dx * k) / dt) * 16, ((-dy * k) / dt) * 16];
      this.dirty = true;
    });

    const end = (e: PointerEvent) => {
      this.pointers.delete(e.pointerId);
      if (this.pointers.size < 2) this.pinch0 = null;
      if (this.pointers.size === 0) {
        el.classList.remove("dragging");
        if (performance.now() - this.lastMove > 80) this.vel = [0, 0];
        this.settleAt = performance.now();
        if (!this.moved) this.tap(e.clientX, e.clientY);
      }
    };
    on(el, "pointerup", end);
    on(el, "pointercancel", end);

    on(
      el,
      "wheel",
      (e) => {
        e.preventDefault();
        this.stop();
        this.zoom = this.clampZoom(this.zoom * Math.exp(-e.deltaY * 0.0016));
        this.dirty = true;
        this.o.onInteract();
      },
      { passive: false },
    );

    on(el, "keydown", (e) => {
      const k = 22 * this.degPerPx();
      const moves: Record<string, [number, number]> = {
        ArrowLeft: [k, 0],
        ArrowRight: [-k, 0],
        ArrowUp: [0, -k],
        ArrowDown: [0, k],
      };
      const m = moves[e.key];
      if (m) {
        e.preventDefault();
        this.stop();
        this.rot[0] += m[0];
        this.rot[1] = this.clampLat(this.rot[1] + m[1]);
        this.dirty = true;
        this.settleAt = performance.now() + 250;
        this.o.onInteract();
      } else if (e.key === "+" || e.key === "=") this.zoomBy(1.25);
      else if (e.key === "-") this.zoomBy(0.8);
      else if (e.key === "Enter" && this.tunedKey) this.o.onOpenTuned();
    });

    on(window, "resize", this.resize);
  }

  private tap(x: number, y: number) {
    const rect = this.o.dots.getBoundingClientRect();
    const px = x - rect.left;
    const py = y - rect.top;
    let best: Visible | null = null;
    let bestD = Infinity;
    for (const v of this.visible) {
      const d = Math.hypot(v.x - px, v.y - py);
      if (d < 22 && d < bestD) {
        best = v;
        bestD = d;
      }
    }
    if (best) {
      if (best.item.key === this.tunedKey) this.o.onOpenTuned();
      else this.flyTo(best.item.lon, best.item.lat, this.zoom, 650);
    } else if (this.tunedKey && Math.hypot(px - this.CX, py - this.CY) < 30) {
      this.o.onOpenTuned();
    }
  }

  private stop() {
    this.flight = null;
    this.snap = null;
    this.vel = [0, 0];
  }
  private degPerPx() {
    return 57.2958 / (this.R0 * this.zoom);
  }
  private clampLat(v: number) {
    return Math.max(-85, Math.min(85, v));
  }
  private clampZoom(z: number) {
    return Math.max(MIN_ZOOM, Math.min(MAX_ZOOM, z));
  }

  /* ---------- loop ---------- */

  private frame = (now: number) => {
    this.physics(now);
    if (this.dirty) {
      this.dirty = false;
      this.drawBase();
      this.computeVisible();
      this.updateTuning();
    }
    this.drawDots(now);
    this.raf = requestAnimationFrame(this.frame);
  };

  private physics(now: number) {
    if (this.flight) {
      if (!this.flight.tick(now)) {
        this.flight = null;
        this.settleAt = now;
      }
      return;
    }
    if (this.pointers.size) return;
    if (Math.abs(this.vel[0]) + Math.abs(this.vel[1]) > 0.002) {
      this.rot[0] += this.vel[0];
      this.rot[1] = this.clampLat(this.rot[1] + this.vel[1]);
      this.vel[0] *= 0.92;
      this.vel[1] *= 0.92;
      this.dirty = true;
      this.settleAt = now;
      return;
    }
    this.vel = [0, 0];
    // Resting close to a dot: glide it into the ring.
    if (!this.snap && now - this.settleAt < 60) {
      const near = this.visible[0];
      if (near && near.d > 1.5 && near.d < SNAP) {
        const interp = geoInterpolate([-this.rot[0], -this.rot[1]], [near.item.lon, near.item.lat]);
        const t0 = now;
        this.snap = {
          tick: (n) => {
            const k = Math.min(1, (n - t0) / 360);
            const p = interp(easeOut(k));
            this.rot[0] = -p[0];
            this.rot[1] = -p[1];
            this.dirty = true;
            return k < 1;
          },
        };
      }
    }
    if (this.snap && !this.snap.tick(now)) this.snap = null;
  }

  private drawBase() {
    const { bctx: c, CX, CY, W, H } = this;
    this.projection.rotate(this.rot).scale(this.R0 * this.zoom).translate([CX, CY]);
    c.setTransform(this.DPR, 0, 0, this.DPR, 0, 0);
    c.clearRect(0, 0, W, H);
    const r = this.R0 * this.zoom;

    const halo = c.createRadialGradient(CX, CY, r * 0.96, CX, CY, r * 1.12);
    halo.addColorStop(0, this.famous ? "rgba(230,220,198,0.12)" : "rgba(169,220,235,0.14)");
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
    this.path({ type: "Sphere" });
    c.fill();

    c.beginPath();
    this.path(this.graticule);
    c.strokeStyle = this.famous ? "rgba(230,220,198,0.07)" : "rgba(236,229,214,0.045)";
    c.lineWidth = 1;
    c.stroke();

    c.beginPath();
    this.path(this.o.land);
    c.fillStyle = "#262036";
    c.fill();
    c.strokeStyle = "rgba(122,108,160,0.55)";
    c.lineWidth = 0.8;
    c.stroke();

    c.beginPath();
    this.path({ type: "Sphere" });
    c.strokeStyle = "rgba(197,162,238,0.22)";
    c.stroke();

    this.o.onCoords(this.coordText());
  }

  private computeVisible() {
    const center: [number, number] = [-this.rot[0], -this.rot[1]];
    const out: Visible[] = [];
    for (const item of this.items) {
      if (geoDistance([item.lon, item.lat], center) > Math.PI / 2 - 0.03) continue;
      const p = this.projection([item.lon, item.lat]);
      if (!p) continue;
      out.push({ item, x: p[0], y: p[1], d: Math.hypot(p[0] - this.CX, p[1] - this.CY) });
    }
    out.sort((a, b) => a.d - b.d);
    this.visible = out;
  }

  private updateTuning() {
    const near = this.visible[0];
    let next: string | null = null;
    if (this.tunedKey) {
      const cur = this.visible.find((v) => v.item.key === this.tunedKey);
      if (cur && cur.d <= TUNE_OUT) next = this.tunedKey;
    }
    if (!next && near && near.d <= TUNE_IN) next = near.item.key;
    if (next !== this.tunedKey) {
      this.tunedKey = next;
      this.o.onTune(next);
      if (next) this.o.radio.burst();
    }
    const nearestKey = near?.item.key ?? null;
    if (nearestKey !== this.nearestKey) {
      this.nearestKey = nearestKey;
      this.o.onNearest(nearestKey);
    }
    this.o.radio.update(near ? near.d : 999, !!this.tunedKey);
  }

  private drawDots(t: number) {
    const c = this.dctx;
    c.setTransform(this.DPR, 0, 0, this.DPR, 0, 0);
    c.clearRect(0, 0, this.W, this.H);
    const labels = this.famous && this.zoom >= 2.3;
    if (labels) {
      c.font = "400 10.5px 'IBM Plex Mono', ui-monospace, monospace";
      c.textBaseline = "middle";
    }
    for (let i = this.visible.length - 1; i >= 0; i--) {
      const v = this.visible[i];
      const color = CATEGORIES[v.item.category].color;
      const on = v.item.key === this.tunedKey;
      const phase = this.reduce ? 0 : t / 1000 + ((Math.abs(v.item.lat) * 0.37) % 1);
      const pulse = 0.5 + 0.5 * Math.sin(phase * 2.4);
      const gr = (on ? 22 : 11) + pulse * (on ? 6 : 4);
      const grad = c.createRadialGradient(v.x, v.y, 0, v.x, v.y, gr);
      grad.addColorStop(0, rgba(color, on ? 0.55 : 0.32));
      grad.addColorStop(1, rgba(color, 0));
      c.fillStyle = grad;
      c.beginPath();
      c.arc(v.x, v.y, gr, 0, Math.PI * 2);
      c.fill();

      if (this.famous) {
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
      } else {
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
    }
  }

  private coordText() {
    const { lat, lon } = this.center();
    return `${Math.abs(lat).toFixed(2)}°${lat >= 0 ? "N" : "S"}  ${Math.abs(lon).toFixed(2)}°${lon >= 0 ? "E" : "W"}`;
  }
}
