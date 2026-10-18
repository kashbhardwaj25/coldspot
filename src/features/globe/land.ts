import type { GeoPermissibleObjects } from "d3-geo";
import { feature } from "topojson-client";
import type { GeometryCollection, Topology } from "topojson-specification";

let land: Promise<GeoPermissibleObjects> | null = null;

/** Coastlines for the globe (no country borders), fetched once and shared by every globe on the page. */
export function loadLand(): Promise<GeoPermissibleObjects> {
  land ??= fetch("/land-50m.json")
    .then((r) => r.json() as Promise<Topology<{ land: GeometryCollection }>>)
    .then((topo) => feature(topo, topo.objects.land) as unknown as GeoPermissibleObjects)
    .catch((err: unknown) => {
      land = null;
      throw err;
    });
  return land;
}
