import type { Body } from "./bodies";
import type { CaseStatus, Category } from "./categories";

/** A famous case as the map needs it: enough for the globe, the list, search and the tuner card. */
export type CaseSummary = {
  kind: "case";
  slug: string;
  category: Category;
  title: string;
  region: string;
  lat: number;
  lon: number;
  dateLabel: string;
  status: CaseStatus;
  statusLabel: string | null;
  witnesses: string;
  hook: string;
  /** Shown first where markers crowd at low zoom. */
  featured: boolean;
  body: Body;
  /** Region keys from features/regions, e.g. `india` and `india/kerala`. */
  countryKey: string | null;
  stateKey: string | null;
};

/** The full text of a case file. The map fetches it only when a case is opened (see `useCaseFile`). */
export type CaseDetail = {
  summary: string[];
  explanation: string;
  wiki: string | null;
};

/** A famous, real case with its full case file, as on the case pages. */
export type CaseItem = CaseSummary & CaseDetail;

/** An approved people's story as sent to the browser. */
export type StoryItem = {
  kind: "story";
  slug: string;
  category: Category;
  place: string;
  region: string;
  lat: number;
  lon: number;
  year: number | null;
  timeLabel: string | null;
  witnesses: string | null;
  /** The writer's chosen pen name, or null for "Anonymous". Never anything from their account. */
  penName: string | null;
  hook: string;
  body: string[];
  isSample: boolean;
  echoes: number;
  countryKey: string | null;
  stateKey: string | null;
};

export type MapItem = CaseSummary | StoryItem;
export type Mode = "famous" | "people";

export const itemName = (i: MapItem) => (i.kind === "case" ? i.title : i.place);
export const itemKey = (i: MapItem) => `${i.kind}:${i.slug}`;

/** A country (or state) with how many items it has, and where the globe should fly to show it. */
export type Place = {
  key: string;
  name: string;
  count: number;
  lat: number;
  lon: number;
  zoom: number;
  /** Its states with enough items to list on their own. Empty for states. */
  states: Place[];
};
