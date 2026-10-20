import type { Camera } from "./camera";
import { Declutter } from "./declutter";
import { drawMarkers } from "./draw";
import { updateCharge } from "./glow";
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
  private charge = new Map<string, number>();
  private lastFrame = 0;

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
    // A new set of markers starts unlit: afterglow from the other mode would light the wrong places.
    this.charge.clear();
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

  /** Every frame: charge and fade the markers, then draw them. Labels only for famous cases zoomed in. */
  draw(cam: Camera, now: number) {
    // Capped, so a backgrounded tab doesn't come back with every afterglow gone at once.
    const dt = this.lastFrame ? Math.min(0.1, (now - this.lastFrame) / 1000) : 0;
    this.lastFrame = now;
    updateCharge(this.charge, this.tuner.key, this.visible, dt, this.reduce);
    drawMarkers(this.ctx, this.visible, cam.frame, {
      tunedKey: this.tuner.key,
      famous: this.famous,
      labels: this.famous && cam.zoom >= 2.3,
      font: this.font,
      charge: this.charge,
    });
  }
}
