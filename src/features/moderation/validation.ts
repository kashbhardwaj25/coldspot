import { z } from "zod";
import { CATEGORY_KEYS } from "@/lib/categories";

/** What a reviewer can change before publishing. Pure, like the submission rules, so it's easy to test. */
export const review = z.object({
  id: z.coerce.number().int().positive(),
  category: z.enum(CATEGORY_KEYS),
  place: z.string().trim().min(2, "Add the town or area.").max(80, "Keep the place under 80 characters."),
  region: z.string().trim().max(80, "Keep the region under 80 characters.").default(""),
  hook: z
    .string()
    .trim()
    .min(10, "The opening line is too short.")
    .max(240, "Keep the opening line under 240 characters."),
  story: z.string().trim().min(80, "The story is too short.").max(6000, "Keep the story under 6,000 characters."),
  penName: z.string().trim().max(40, "Keep the pen name under 40 characters.").default(""),
});

export type Review = z.infer<typeof review>;

/** "Lake-side, Upper" → "lake-side-upper". The first slug a story gets is kept for good. */
export function slugify(s: string) {
  return (
    s
      .toLowerCase()
      .normalize("NFKD")
      .replace(/[^\w\s-]/g, "")
      .trim()
      .replace(/[\s_-]+/g, "-")
      .slice(0, 50) || "story"
  );
}
