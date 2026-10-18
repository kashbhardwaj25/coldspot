import type { Camera } from "./camera";
import { Declutter } from "./declutter";
import { drawMarkers } from "./draw";
import type { Radio } from "./radio";
import { findVisible, Tuner, type EngineItem, type Visible } from "./tuning";

type Events = {
  radio: Radio;
  onTune: (key: string | null) => void;
  onNearest: (key: string | null) => void;
};

/**
 * The markers on the globe: which items there are, which survive decluttering at this zoom, which are on the
 * visible side and where, what's tuned in, and drawing them each frame. The engine owns the camera and input.
 */
export class Scene {
  readonly tuner: Tuner;
  visible: Visible[] = [];
  famous = true;
  private items: EngineItem[] = [];
  private declutter = new Declutter();
  private pinned: string | null = null;

  constructor(
    events: Events,
    private ctx: CanvasRenderingContext2D,
    private font: string,
    private reduce: boolean,
  ) {
    this.tuner = new Tuner(events);
  }

  setItems(items: EngineItem[], famous: boolean) {
    this.items = items;
    this.famous = famous;
  }

  /** Always show this item, even where markers are thinned out. */
  pin(key: string | null) {
    this.pinned = key;
  }

  /** After the view changes: which markers show, where they are on screen, and what's tuned in. */
  layout(cam: Camera) {
    const shown = this.declutter.select(this.items, cam.radius, [this.pinned, this.tuner.key]);
    this.visible = findVisible(shown, cam.projection, cam.target, { x: cam.frame.CX, y: cam.frame.CY });
    this.tuner.update(this.visible);
  }

  /** Every frame: the markers, gently pulsing unless motion is reduced. Labels only for famous cases zoomed in. */
  draw(cam: Camera, now: number) {
    drawMarkers(this.ctx, this.visible, cam.frame, {
      tunedKey: this.tuner.key,
      famous: this.famous,
      labels: this.famous && cam.zoom >= 2.3,
      font: this.font,
      t: this.reduce ? null : now / 1000,
    });
  }
}
