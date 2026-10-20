import type { Place } from "@/lib/types";

/** A region needs this many cases or stories to get its own page, or to be listed as a state. */
export const MIN_PER_PLACE = 3;

type Info = { name: string; lat: number; lon: number; zoom: number };
type Located = { countryKey: string | null; stateKey: string | null };
type Lookup = { countries: Record<string, Info>; states: Record<string, Info> };

const AT_SEA: Info = { name: "At sea", lat: 0, lon: -150, zoom: 1.2 };

function place(key: string, info: Info, count: number, states: Place[] = []): Place {
  return { key, name: info.name, count, lat: info.lat, lon: info.lon, zoom: info.zoom, states };
}

const byCount = (a: Place, b: Place) => b.count - a.count || a.name.localeCompare(b.name);

/**
 * Countries with how many items each has, most first, each with its states that reach MIN_PER_PLACE.
 * Pure: the region names and views are passed in, so it works the same on the server and in tests.
 */
export function buildPlaces(items: Located[], lookup: Lookup): Place[] {
  const countries = new Map<string, number>();
  const states = new Map<string, number>();
  for (const i of items) {
    if (!i.countryKey) continue;
    countries.set(i.countryKey, (countries.get(i.countryKey) ?? 0) + 1);
    if (i.stateKey) states.set(i.stateKey, (states.get(i.stateKey) ?? 0) + 1);
  }
  const out: Place[] = [];
  for (const [key, count] of countries) {
    const info = key === "at-sea" ? AT_SEA : lookup.countries[key];
    if (!info) continue;
    const own = [...states]
      .filter(([k, n]) => k.startsWith(`${key}/`) && n >= MIN_PER_PLACE && lookup.states[k])
      .map(([k, n]) => place(k, lookup.states[k] as Info, n))
      .sort(byCount);
    out.push(place(key, info, count, own));
  }
  return out.sort(byCount);
}

/** "in Japan", "in Kerala, India", or "at sea". */
export const inPlace = (key: string, where: string) => (key === "at-sea" ? "at sea" : `in ${where}`);

/** URL path for a place page: `/places/india` or `/places/india/kerala`. */
export const placePath = (key: string) => `/places/${key}`;
