import { and, asc, count, desc, eq, getTableColumns, sql } from "drizzle-orm";
import type { CaseItem, StoryItem } from "../lib/types";
import { db, schema } from "./client";

const { cases, stories, echoes } = schema;

const echoCount = sql<number>`(select count(*) from ${echoes} where ${echoes.storyId} = ${stories.id})`;

type CaseRow = typeof cases.$inferSelect;
type StoryRow = typeof stories.$inferSelect & { echoCount: number };

function toCaseItem(r: CaseRow): CaseItem {
  return {
    kind: "case",
    slug: r.slug,
    category: r.category,
    title: r.title,
    region: r.region,
    lat: r.lat,
    lon: r.lon,
    dateLabel: r.dateLabel,
    status: r.status,
    statusLabel: r.statusLabel,
    witnesses: r.witnesses,
    hook: r.hook,
    summary: r.summary,
    explanation: r.explanation,
    wiki: r.wiki,
  };
}

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

export function getAllCases(): CaseItem[] {
  return db.select().from(cases).orderBy(asc(cases.id)).all().map(toCaseItem);
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

export function getCase(slug: string): CaseItem | null {
  const row = db.select().from(cases).where(eq(cases.slug, slug)).get();
  return row ? toCaseItem(row) : null;
}

export function getApprovedStory(slug: string): StoryItem | null {
  const row = db
    .select({ ...getTableColumns(stories), echoCount })
    .from(stories)
    .where(and(eq(stories.slug, slug), eq(stories.status, "approved")))
    .get();
  return row ? toStoryItem(row) : null;
}

/* ---------- admin ---------- */

export function getPendingStories() {
  return db.select().from(stories).where(eq(stories.status, "pending")).orderBy(asc(stories.createdAt)).all();
}

export function getStoryCounts() {
  const rows = db.select({ status: stories.status, n: count() }).from(stories).groupBy(stories.status).all();
  const out = { pending: 0, approved: 0, rejected: 0 };
  for (const r of rows) out[r.status] = r.n;
  return out;
}
