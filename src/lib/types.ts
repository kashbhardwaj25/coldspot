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
  hook: string;
  body: string[];
  isSample: boolean;
  narrated: boolean;
  narrationLength: string | null;
  echoes: number;
};

export type MapItem = CaseSummary | StoryItem;
export type Mode = "famous" | "people";

export const itemName = (i: MapItem) => (i.kind === "case" ? i.title : i.place);
export const itemKey = (i: MapItem) => `${i.kind}:${i.slug}`;
