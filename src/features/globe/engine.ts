import { geoPath, type GeoPermissibleObjects } from "d3-geo";
import { Camera, clampZoom, type View } from "./camera";
import { drawGlobe, drawMarkers } from "./draw";
import { bindInput, type InputTarget } from "./input";
import { flight, Motion, zoomTo } from "./motion";
import type { Radio } from "./radio";
import { formatCoords } from "@/lib/geo";
import { findVisible, hitTest, SNAP, Tuner, type EngineItem, type Visible } from "./tuning";

export type { View } from "./camera";
export type { EngineItem } from "./tuning";

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

function context(canvas: HTMLCanvasElement) {
  const ctx = canvas.getContext("2d");
  if (!ctx) throw new Error("Canvas 2D is not available");
  return ctx;
}

/**
 * Framework-free orthographic globe on two canvases: the base (sphere and land) redraws only when the view
 * changes, the dots layer every frame. React talks to it only through the public methods and callbacks.
 */
export class GlobeEngine implements InputTarget {
  private cam: Camera;
  private tuner: Tuner;
  private bctx: CanvasRenderingContext2D;
  private dctx: CanvasRenderingContext2D;
  private path;
  private reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;
  private font: string;

  private items: EngineItem[] = [];
  private famous = true;
  private visible: Visible[] = [];
  private motion = new Motion(SNAP);
  private raf = 0;
  private unbind: () => void;

  constructor(private o: Options) {
    this.cam = new Camera(o.view);
    this.tuner = new Tuner(o);
    this.bctx = context(o.base);
    this.dctx = context(o.dots);
    this.path = geoPath(this.cam.projection, this.bctx);
    this.font = `400 10.5px ${getComputedStyle(o.dots).getPropertyValue("--mono").trim() || "monospace"}`;
    this.unbind = bindInput(o.dots, this);
    window.addEventListener("resize", this.resize);
    this.resize();
    this.raf = requestAnimationFrame(this.loop);
  }

  destroy() {
    cancelAnimationFrame(this.raf);
    this.unbind();
    window.removeEventListener("resize", this.resize);
  }

  /* ---------- public API ---------- */

  setItems(items: EngineItem[], famous: boolean) {
    this.items = items;
    this.famous = famous;
    this.cam.dirty = true;
  }

  clearTune() {
    this.tuner.clear();
  }

  center() {
    return this.cam.center();
  }

  flyTo(lon: number, lat: number, zoom?: number, duration = 1500) {
    const z0 = this.cam.zoom;
    const z1 = zoom ?? Math.max(z0, 3.2);
    this.motion.play(
      flight(this.cam.target, [lon, lat], [z0, z1], this.reduce ? 1 : duration, (x, y, z) => {
        this.cam.look(x, y);
        this.cam.zoom = z;
      }),
    );
    this.o.onInteract();
  }

  zoomBy(factor: number) {
    this.motion.play(zoomTo(this.cam.zoom, clampZoom(this.cam.zoom * factor), (z) => this.cam.setZoom(z)));
  }

  resize = () => this.cam.resize([this.o.dots, this.o.base], this.o.layout);

  /* ---------- input (see input.ts) ---------- */

  getZoom = () => this.cam.zoom;
  setZoom = (z: number) => this.cam.setZoom(z);
  press() {
    this.motion.held = true;
    this.interrupt();
  }
  interrupt() {
    this.motion.stop();
    this.o.onInteract();
  }
  drag(dx: number, dy: number, dt: number) {
    const k = this.cam.degPerPx();
    this.cam.turn(dx * k, -dy * k);
    this.motion.fling(dx * k, -dy * k, dt);
  }
  release(flick: boolean) {
    this.motion.held = false;
    this.motion.settle(flick);
  }
  nudge(dx: number, dy: number) {
    this.interrupt();
    const k = this.cam.degPerPx();
    this.cam.turn(dx * k, -dy * k);
    this.motion.settle(false, 250);
  }
  tap(x: number, y: number) {
    const hit = hitTest(this.visible, x, y);
    const { CX, CY } = this.cam.frame;
    if (hit && hit.item.key !== this.tuner.key) this.flyTo(hit.item.lon, hit.item.lat, this.cam.zoom, 650);
    else if (hit || Math.hypot(x - CX, y - CY) < 30) this.openTuned();
  }
  openTuned() {
    if (this.tuner.key) this.o.onOpenTuned();
  }

  /* ---------- loop ---------- */

  private loop = (now: number) => {
    this.motion.step(now, this.cam, this.visible[0]);
    const { cam } = this;
    if (cam.dirty) {
      cam.dirty = false;
      cam.update();
      drawGlobe(this.bctx, this.path, this.o.land, cam.frame, cam.radius, this.famous);
      const c = cam.center();
      this.o.onCoords(formatCoords(c.lat, c.lon));
      this.visible = findVisible(this.items, cam.projection, cam.target, { x: cam.frame.CX, y: cam.frame.CY });
      this.tuner.update(this.visible);
    }
    drawMarkers(this.dctx, this.visible, cam.frame, {
      tunedKey: this.tuner.key,
      famous: this.famous,
      labels: this.famous && cam.zoom >= 2.3,
      font: this.font,
      t: this.reduce ? null : now / 1000,
    });
    this.raf = requestAnimationFrame(this.loop);
  };
}
