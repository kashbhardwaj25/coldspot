import { geoPath, type GeoPermissibleObjects } from "d3-geo";
import { Camera, clampZoom, type View } from "./camera";
import { drawGlobe } from "./draw";
import { bindInput, type InputTarget } from "./input";
import { flight, Motion, zoomTo } from "./motion";
import type { Radio } from "./radio";
import { formatCoords } from "@/lib/geo";
import { Scene } from "./scene";
import { hitTest, SNAP, type EngineItem } from "./tuning";

export type { View } from "./camera";
export type { EngineItem } from "./tuning";

type Options = {
  base: HTMLCanvasElement;
  dots: HTMLCanvasElement;
  /** Light coastlines, drawn while the globe moves. Detailed ones arrive later through `setDetail`. */
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
  /** Glide to a nearby marker when the view comes to rest (the main map). Off for the pin picker. */
  snap?: boolean;
};

function context(canvas: HTMLCanvasElement) {
  const ctx = canvas.getContext("2d");
  if (!ctx) throw new Error("Canvas 2D is not available");
  return ctx;
}

/** Milliseconds the view has to stay still before the detailed coastlines are drawn. */
const SETTLE = 120;

/**
 * Framework-free orthographic globe on two canvases: the base (sphere and land) redraws only when the view
 * changes, the dots layer only while something on it moves or glows. React talks to it only through the public
 * methods and callbacks.
 */
export class GlobeEngine implements InputTarget {
  private cam: Camera;
  private scene: Scene;
  private bctx: CanvasRenderingContext2D;
  private path;
  private reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;
  private motion = new Motion(SNAP);
  private raf = 0;
  private unbind: () => void;
  private detail: GeoPermissibleObjects | null = null;
  private sharp = false;
  private stillSince = 0;

  constructor(private o: Options) {
    this.cam = new Camera(o.view);
    this.bctx = context(o.base);
    this.path = geoPath(this.cam.projection, this.bctx);
    const font = `400 10.5px ${getComputedStyle(o.dots).getPropertyValue("--mono").trim() || "monospace"}`;
    this.scene = new Scene(o, context(o.dots), font, this.reduce);
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
    this.scene.setItems(items, famous);
    this.cam.dirty = true;
  }

  /** Detailed coastlines, drawn whenever the view is at rest. */
  setDetail(land: GeoPermissibleObjects) {
    this.detail = land;
    this.sharp = false;
  }

  /** Always show this item, even where markers are thinned out. Use before flying to it. */
  pin(key: string | null) {
    this.scene.pin(key);
    this.cam.dirty = true;
  }

  clearTune() {
    this.scene.tuner.clear();
    this.scene.invalidate();
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
    const hit = hitTest(this.scene.visible, x, y);
    const { CX, CY } = this.cam.frame;
    if (hit && hit.item.key !== this.scene.tuner.key) this.flyTo(hit.item.lon, hit.item.lat, this.cam.zoom, 650);
    else if (hit || Math.hypot(x - CX, y - CY) < 30) this.openTuned();
  }
  openTuned() {
    if (this.scene.tuner.key) this.o.onOpenTuned();
  }

  /* ---------- loop ---------- */

  private loop = (now: number) => {
    this.motion.step(now, this.cam, this.o.snap === false ? undefined : this.scene.visible[0]);
    const { cam } = this;
    const moved = cam.dirty;
    if (moved) {
      cam.dirty = false;
      cam.update();
      this.drawBase(false);
      this.stillSince = now;
      const c = cam.center();
      this.o.onCoords(formatCoords(c.lat, c.lon));
      this.scene.layout(cam);
    } else if (!this.sharp && this.detail && now - this.stillSince > SETTLE) this.drawBase(true);
    this.scene.draw(cam, now, moved);
    this.raf = requestAnimationFrame(this.loop);
  };

  /** Light coastlines while moving keep dragging smooth; the detailed ones once the view rests. */
  private drawBase(sharp: boolean) {
    const land = sharp && this.detail ? this.detail : this.o.land;
    this.sharp = land === this.detail;
    drawGlobe(this.bctx, this.path, land, this.cam.frame, this.cam.radius);
  }
}
