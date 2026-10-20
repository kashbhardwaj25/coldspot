/**
 * Builds public/towns.json, the list behind the town search in the share form.
 * Source: Natural Earth populated places (public domain), every Indian place plus places elsewhere with
 * 500,000+ people or a capital, with Indian state and city names corrected and towns from towns-extra.ts added.
 * Places in disputed areas that the dataset files under another country are left out (see AGENTS.md on borders).
 *   npx tsx scripts/build-towns.ts
 */
import { writeFileSync } from "node:fs";
import { extraTowns } from "../src/data/towns-extra";

const SOURCE =
  "https://raw.githubusercontent.com/nvkelso/natural-earth-vector/master/geojson/ne_10m_populated_places_simple.geojson";

type Place = {
  name: string;
  namealt: string | null;
  adm0name: string;
  adm1name: string | null;
  adm0cap: number;
  pop_max: number;
  latitude: number;
  longitude: number;
};

/** Current names, with the old ones kept as aliases so either finds the town. */
const RENAME: Record<string, [string, string[]]> = {
  Simla: ["Shimla", ["Simla"]],
  "Dehra Dun": ["Dehradun", ["Dehra Dun"]],
  Allahabad: ["Prayagraj", ["Allahabad"]],
  Gurgaon: ["Gurugram", ["Gurgaon"]],
  Nasik: ["Nashik", ["Nasik"]],
  Sholapur: ["Solapur", ["Sholapur"]],
  Jullundur: ["Jalandhar", ["Jullundur"]],
  Haora: ["Howrah", ["Haora"]],
  Raurkela: ["Rourkela", ["Raurkela"]],
  Baramula: ["Baramulla", ["Baramula"]],
  Vishakhapatnam: ["Visakhapatnam", ["Vizag", "Vishakhapatnam"]],
  Barddhaman: ["Bardhaman", ["Burdwan"]],
  "Alipur Duar": ["Alipurduar", []],
  Sialkote: ["Sialkot", []],
};
const GUJARAT = new Set([
  "Ahmedabad",
  "Bhavnagar",
  "Bhuj",
  "Gandhinagar",
  "Navsari",
  "Porbandar",
  "Rajkot",
  "Surat",
  "Vadodara",
]);
const STATE_FIX: Record<string, string> = { Uttaranchal: "Uttarakhand", Orissa: "Odisha" };
const COUNTRY_FIX: Record<string, string> = {
  "United States of America": "United States",
  "United Republic of Tanzania": "Tanzania",
  "Democratic Republic of the Congo": "DR Congo",
  "Republic of Congo": "Congo",
};
const DISPUTED_ADM1 = new Set(["Northern Areas", "Gilgit-Baltistan", "Azad Kashmir"]);

const round = (v: number) => Math.round(v * 1000) / 1000;

function indianState(p: Place) {
  if (GUJARAT.has(p.name)) return "Gujarat";
  if (p.adm1name === "Dadra and Nagar Haveli") return "Dadra and Nagar Haveli and Daman and Diu";
  return STATE_FIX[p.adm1name ?? ""] ?? p.adm1name ?? "";
}

const res = await fetch(SOURCE);
if (!res.ok) throw new Error(`Couldn't download Natural Earth places: ${res.status}`);
const places = ((await res.json()) as { features: { properties: Place }[] }).features.map((f) => f.properties);

type Row = [name: string, region: string, lat: number, lon: number, aliases?: string[]];
const rows: Row[] = [];
for (const p of places) {
  const india = p.adm0name === "India";
  if (DISPUTED_ADM1.has(p.adm1name ?? "")) continue;
  if (!india && p.pop_max < 500_000 && p.adm0cap !== 1) continue;
  const [name, renamed] = RENAME[p.name] ?? [p.name, []];
  const aliases = [...renamed, ...(p.namealt ? [p.namealt] : [])].filter((a) => a !== name);
  const region = india ? `${indianState(p)}, India` : (COUNTRY_FIX[p.adm0name] ?? p.adm0name);
  rows.push([
    name,
    region,
    round(p.latitude),
    round(p.longitude),
    ...(aliases.length ? [[...new Set(aliases)]] : []),
  ] as Row);
}
for (const [name, state, lat, lon, aliases] of extraTowns) {
  rows.push([name, `${state}, India`, lat, lon, ...(aliases ? [aliases] : [])] as Row);
}
// India first, then alphabetical: the search keeps this order among equally good matches.
rows.sort((a, b) => Number(b[1].endsWith(", India")) - Number(a[1].endsWith(", India")) || a[0].localeCompare(b[0]));
writeFileSync("public/towns.json", JSON.stringify(rows));
console.log(`✓ Wrote ${rows.length} towns to public/towns.json`);
