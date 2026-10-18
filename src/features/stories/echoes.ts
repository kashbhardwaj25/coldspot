"use server";

import { and, count, eq } from "drizzle-orm";
import { db, schema } from "@/db/client";
import { currentUser } from "@/features/accounts/session";
import { STORIES_ENABLED } from "@/lib/features";

const { stories, echoes } = schema;

/** "Echo this": adds or removes the signed-in account's echo on an approved story. Null if signed out. */
export async function toggleEcho(slug: string): Promise<{ echoes: number; mine: boolean } | null> {
  if (!STORIES_ENABLED) return null;
  const viewer = await currentUser();
  if (!viewer) return null;
  const story = db
    .select({ id: stories.id, seed: stories.echoSeed })
    .from(stories)
    .where(and(eq(stories.slug, slug), eq(stories.status, "approved")))
    .get();
  if (!story) return null;

  const mine = and(eq(echoes.storyId, story.id), eq(echoes.userId, viewer.id));
  const existing = db.select().from(echoes).where(mine).get();

  if (existing) db.delete(echoes).where(mine).run();
  else db.insert(echoes).values({ storyId: story.id, userId: viewer.id }).onConflictDoNothing().run();

  const n = db.select({ n: count() }).from(echoes).where(eq(echoes.storyId, story.id)).get()?.n ?? 0;
  return { echoes: story.seed + n, mine: !existing };
}

/** Slugs of the stories the signed-in account has echoed. */
export async function myEchoes(): Promise<string[]> {
  if (!STORIES_ENABLED) return [];
  const viewer = await currentUser();
  if (!viewer) return [];
  return db
    .select({ slug: stories.slug })
    .from(echoes)
    .innerJoin(stories, eq(stories.id, echoes.storyId))
    .where(and(eq(echoes.userId, viewer.id), eq(stories.status, "approved")))
    .all()
    .flatMap((r) => (r.slug ? [r.slug] : []));
}
