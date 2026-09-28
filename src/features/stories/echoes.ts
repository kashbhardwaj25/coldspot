"use server";

import { and, count, eq, inArray } from "drizzle-orm";
import { db, schema } from "@/db/client";
import { ensureVisitorId, getVisitorId } from "@/lib/server/security";

const { stories, echoes } = schema;

/** "Echo this": adds or removes this visitor's echo on an approved story. */
export async function toggleEcho(slug: string): Promise<{ echoes: number; mine: boolean } | null> {
  const story = db
    .select({ id: stories.id, seed: stories.echoSeed })
    .from(stories)
    .where(and(eq(stories.slug, slug), eq(stories.status, "approved")))
    .get();
  if (!story) return null;

  const vid = await ensureVisitorId();
  const mine = and(eq(echoes.storyId, story.id), eq(echoes.visitorId, vid));
  const existing = db.select().from(echoes).where(mine).get();

  if (existing) db.delete(echoes).where(mine).run();
  else db.insert(echoes).values({ storyId: story.id, visitorId: vid }).onConflictDoNothing().run();

  const n = db.select({ n: count() }).from(echoes).where(eq(echoes.storyId, story.id)).get()?.n ?? 0;
  return { echoes: story.seed + n, mine: !existing };
}

/** Slugs of the stories this visitor has echoed. */
export async function myEchoes(): Promise<string[]> {
  const vid = await getVisitorId();
  if (!vid) return [];
  const ids = db.select({ id: echoes.storyId }).from(echoes).where(eq(echoes.visitorId, vid)).all();
  if (!ids.length) return [];
  return db
    .select({ slug: stories.slug })
    .from(stories)
    .where(
      inArray(
        stories.id,
        ids.map((r) => r.id),
      ),
    )
    .all()
    .flatMap((r) => (r.slug ? [r.slug] : []));
}
