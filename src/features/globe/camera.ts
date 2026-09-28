import { geoOrthographic } from "d3-geo";
import type { Frame } from "./draw";

export type View = { lon: number; lat: number; zoom: number };

const MIN_ZOOM = 0.85;
const MAX_ZOOM = 26;
const clampLat = (v: number) => Math.max(-85, Math.min(85, v));
export const clampZoom = (z: number) => Math.max(MIN_ZOOM, Math.min(MAX_ZOOM, z));

/** Where the globe is looking, how far it's zoomed in, and the canvas size. `dirty` means the base needs a redraw. */
export class Camera {
  readonly projection = geoOrthographic().clipAngle(90).precision(0.35);
  frame: Frame = { W: 0, H: 0, DPR: 1, CX: 0, CY: 0 };
  zoom: number;
  dirty = true;
  private rot: [number, number, number];
  private R0 = 0;

  constructor(view: View) {
    this.rot = [-view.lon, -view.lat, 0];
    this.zoom = view.zoom;
  }

  /** The point under the ring, as [lon, lat]. */
  get target(): [number, number] {
    return [-this.rot[0], -this.rot[1]];
  }

  get radius() {
    return this.R0 * this.zoom;
  }

  center() {
    return { lat: -this.rot[1], lon: ((-this.rot[0] + 540) % 360) - 180 };
  }

  look(lon: number, lat: number) {
    this.rot[0] = -lon;
    this.rot[1] = -lat;
    this.dirty = true;
  }

  /** Rotate by degrees of longitude and latitude. */
  turn(dLon: number, dLat: number) {
    this.rot[0] += dLon;
    this.rot[1] = clampLat(this.rot[1] + dLat);
    this.dirty = true;
  }

  setZoom(z: number) {
    this.zoom = clampZoom(z);
    this.dirty = true;
  }

  /** Degrees the globe turns per pixel dragged at the current zoom. */
  degPerPx() {
    return 57.2958 / this.radius;
  }

  resize(canvases: HTMLCanvasElement[], layout: (w: number, h: number) => { cx: number; cy: number }) {
    const first = canvases[0];
    if (!first) return;
    const { width: W, height: H } = first.getBoundingClientRect();
    const DPR = Math.min(window.devicePixelRatio || 1, 2);
    for (const c of canvases) {
      c.width = W * DPR;
      c.height = H * DPR;
    }
    const { cx, cy } = layout(W, H);
    this.frame = { W, H, DPR, CX: cx, CY: cy };
    this.R0 = Math.min(W, H) * 0.4;
    this.dirty = true;
  }

  /** Point the projection at the current view before drawing. */
  update() {
    this.projection.rotate(this.rot).scale(this.radius).translate([this.frame.CX, this.frame.CY]);
  }
}
