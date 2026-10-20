import type { ShareDraft } from "@/features/stories/draft";
import { CATEGORIES, CATEGORY_KEYS } from "@/lib/categories";

type Name = keyof ShareDraft["fields"];

/** One input in the share form. `kind` picks the component; the rest are its props. */
export type FieldConfig =
  | { kind: "select"; name: Name; label: string; options: { value: string; label: string }[]; fallback: string }
  | { kind: "town"; name: Name }
  | {
      kind: "text" | "textarea";
      name: Name;
      label: string;
      placeholder?: string;
      maxLength: number;
      required?: boolean;
      inputMode?: "numeric";
      description?: string;
    };

/**
 * The share form's fields, row by row: a row with several fields lays them out side by side (`.f2`).
 * Add or reorder fields here; ShareFields only renders this list. Limits match the zod schema in validation.ts.
 */
export const SHARE_FORM: FieldConfig[][] = [
  [
    {
      kind: "select",
      name: "category",
      label: "Category",
      options: CATEGORY_KEYS.map((k) => ({ value: k, label: CATEGORIES[k].label })),
      fallback: "sky",
    },
    { kind: "town", name: "place" },
    {
      kind: "text",
      name: "region",
      label: "State and country",
      placeholder: "e.g. Kerala, India",
      maxLength: 80,
      description: "Leave it blank to fill it in from the pin.",
    },
  ],
  [
    { kind: "text", name: "year", label: "Year", placeholder: "e.g. 2014", maxLength: 4, inputMode: "numeric" },
    { kind: "text", name: "timeLabel", label: "Time of day", placeholder: "e.g. around 2 am", maxLength: 40 },
    { kind: "text", name: "witnesses", label: "Who else saw it?", placeholder: "e.g. my brother and I", maxLength: 80 },
  ],
  [
    {
      kind: "textarea",
      name: "story",
      label: "Your story",
      placeholder: "Start with the moment you noticed something was wrong.",
      maxLength: 6000,
      required: true,
      description: "Leave a blank line between paragraphs.",
    },
  ],
  [
    {
      kind: "text",
      name: "penName",
      label: "Pen name (optional)",
      placeholder: "Anonymous",
      maxLength: 40,
      description: "Shown with your story. Leave it blank to appear as Anonymous.",
    },
  ],
];
