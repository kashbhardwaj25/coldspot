import { GLOBE } from "@/lib/tokens";
import { type Visible } from "./tuning";

type Box = { x: number; y: number; w: number; h: number };

/** A case label placed beside its marker, in CSS pixels. */
export type Label = { text: string; x: number; y: number };

/** Height of a label's box for collision checks, in CSS pixels. */
const HEIGHT = 14;
const GAP = 4;
const widths = new Map<string, number>();

/** Text width, cached because labels are placed again on every frame the view moves. */
function measure(c: CanvasRenderingContext2D, text: string) {
  const key = `${c.font}|${text}`;
  let w = widths.get(key);
  if (w === undefined) {
    w = c.measureText(text).width;
    widths.set(key, w);
  }
  return w;
}

const overlaps = (a: Box, b: Box) =>
  a.x < b.x + b.w + GAP && b.x < a.x + a.w + GAP && a.y < b.y + b.h + GAP && b.y < a.y + a.h + GAP;

/**
 * Case labels beside their markers, skipping any that would overlap one already placed. Measured with the
 * context's current font. `visible` is sorted nearest to the ring first, so labels near the ring win when crowded.
 * Placed when the view changes, then drawn as they are on later frames.
 */
export function placeLabels(c: CanvasRenderingContext2D, visible: Visible[], tunedKey: string | null): Label[] {
  const placed: Box[] = [];
  const labels: Label[] = [];
  // Every marker blocks labels, so text never covers a neighbouring diamond.
  const markers: Box[] = visible.map((v) => ({ x: v.x - 7, y: v.y - 7, w: 14, h: 14 }));
  for (const v of visible) {
    if (v.item.key === tunedKey) continue;
    const box = { x: v.x + 12, y: v.y - HEIGHT / 2, w: measure(c, v.item.label), h: HEIGHT };
    if (placed.some((p) => overlaps(box, p)) || markers.some((m) => overlaps(box, m))) continue;
    placed.push(box);
    labels.push({ text: v.item.label, x: box.x, y: v.y });
  }
  return labels;
}

export function drawLabels(c: CanvasRenderingContext2D, labels: Label[]) {
  c.fillStyle = GLOBE.label;
  for (const l of labels) c.fillText(l.text, l.x, l.y);
}
