import type { GeoPermissibleObjects } from "d3-geo";
import type { View } from "./camera";
import type { Radio } from "./radio";

/** What a GlobeEngine is created with: its canvases, coastlines, opening view, ring layout and callbacks. */
export type EngineOptions = {
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
  /** A canvas between the globe and the markers for the Moon and the orbit shell (see space.ts). */
  space?: HTMLCanvasElement;
  /** The Moon was tapped. */
  onMoon?: () => void;
};

/** The 2D context of a canvas, or a clear error where canvases aren't supported. */
export function context(canvas: HTMLCanvasElement) {
  const ctx = canvas.getContext("2d");
  if (!ctx) throw new Error("Canvas 2D is not available");
  return ctx;
}
