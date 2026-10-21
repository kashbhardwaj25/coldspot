import { haversineKm } from "@/lib/geo";
import type { CaseItem, CaseSummary } from "@/lib/types";

/**
 * Cases to send a reader on to: the nearest ones, then others in the same category, nearest first.
 * Used under case pages and at the end of a case file on the map.
 */
export function relatedCases<T extends CaseSummary>(all: T[], c: CaseSummary, count = 4) {
  const others = all
    .filter((o) => o.slug !== c.slug)
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

/** Sort key for titles, ignoring a leading "The". */
export const titleKey = (c: CaseItem) => c.title.replace(/^The /, "").toLowerCase();
