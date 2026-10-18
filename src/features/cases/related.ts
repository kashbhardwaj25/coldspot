import { haversineKm } from "@/lib/geo";
import type { CaseItem } from "@/lib/types";

const COUNT = 4;

/** Cases to link from a case page: the nearest ones, then others in the same category, nearest first. */
export function relatedCases(all: CaseItem[], c: CaseItem) {
  const others = all
    .filter((o) => o.slug !== c.slug)
    .map((o) => ({ o, km: haversineKm(c.lat, c.lon, o.lat, o.lon) }))
    .sort((a, b) => a.km - b.km);
  const nearby = others.slice(0, COUNT).map((x) => x.o);
  const shown = new Set(nearby.map((n) => n.slug));
  const sameCategory = others
    .filter((x) => x.o.category === c.category && !shown.has(x.o.slug))
    .slice(0, COUNT)
    .map((x) => x.o);
  return { nearby, sameCategory };
}

/** Sort key for titles, ignoring a leading "The". */
export const titleKey = (c: CaseItem) => c.title.replace(/^The /, "").toLowerCase();
