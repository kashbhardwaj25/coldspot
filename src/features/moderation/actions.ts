"use server";

import { and, eq, inArray } from "drizzle-orm";
import { redirect } from "next/navigation";
import { z } from "zod";
import { db, schema } from "@/db/client";
import { revalidateStory } from "@/features/stories/revalidate";
import { blockedContent, paragraphs } from "@/features/stories/validation";
import type { StoryStatus } from "@/lib/categories";
import { isAdmin } from "./session";
import { review, slugify } from "./validation";

const { stories, reports } = schema;
const storyId = z.coerce.number().int().positive();

export type ReviewState = { error: string } | null;

/** Publish a waiting story with the reviewer's edits. A story keeps the first slug it was given. */
export async function approve(_prev: ReviewState, form: FormData): Promise<ReviewState> {
  if (!(await isAdmin())) redirect("/admin");
  const parsed = review.safeParse(Object.fromEntries(form));
  if (!parsed.success) return { error: parsed.error.issues[0]?.message ?? "Check the form." };
  const d = parsed.data;
  const blocked = blockedContent({ place: d.place, region: d.region, story: d.story, penName: d.penName });
  if (blocked) return { error: blocked.replace("your story", "the story") };

  const row = db.select({ slug: stories.slug, status: stories.status }).from(stories).where(eq(stories.id, d.id)).get();
  if (row?.status !== "pending") return { error: "This story isn't waiting for review any more." };
  const slug = row.slug ?? `${slugify(d.place)}-${d.id}`;
  db.update(stories)
    .set({
      category: d.category,
      place: d.place,
      region: d.region,
      hook: d.hook,
      body: paragraphs(d.story),
      penName: d.penName || null,
      slug,
      status: "approved",
      reviewedAt: new Date(),
    })
    .where(and(eq(stories.id, d.id), eq(stories.status, "pending")))
    .run();
  revalidateStory(slug);
  return null;
}

/** Moves a story from one of `from` to `to`. Returns its slug, or undefined if it wasn't in one of those states. */
async function move(form: FormData, from: StoryStatus[], to: StoryStatus) {
  if (!(await isAdmin())) redirect("/admin");
  const id = storyId.safeParse(form.get("id"));
  if (!id.success) return undefined;
  const row = db
    .update(stories)
    .set({ status: to, reviewedAt: new Date() })
    .where(and(eq(stories.id, id.data), inArray(stories.status, from)))
    .returning({ id: stories.id, slug: stories.slug })
    .get();
  if (row) revalidateStory(row.slug);
  return row;
}

/** Turn down a waiting story. */
export async function reject(form: FormData) {
  await move(form, ["pending"], "rejected");
}

/** Take a published story off the site, for example after a removal request. */
export async function unpublish(form: FormData) {
  await move(form, ["approved"], "rejected");
}

/** Put a story hidden by reports back on the site, and clear its reports. */
export async function restore(form: FormData) {
  const row = await move(form, ["hidden"], "approved");
  if (row) db.delete(reports).where(eq(reports.storyId, row.id)).run();
}

/** Confirm a hidden story breaks the rules: it stays off the site. */
export async function remove(form: FormData) {
  await move(form, ["hidden"], "rejected");
}

/** Send a rejected or unpublished story back to the queue, to review it again. */
export async function requeue(form: FormData) {
  await move(form, ["rejected"], "pending");
}
