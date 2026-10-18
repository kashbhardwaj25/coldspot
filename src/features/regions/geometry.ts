import type { Geometry } from "geojson";

/** Every ring (outer edges and holes) of a polygon or multipolygon, as [lon, lat] points. */
export type Rings = [number, number][][];

export function ringsOf(g: Geometry): Rings {
  if (g.type === "Polygon") return g.coordinates as Rings;
  if (g.type === "MultiPolygon") return g.coordinates.flat() as Rings;
  return [];
}

/**
 * Even-odd ray casting on flat lon/lat. Unlike a spherical test it doesn't depend on which way a ring winds,
 * which simplification can flip on small shapes. Holes count because each crossing toggles.
 */
export function inRings(rings: Rings, lon: number, lat: number): boolean {
  let inside = false;
  for (const ring of rings) {
    for (let i = 0, j = ring.length - 1; i < ring.length; j = i++) {
      const [xi, yi] = ring[i] ?? [0, 0];
      const [xj, yj] = ring[j] ?? [0, 0];
      if (yi > lat !== yj > lat && lon < ((xj - xi) * (lat - yi)) / (yj - yi) + xi) inside = !inside;
    }
  }
  return inside;
}

/** Distance from a point to the nearest edge, in degrees, with longitude scaled by latitude. */
export function distanceToRings(rings: Rings, lon: number, lat: number): number {
  const k = Math.cos((lat * Math.PI) / 180);
  let best = Infinity;
  for (const ring of rings) {
    for (let i = 1; i < ring.length; i++) {
      const [ax, ay] = ring[i - 1] ?? [0, 0];
      const [bx, by] = ring[i] ?? [0, 0];
      const dx = (bx - ax) * k;
      const dy = by - ay;
      const px = (lon - ax) * k;
      const py = lat - ay;
      const t = Math.max(0, Math.min(1, (px * dx + py * dy) / (dx * dx + dy * dy || 1)));
      best = Math.min(best, Math.hypot(px - t * dx, py - t * dy));
    }
  }
  return best;
}
