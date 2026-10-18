import { readFileSync } from "node:fs";
import { join } from "node:path";
import { feature } from "topojson-client";
import type { GeometryCollection, Topology } from "topojson-specification";
import { distanceToRings, inRings, ringsOf, type Rings } from "./geometry";

/**
 * Which country and state a point is in, from the outlines in src/data/regions.json (scripts/build-regions.ts).
 * No `server-only` import, because scripts/setup.ts uses it too; never import it into client code (the file is
 * ~3 MB and read from disk on first use).
 */

export type RegionInfo = { name: string; lat: number; lon: number; zoom: number };
export type StateInfo = RegionInfo & { country: string };
type Shape = { k: string; rings: Rings; box: [number, number, number, number] };
type Data = {
  countries: Shape[];
  states: Map<string, Shape[]>;
  countryInfo: Record<string, RegionInfo>;
  stateInfo: Record<string, StateInfo>;
};

export const AT_SEA = "at-sea";
/** How far off a simplified coastline (or a tiny island) a point can be and still count, in degrees (~50 km). */
const COAST = 0.45;
// Natural Earth's states file puts these parts of Kashmir under Pakistan or China; in India's view they're in
// Jammu and Kashmir (Azad Kashmir) or Ladakh (the rest).
const KASHMIR: Record<string, string> = { "pakistan/azad-kashmir": "india/jammu-and-kashmir" };

let data: Data | null = null;

function load(): Data {
  if (data) return data;
  type File = {
    topology: Topology<{ countries: GeometryCollection<{ k: string }>; states: GeometryCollection<{ k: string }> }>;
    countries: Record<string, RegionInfo>;
    states: Record<string, StateInfo>;
  };
  const file = JSON.parse(readFileSync(join(process.cwd(), "src/data/regions.json"), "utf8")) as File;
  const shapes = (name: "countries" | "states"): Shape[] =>
    feature(file.topology, file.topology.objects[name]).features.map((f) => {
      const rings = ringsOf(f.geometry);
      const pts = rings.flat();
      const lons = pts.map((p) => p[0]);
      const lats = pts.map((p) => p[1]);
      return {
        k: f.properties.k,
        rings,
        box: [Math.min(...lons), Math.min(...lats), Math.max(...lons), Math.max(...lats)],
      };
    });
  const states = new Map<string, Shape[]>();
  for (const s of shapes("states")) {
    const country = s.k.split("/")[0] ?? "";
    states.set(country, [...(states.get(country) ?? []), s]);
  }
  data = { countries: shapes("countries"), states, countryInfo: file.countries, stateInfo: file.states };
  return data;
}

const near = (b: Shape["box"], lon: number, lat: number, pad: number) =>
  lon >= b[0] - pad && lon <= b[2] + pad && lat >= b[1] - pad && lat <= b[3] + pad;

/** The shape containing the point; failing that, the nearest one within COAST (coasts and small islands). */
function find(shapes: Shape[], lon: number, lat: number): string | null {
  const hit = shapes.find((s) => near(s.box, lon, lat, 0) && inRings(s.rings, lon, lat));
  if (hit) return hit.k;
  let best: { k: string; d: number } | null = null;
  for (const s of shapes) {
    if (!near(s.box, lon, lat, COAST)) continue;
    const d = distanceToRings(s.rings, lon, lat);
    if (d < COAST && (!best || d < best.d)) best = { k: s.k, d };
  }
  return best?.k ?? null;
}

/** The country (or `at-sea`) and the state, as keys like `india` and `india/kerala`. */
export function regionFor(lat: number, lon: number): { countryKey: string; stateKey: string | null } {
  const d = load();
  const country = find(d.countries, lon, lat);
  if (!country) return { countryKey: AT_SEA, stateKey: null };
  const own = d.states.get(country) ?? [];
  let state = own.find((s) => near(s.box, lon, lat, 0) && inRings(s.rings, lon, lat))?.k ?? null;
  if (!state && country === "india") {
    const other = [...(d.states.get("pakistan") ?? []), ...(d.states.get("china") ?? [])].find(
      (s) => near(s.box, lon, lat, 0) && inRings(s.rings, lon, lat),
    );
    if (other) state = KASHMIR[other.k] ?? "india/ladakh";
  }
  state ??= find(own, lon, lat);
  return { countryKey: country, stateKey: state };
}

/** Names, centres and zoom levels for every region. */
export function regionInfo() {
  const d = load();
  return { countries: d.countryInfo, states: d.stateInfo };
}

/** "Kerala, India", "Japan" or "At sea", for display. */
export function regionLabel(countryKey: string | null, stateKey: string | null): string {
  if (!countryKey) return "";
  if (countryKey === AT_SEA) return "At sea";
  const { countries, states } = regionInfo();
  const country = countries[countryKey]?.name ?? "";
  const state = stateKey ? states[stateKey]?.name : undefined;
  return state ? `${state}, ${country}` : country;
}
