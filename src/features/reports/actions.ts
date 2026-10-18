"use server";

import { and, count, eq, gt } from "drizzle-orm";
import { after } from "next/server";
import { z } from "zod";
import { db, schema } from "@/db/client";
import { currentUser } from "@/features/accounts/session";
import { revalidateStory } from "@/features/stories/revalidate";
import { REPORT_REASON_KEYS } from "@/lib/categories";
import { STORIES_ENABLED } from "@/lib/features";

const { stories, reports } = schema;

/** Reports from different accounts that hide a story until an admin reviews it. */
const HIDE_AFTER = 3;
/** Reports one account can make in a day, so one person can't sweep the map. */
const MAX_PER_DAY = 10;

const input = z.object({ slug: z.string().min(1).max(120), reason: z.enum(REPORT_REASON_KEYS) });

export type ReportResult = { ok: true } | { ok: false; error: string };

/** Report a published story. Needs sign-in; one report per account per story. */
export async function reportStory(slug: string, reason: string): Promise<ReportResult> {
  if (!STORIES_ENABLED) return { ok: false, error: "Reporting isn't open." };
  const viewer = await currentUser();
  if (!viewer) return { ok: false, error: "Sign in to report a story." };
  const parsed = input.safeParse({ slug, reason });
  if (!parsed.success) return { ok: false, error: "Choose a reason." };

  const story = db
    .select({ id: stories.id })
    .from(stories)
    .where(and(eq(stories.slug, parsed.data.slug), eq(stories.status, "approved")))
    .get();
  if (!story) return { ok: false, error: "This story isn't on the site any more." };

  const since = new Date(Date.now() - 24 * 60 * 60 * 1000);
  const today =
    db
      .select({ n: count() })
      .from(reports)
      .where(and(eq(reports.userId, viewer.id), gt(reports.createdAt, since)))
      .get()?.n ?? 0;
  if (today >= MAX_PER_DAY) return { ok: false, error: "You've sent a lot of reports today. Try again tomorrow." };

  db.insert(reports)
    .values({ storyId: story.id, userId: viewer.id, reason: parsed.data.reason })
    .onConflictDoNothing()
    .run();

  const total = db.select({ n: count() }).from(reports).where(eq(reports.storyId, story.id)).get()?.n ?? 0;
  if (total >= HIDE_AFTER) {
    db.update(stories)
      .set({ status: "hidden" })
      .where(and(eq(stories.id, story.id), eq(stories.status, "approved")))
      .run();
    // After the response, so the reporter's own page isn't swapped for "not found" before they see the thanks.
    after(() => revalidateStory(parsed.data.slug));
  }
  return { ok: true };
}
