import "server-only";
import { asc, count, eq } from "drizzle-orm";
import { db, schema } from "@/db/client";

const { stories } = schema;

export type PendingStory = typeof stories.$inferSelect;

/** Stories waiting for review, oldest first. Admin only: these rows include `ipHash`. */
export function getPendingStories(): PendingStory[] {
  return db.select().from(stories).where(eq(stories.status, "pending")).orderBy(asc(stories.createdAt)).all();
}

export function getStoryCounts() {
  const rows = db.select({ status: stories.status, n: count() }).from(stories).groupBy(stories.status).all();
  const out = { pending: 0, approved: 0, rejected: 0 };
  for (const r of rows) out[r.status] = r.n;
  return out;
}
