import { fold } from "./search";

/** A place in the town search: [name, "State, India" or country, lat, lon, other names]. Built by scripts/build-towns.ts. */
export type Town = [name: string, region: string, lat: number, lon: number, aliases?: string[]];

let towns: Promise<Town[]> | null = null;

/** The town list (about 20 KB), fetched the first time someone types a place. */
export function loadTowns(): Promise<Town[]> {
  towns ??= fetch("/towns.json")
    .then((r) => r.json() as Promise<Town[]>)
    .catch((err: unknown) => {
      towns = null;
      throw err;
    });
  return towns;
}

/** How well a name matches: 0 starts with the query, 1 a later word does, 2 contains it, -1 no match. */
function score(name: string, q: string) {
  const n = fold(name);
  if (n.startsWith(q)) return 0;
  if (n.includes(` ${q}`) || n.includes(`-${q}`)) return 1;
  return n.includes(q) ? 2 : -1;
}

/** Best matches for what's typed, by name or an older name. Ties keep the list's order (India first). */
export function searchTowns(list: Town[], query: string, limit = 8): Town[] {
  const q = fold(query.trim());
  if (q.length < 2) return [];
  const scored: [Town, number][] = [];
  for (const t of list) {
    const best = Math.min(...[t[0], ...(t[4] ?? [])].map((n) => score(n, q)).map((s) => (s < 0 ? 9 : s)));
    if (best < 9) scored.push([t, best]);
  }
  return scored
    .sort((a, b) => a[1] - b[1])
    .slice(0, limit)
    .map(([t]) => t);
}
