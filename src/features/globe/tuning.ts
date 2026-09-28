import { geoDistance, type GeoProjection } from "d3-geo";
import type { Category } from "@/lib/categories";
import type { Radio } from "./radio";

export type EngineItem = {
  key: string;
  category: Category;
  lat: number;
  lon: number;
  label: string;
  narrated: boolean;
};

/** An item on the visible side of the globe, in screen pixels, `d` from the ring. */
export type Visible = { item: EngineItem; x: number; y: number; d: number };

/** Tune in inside this many pixels of the ring; drop out beyond TUNE_OUT, so the edge doesn't flicker. */
const TUNE_IN = 22;
const TUNE_OUT = 32;
/** A dot resting this close to the ring glides into it. */
export const SNAP = 56;

/** Items on the near side of the globe, nearest to the ring first. */
export function findVisible(
  items: EngineItem[],
  projection: GeoProjection,
  center: [number, number],
  ring: { x: number; y: number },
): Visible[] {
  const out: Visible[] = [];
  for (const item of items) {
    if (geoDistance([item.lon, item.lat], center) > Math.PI / 2 - 0.03) continue;
    const p = projection([item.lon, item.lat]);
    if (!p) continue;
    out.push({ item, x: p[0], y: p[1], d: Math.hypot(p[0] - ring.x, p[1] - ring.y) });
  }
  return out.sort((a, b) => a.d - b.d);
}

/** Which item should be tuned in, keeping the current one until it leaves the wider radius. */
function nextTuned(visible: Visible[], current: string | null): string | null {
  if (current) {
    const cur = visible.find((v) => v.item.key === current);
    if (cur && cur.d <= TUNE_OUT) return current;
  }
  const near = visible[0];
  return near && near.d <= TUNE_IN ? near.item.key : null;
}

type TunerEvents = {
  radio: Radio;
  onTune: (key: string | null) => void;
  onNearest: (key: string | null) => void;
};

/** Tracks what's tuned in and what's nearest, and reports changes. */
export class Tuner {
  key: string | null = null;
  private nearest: string | null | undefined = undefined;

  constructor(private events: TunerEvents) {}

  update(visible: Visible[]) {
    const next = nextTuned(visible, this.key);
    if (next !== this.key) {
      this.key = next;
      this.events.onTune(next);
      if (next) this.events.radio.burst();
    }
    const near = visible[0];
    const nearest = near?.item.key ?? null;
    if (nearest !== this.nearest) {
      this.nearest = nearest;
      this.events.onNearest(nearest);
    }
    this.events.radio.update(near ? near.d : 999, !!this.key);
  }

  clear() {
    if (this.key === null) return;
    this.key = null;
    this.events.onTune(null);
  }
}

/** Nearest visible item within `radius` pixels of a point. */
export function hitTest(visible: Visible[], x: number, y: number, radius = 22): Visible | null {
  let best: Visible | null = null;
  let bestD = radius;
  for (const v of visible) {
    const d = Math.hypot(v.x - x, v.y - y);
    if (d < bestD) {
      best = v;
      bestD = d;
    }
  }
  return best;
}
