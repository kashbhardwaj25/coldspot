import { GLOBE } from "@/lib/tokens";
import { type Visible } from "./tuning";

type Box = { x: number; y: number; w: number; h: number };

const GAP = 4;
const widths = new Map<string, number>();

/** Text width, cached because labels are measured every frame. */
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
 * Case labels beside their markers, skipping any that would overlap one already placed.
 * `visible` is sorted nearest to the ring first, so labels near the ring win in crowded areas.
 */
export function drawLabels(c: CanvasRenderingContext2D, visible: Visible[], tunedKey: string | null, height: number) {
  const placed: Box[] = [];
  // Every marker blocks labels, so text never covers a neighbouring diamond.
  const markers: Box[] = visible.map((v) => ({ x: v.x - 7, y: v.y - 7, w: 14, h: 14 }));
  c.fillStyle = GLOBE.label;
  for (const v of visible) {
    if (v.item.key === tunedKey) continue;
    const box = { x: v.x + 12, y: v.y - height / 2, w: measure(c, v.item.label), h: height };
    if (placed.some((p) => overlaps(box, p)) || markers.some((m) => overlaps(box, m))) continue;
    placed.push(box);
    c.fillText(v.item.label, box.x, v.y);
  }
}
