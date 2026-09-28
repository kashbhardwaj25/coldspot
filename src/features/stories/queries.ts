import "server-only";
import { and, desc, eq, getTableColumns, sql } from "drizzle-orm";
import { db, schema } from "@/db/client";
import type { StoryItem } from "@/lib/types";

const { stories, echoes } = schema;

const echoCount = sql<number>`(select count(*) from ${echoes} where ${echoes.storyId} = ${stories.id})`;

type StoryRow = typeof stories.$inferSelect & { echoCount: number };

/** Only the fields the browser needs. Never includes `ipHash` or raw dates. */
function toStoryItem(r: StoryRow): StoryItem {
  return {
    kind: "story",
    slug: r.slug ?? String(r.id),
    category: r.category,
    place: r.place,
    region: r.region,
    lat: r.lat,
    lon: r.lon,
    year: r.year,
    timeLabel: r.timeLabel,
    witnesses: r.witnesses,
    hook: r.hook,
    body: r.body,
    isSample: r.isSample,
    narrated: r.narrated,
    narrationLength: r.narrationLength,
    echoes: r.echoSeed + Number(r.echoCount),
  };
}

export function getApprovedStories(): StoryItem[] {
  return db
    .select({ ...getTableColumns(stories), echoCount })
    .from(stories)
    .where(eq(stories.status, "approved"))
    .orderBy(desc(stories.createdAt))
    .all()
    .map(toStoryItem);
}

export function getApprovedStory(slug: string): StoryItem | null {
  const row = db
    .select({ ...getTableColumns(stories), echoCount })
    .from(stories)
    .where(and(eq(stories.slug, slug), eq(stories.status, "approved")))
    .get();
  return row ? toStoryItem(row) : null;
}
