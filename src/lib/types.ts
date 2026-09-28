import type { CaseStatus, Category } from "./categories";

/** A famous, real case as sent to the browser. */
export type CaseItem = {
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
  summary: string[];
  explanation: string;
  wiki: string | null;
};

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

export type MapItem = CaseItem | StoryItem;
export type Mode = "famous" | "people";

export const itemName = (i: MapItem) => (i.kind === "case" ? i.title : i.place);
export const itemKey = (i: MapItem) => `${i.kind}:${i.slug}`;
