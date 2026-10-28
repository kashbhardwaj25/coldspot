import { haversineKm } from "@/lib/geo";
import type { EngineItem } from "@/features/globe/engine";
import { ORBIT_ALT } from "@/features/globe/space";
import { worldOf } from "@/lib/bodies";
import type { CaseItem, CaseSummary } from "@/lib/types";

/**
 * Cases to send a reader on to: the nearest ones, then others in the same category, nearest first.
 * Used under case pages and at the end of a case file on the map.
 */
export function relatedCases<T extends CaseSummary>(all: T[], c: CaseSummary, count = 4) {
  const others = sameWorld(all, c)
    .map((o) => ({ o, km: haversineKm(c.lat, c.lon, o.lat, o.lon) }))
    .sort((a, b) => a.km - b.km);
  const nearby = others.slice(0, count).map((x) => x.o);
  const shown = new Set(nearby.map((n) => n.slug));
  const sameCategory = others
    .filter((x) => x.o.category === c.category && !shown.has(x.o.slug))
    .slice(0, count)
    .map((x) => x.o);
  return { nearby, sameCategory };
}

/** The other cases on the same globe as `c`: distances to the Moon from Earth mean nothing. */
const sameWorld = <T extends CaseSummary>(all: T[], c: CaseSummary) =>
  all.filter((o) => o.slug !== c.slug && worldOf(o.body) === worldOf(c.body));

/** Sort key for titles, ignoring a leading "The". */
export const titleKey = (c: CaseItem) => c.title.replace(/^The /, "").toLowerCase();

/** Markers for the small globe on a case page: the case itself first, then the `count` cases nearest to it. */
export function caseMarkers(all: CaseSummary[], c: CaseSummary, count = 40): EngineItem[] {
  const near = sameWorld(all, c)
    .map((o) => ({ o, km: haversineKm(c.lat, c.lon, o.lat, o.lon) }))
    .sort((a, b) => a.km - b.km)
    .slice(0, count)
    .map((x) => x.o);
  return [c, ...near].map((o) => ({
    key: `case:${o.slug}`,
    category: o.category,
    lat: o.lat,
    lon: o.lon,
    label: o.title,
    priority: o.slug === c.slug ? 2 : Number(o.featured),
    ...(o.body === "orbit" && { alt: ORBIT_ALT }),
  }));
}
