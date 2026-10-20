/**
 * Builds src/data/regions.json: simplified country and state outlines for looking up a point's region on the
 * server, plus each region's name, centre and zoom. The outlines are never drawn (the map shows no borders).
 * Countries come from Natural Earth's India edition, so disputed areas follow India's point of view.
 * States come from Natural Earth's states and provinces; the UK uses England, Scotland, Wales and Northern Ireland.
 *   npx tsx scripts/build-regions.ts
 */
import { geoArea, geoBounds, geoCentroid, type GeoPermissibleObjects } from "d3-geo";
import { writeFileSync } from "node:fs";
import type { Objects, Topology } from "topojson-specification";
import { topology } from "topojson-server";
import { presimplify, quantile, simplify } from "topojson-simplify";
import type { Feature, FeatureCollection, Geometry, MultiPolygon, Polygon } from "geojson";
import { slugify } from "../src/features/moderation/validation";

const BASE = "https://raw.githubusercontent.com/nvkelso/natural-earth-vector/master/geojson/";
/** Natural Earth's full names (ADMIN), shortened where the everyday name is clearer. */
const COUNTRY_NAMES: Record<string, string> = {
  "United States of America": "United States",
  "Democratic Republic of the Congo": "DR Congo",
  "Republic of the Congo": "Congo",
  "United Republic of Tanzania": "Tanzania",
  "Republic of Serbia": "Serbia",
  "The Bahamas": "Bahamas",
  "Federated States of Micronesia": "Micronesia",
  Turkey: "Türkiye",
  eSwatini: "Eswatini",
};

type Props = Record<string, unknown>;
async function load(name: string) {
  const res = await fetch(`${BASE}${name}.geojson`);
  if (!res.ok) throw new Error(`Couldn't download ${name}: ${res.status}`);
  return (await res.json()) as FeatureCollection<Geometry, Props>;
}

/**
 * Centre and zoom from the region's main pieces: every polygon at least `share` of the largest one's area.
 * That keeps the US on its mainland (not between Alaska and Hawaii) and covers all of England's counties.
 */
function view(features: Feature<Geometry>[], share: number) {
  const parts = features.flatMap((f) =>
    f.geometry.type === "Polygon"
      ? [f.geometry]
      : f.geometry.type === "MultiPolygon"
        ? (f.geometry as MultiPolygon).coordinates.map((c): Polygon => ({ type: "Polygon", coordinates: c }))
        : [],
  );
  const areas = parts.map((p) => geoArea(p as GeoPermissibleObjects));
  const biggest = Math.max(...areas);
  const main: MultiPolygon = {
    type: "MultiPolygon",
    coordinates: parts.filter((_, i) => (areas[i] ?? 0) >= biggest * share).map((p) => p.coordinates),
  };
  const [[w, s], [e, n]] = geoBounds(main as GeoPermissibleObjects);
  const width = (e < w ? e + 360 - w : e - w) * Math.cos(((n + s) / 2) * (Math.PI / 180));
  const extent = Math.max(n - s, width, 0.5);
  const [lon, lat] = geoCentroid(main as GeoPermissibleObjects);
  // The globe shows the whole Earth at zoom ~1 and India (~30° across) at ~3.4. Capped so there's context.
  const zoom = Math.max(1.2, Math.min(10, 100 / extent));
  return { lat: Math.round(lat * 100) / 100, lon: Math.round(lon * 100) / 100, zoom: Math.round(zoom * 10) / 10 };
}

const countries = await load("ne_10m_admin_0_countries_ind");
const states = await load("ne_10m_admin_1_states_provinces");

const countryOf = new Map<string, string>(); // ADM0_A3 → country key
const countryFeatures: Feature<Geometry, { k: string }>[] = [];
const countryInfo: Record<string, { name: string; lat: number; lon: number; zoom: number }> = {};
const byCountry = new Map<string, Feature<Geometry>[]>();
for (const f of countries.features) {
  const name = COUNTRY_NAMES[String(f.properties.ADMIN)] ?? String(f.properties.ADMIN);
  const key = slugify(name);
  countryOf.set(String(f.properties.ADM0_A3), key);
  countryFeatures.push({ type: "Feature", geometry: f.geometry, properties: { k: key } });
  byCountry.set(key, [...(byCountry.get(key) ?? []), f]);
  countryInfo[key] = { name, lat: 0, lon: 0, zoom: 1 };
}
for (const [key, fs] of byCountry) Object.assign(countryInfo[key] ?? {}, view(fs, 0.25));

const stateFeatures: Feature<Geometry, { k: string }>[] = [];
const stateInfo: Record<string, { name: string; country: string; lat: number; lon: number; zoom: number }> = {};
const byState = new Map<string, Feature<Geometry>[]>();
for (const f of states.features) {
  const country = countryOf.get(String(f.properties.adm0_a3));
  if (!country || !f.geometry) continue;
  const name = String(country === "united-kingdom" ? f.properties.geonunit : f.properties.name);
  const key = `${country}/${slugify(name)}`;
  stateFeatures.push({ type: "Feature", geometry: f.geometry, properties: { k: key } });
  byState.set(key, [...(byState.get(key) ?? []), f]);
  stateInfo[key] = { name, country, lat: 0, lon: 0, zoom: 1 };
}
for (const [key, fs] of byState) Object.assign(stateInfo[key] ?? {}, view(fs, 0.1));

// Simplify hard: these only answer "which region is this point in". 2e4 steps is ~2 km, finer than the 5 km blur.
const collections: Record<"countries" | "states", FeatureCollection<Geometry, { k: string }>> = {
  countries: { type: "FeatureCollection", features: countryFeatures },
  states: { type: "FeatureCollection", features: stateFeatures },
};
let topo = topology(collections, 2e4) as Topology<Objects<{ k: string }>>;
topo = presimplify(topo);
topo = simplify(topo, quantile(topo, 0.03));
writeFileSync("src/data/regions.json", JSON.stringify({ topology: topo, countries: countryInfo, states: stateInfo }));

console.log(
  `✓ Wrote ${Object.keys(countryInfo).length} countries and ${Object.keys(stateInfo).length} states to src/data/regions.json`,
);
