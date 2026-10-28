import type { GeoPermissibleObjects } from "d3-geo";
import { feature } from "topojson-client";
import type { GeometryCollection, Topology } from "topojson-specification";

/**
 * Two sets of coastlines (no country borders): `low` (about 5,000 points, 21 KB) draws the globe fast and is what
 * it shows while moving; `high` (about 60,000 points) replaces it once the view comes to rest. `moon` is the
 * outline of the Moon's seas (about 12,000 points, 49 KB), fetched only when the Moon shows.
 */
export type LandDetail = "low" | "high" | "moon";

export const LAND_FILES: Record<LandDetail, string> = {
  low: "/land-110m.json",
  high: "/land-50m.json",
  moon: "/moon.json",
};

const loaded = new Map<LandDetail, Promise<GeoPermissibleObjects>>();

/** Coastlines at the given detail, fetched once and shared by every globe on the page. */
export function loadLand(detail: LandDetail): Promise<GeoPermissibleObjects> {
  let land = loaded.get(detail);
  if (!land) {
    land = fetch(LAND_FILES[detail])
      .then((r) => r.json() as Promise<Topology<{ land: GeometryCollection }>>)
      .then((topo) => feature(topo, topo.objects.land) as unknown as GeoPermissibleObjects)
      .catch((err: unknown) => {
        loaded.delete(detail);
        throw err;
      });
    loaded.set(detail, land);
  }
  return land;
}
