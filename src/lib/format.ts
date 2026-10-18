import { CASE_STATUS_LABELS, CATEGORIES, type Category } from "./categories";
import type { CaseSummary } from "./types";

export const caseStatusLabel = (c: Pick<CaseSummary, "status" | "statusLabel">) =>
  c.statusLabel ?? CASE_STATUS_LABELS[c.status];
export const catColor = (cat: Category) => CATEGORIES[cat].color;
