import { z } from "zod";
import { CATEGORY_KEYS } from "@/lib/categories";

/** Pure rules for a story submission. No Next or database imports, so it's easy to test. */

export const MAX_PER_DAY = 3;
const LINK_RE = /(https?:\/\/|www\.|\b[a-z0-9-]+\.(com|in|net|org|io|co|xyz|app)\b)/i;
const PHONE_RE = /(\+?\d[\d\s-]{8,}\d)/;

export const submission = z.object({
  category: z.enum(CATEGORY_KEYS),
  place: z.string().trim().min(2, "Add the town or area.").max(80),
  region: z.string().trim().max(80).default(""),
  year: z
    .string()
    .trim()
    .optional()
    .transform((v) => (v ? Number(v) : null))
    .refine(
      (v) => v === null || (Number.isInteger(v) && v >= 1900 && v <= new Date().getFullYear()),
      "Check the year.",
    ),
  timeLabel: z.string().trim().max(40).optional(),
  witnesses: z.string().trim().max(80).optional(),
  story: z
    .string()
    .trim()
    .min(80, "Tell a little more: at least a few sentences.")
    .max(6000, "Keep it under 6,000 characters."),
  lat: z.coerce.number().min(-85).max(85),
  lon: z.coerce.number().min(-180).max(180),
  website: z.string().optional(), // honeypot: real people never see this field
});

export type Submission = z.infer<typeof submission>;

/** The error to show if the text contains links or phone numbers, otherwise null. */
export function blockedContent(d: Submission): string | null {
  const text = `${d.place} ${d.region} ${d.story} ${d.witnesses ?? ""}`;
  if (LINK_RE.test(text)) return "Remove links and website names from your story.";
  if (PHONE_RE.test(text)) return "Remove phone numbers from your story.";
  return null;
}

/** Rounds to a ~5 km grid so exact locations are never stored. */
export const blur = (v: number) => Math.round(Math.round(v / 0.05) * 0.05 * 100) / 100;

/** The opening line shown in the tuner card. */
export function firstSentence(text: string) {
  const m = text.match(/^(.{20,220}?[.!?])(\s|$)/s);
  return (m?.[1] ?? text.slice(0, 200)).replace(/\s+/g, " ").trim();
}

/** Paragraphs split on blank lines, with whitespace tidied. */
export function paragraphs(text: string) {
  return text
    .split(/\n\s*\n/)
    .map((p) => p.replace(/\s+/g, " ").trim())
    .filter(Boolean);
}
