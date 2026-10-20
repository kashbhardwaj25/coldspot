import "server-only";
import { getCaseSummaries } from "@/features/cases/queries";
import { getApprovedStories } from "@/features/stories/queries";
import type { CaseSummary, Place, StoryItem } from "@/lib/types";
import { regionInfo } from "./lookup";
import { buildPlaces, MIN_PER_PLACE } from "./places";

/** Every country with cases or published stories, for the /places index and the sitemap. */
export function getPlaces(): Place[] {
  return buildPlaces([...getCaseSummaries(), ...getApprovedStories()], regionInfo());
}

/** Places per map mode, for the Places view in the List sheet. */
export function getMapPlaces(cases: CaseSummary[], stories: StoryItem[]) {
  const info = regionInfo();
  return { famous: buildPlaces(cases, info), people: buildPlaces(stories, info) };
}

/** Countries and states with enough items for their own page. */
export function getPlacePages(): { country: string; state?: string }[] {
  return getPlaces()
    .filter((p) => p.count >= MIN_PER_PLACE)
    .flatMap((p) => [
      { country: p.key },
      ...p.states.map((s) => ({ country: p.key, state: s.key.split("/")[1] ?? "" })),
    ]);
}

export type PlaceDetail = { place: Place; country: Place | null; cases: CaseSummary[]; stories: StoryItem[] };

/** One country (or one of its states) with its cases and stories, or null if it hasn't enough for a page. */
export function getPlace(country: string, state?: string): PlaceDetail | null {
  const c = getPlaces().find((p) => p.key === country);
  const key = state ? `${country}/${state}` : country;
  const place = state ? c?.states.find((s) => s.key === key) : c;
  if (!c || !place || place.count < MIN_PER_PLACE) return null;
  const inPlace = (i: { countryKey: string | null; stateKey: string | null }) =>
    state ? i.stateKey === key : i.countryKey === country;
  return {
    place,
    country: state ? c : null,
    cases: getCaseSummaries().filter(inPlace),
    stories: getApprovedStories().filter(inPlace),
  };
}

/** The most specific place page an item belongs to (its state's, else its country's), or null if neither exists. */
export function placeLinkFor(
  countryKey: string | null,
  stateKey: string | null,
): { path: string; name: string } | null {
  if (!countryKey) return null;
  const country = getPlaces().find((p) => p.key === countryKey && p.count >= MIN_PER_PLACE);
  const state = country?.states.find((s) => s.key === stateKey);
  const target = state ?? country;
  return target ? { path: `/places/${target.key}`, name: target.name } : null;
}
