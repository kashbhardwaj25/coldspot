import { type EngineItem } from "./tuning";

/** Smallest gap between markers on screen, in CSS pixels, before lower-priority ones are hidden. */
const MIN_GAP = 34;
const RAD = Math.PI / 180;

type Cached = { items: EngineItem[]; step: number; pins: string; shown: EngineItem[] };

/**
 * Hides lower-priority markers where they would crowd each other, and brings them back as you zoom in.
 * The spacing is measured in degrees on the globe and changes only in half-octave zoom steps, so the
 * same markers stay visible while dragging. Pinned items (the tuned one, or one just flown to) always show.
 */
export class Declutter {
  private cache: Cached | null = null;

  select(items: EngineItem[], radius: number, pins: (string | null)[]): EngineItem[] {
    // Degrees of arc that MIN_GAP pixels covers at the centre of the globe, rounded up to a half-octave step.
    const step = Math.ceil(Math.log2(MIN_GAP / (radius * RAD)) * 2);
    const pinKey = pins.join("|");
    const c = this.cache;
    if (c && c.items === items && c.step === step && c.pins === pinKey) return c.shown;
    const pinned = new Set(pins.filter((p): p is string => p !== null));
    const shown = thin(items, 2 ** (step / 2), pinned);
    this.cache = { items, step, pins: pinKey, shown };
    return shown;
  }
}

/** Greedy thinning: pinned items first, then by priority (stable, so earlier items win ties). */
function thin(items: EngineItem[], gap: number, pinned: Set<string>): EngineItem[] {
  const order = items
    .map((item, i) => ({ item, rank: pinned.has(item.key) ? Infinity : item.priority, i }))
    .sort((a, b) => b.rank - a.rank || a.i - b.i);
  const kept: EngineItem[] = [];
  for (const { item } of order) {
    if (pinned.has(item.key) || !kept.some((k) => tooClose(item, k, gap))) kept.push(item);
  }
  return kept;
}

/** Approximate distance in degrees, good enough at marker spacing; longitude scaled by latitude. */
function tooClose(a: EngineItem, b: EngineItem, gap: number) {
  const dLat = a.lat - b.lat;
  let dLon = Math.abs(a.lon - b.lon);
  if (dLon > 180) dLon = 360 - dLon;
  dLon *= Math.cos(((a.lat + b.lat) / 2) * RAD);
  return dLat * dLat + dLon * dLon < gap * gap;
}
