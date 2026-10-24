import type { Camera } from "./camera";
import { Declutter } from "./declutter";
import { drawMarkers } from "./draw";
import { glowDiffers, updateCharge } from "./glow";
import { placeLabels, type Label } from "./labels";
import type { Radio } from "./radio";
import { findVisible, Tuner, type EngineItem, type Visible } from "./tuning";

type Events = {
  radio: Radio;
  onTune: (key: string | null) => void;
  onNearest: (key: string | null) => void;
};

/** Labels show for famous cases from this zoom in. */
const LABEL_ZOOM = 2.3;

/**
 * The markers on the globe: which items there are, which survive decluttering at this zoom, which are on the
 * visible side and where, what's tuned in, and drawing them. The engine owns the camera and input.
 */
export class Scene {
  readonly tuner: Tuner;
  visible: Visible[] = [];
  famous = true;
  private items: EngineItem[] = [];
  private declutter = new Declutter();
  private pinned: string | null = null;
  private charge = new Map<string, number>();
  /** The charge levels as last drawn. */
  private drawn = new Map<string, number>();
  private labels: Label[] = [];
  private lastFrame = 0;
  private stale = true;

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

  /** Something changed that the camera doesn't know about (the tune was cleared): draw on the next frame. */
  invalidate() {
    this.stale = true;
  }

  /** After the view changes: which markers show, where they are on screen, what's tuned in, and the labels. */
  layout(cam: Camera) {
    const shown = this.declutter.select(this.items, cam.radius, [this.pinned, this.tuner.key]);
    this.visible = findVisible(shown, cam.projection, cam.target, { x: cam.frame.CX, y: cam.frame.CY });
    this.tuner.update(this.visible, this.pinned);
    this.placeLabels(cam);
  }

  /**
   * Each frame: charge and fade the markers, then draw them. The drawing is skipped when nothing has moved and no
   * glow has changed (a fading afterglow or a charging marker), so a globe at rest costs next to nothing.
   */
  draw(cam: Camera, now: number, moved: boolean) {
    // Capped, so a backgrounded tab doesn't come back with every afterglow gone at once.
    const dt = this.lastFrame ? Math.min(0.1, (now - this.lastFrame) / 1000) : 0;
    this.lastFrame = now;
    updateCharge(this.charge, this.tuner.key, this.visible, dt, this.reduce);
    if (!moved && !this.stale && !glowDiffers(this.drawn, this.charge)) return;
    this.drawn = new Map(this.charge);
    if (this.stale) this.placeLabels(cam);
    this.stale = false;
    drawMarkers(this.ctx, this.visible, cam.frame, {
      tunedKey: this.tuner.key,
      famous: this.famous,
      labels: this.labels,
      font: this.font,
      charge: this.charge,
    });
  }

  private placeLabels(cam: Camera) {
    if (!this.famous || cam.zoom < LABEL_ZOOM) {
      this.labels = [];
      return;
    }
    this.ctx.font = this.font;
    this.labels = placeLabels(this.ctx, this.visible, this.tuner.key);
  }
}
