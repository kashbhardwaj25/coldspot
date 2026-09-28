import { CASE_STATUS_LABELS, CATEGORIES, type Category } from "./categories";
import type { CaseItem } from "./types";

export const caseStatusLabel = (c: CaseItem) => c.statusLabel ?? CASE_STATUS_LABELS[c.status];
export const catColor = (cat: Category) => CATEGORIES[cat].color;
