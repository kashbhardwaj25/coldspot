import "server-only";
import { asc, count, desc, eq, getTableColumns, sql } from "drizzle-orm";
import { db, schema } from "@/db/client";
import type { Category, ReportReason, StoryStatus } from "@/lib/categories";

const { stories, reports } = schema;

/** A story as the admin pages need it. Plain values only: no dates, no IP hash, no account id. */
export type AdminStory = {
  id: number;
  slug: string | null;
  status: StoryStatus;
  category: Category;
  place: string;
  region: string;
  lat: number;
  lon: number;
  year: number | null;
  timeLabel: string | null;
  witnesses: string | null;
  penName: string | null;
  hook: string;
  body: string[];
  sharedOn: string;
  reviewedOn: string | null;
  reports: ReportReason[];
};

const day = (d: Date) => d.toLocaleDateString("en-GB", { day: "numeric", month: "short", year: "numeric" });
const reasons = sql<
  string | null
>`(select group_concat(${reports.reason}) from ${reports} where ${reports.storyId} = ${stories.id})`;

/** Stories with one status: waiting oldest first (fair queue), everything else newest first. */
export function getAdminStories(status: StoryStatus): AdminStory[] {
  const order = status === "pending" ? asc(stories.createdAt) : desc(stories.reviewedAt);
  const { ipHash: _ip, userId: _user, ...cols } = getTableColumns(stories);
  return db
    .select({ ...cols, reasons })
    .from(stories)
    .where(eq(stories.status, status))
    .orderBy(order, desc(stories.id))
    .all()
    .map((r) => ({
      id: r.id,
      slug: r.slug,
      status: r.status,
      category: r.category,
      place: r.place,
      region: r.region,
      lat: r.lat,
      lon: r.lon,
      year: r.year,
      timeLabel: r.timeLabel,
      witnesses: r.witnesses,
      penName: r.penName,
      hook: r.hook,
      body: r.body,
      sharedOn: day(r.createdAt),
      reviewedOn: r.reviewedAt ? day(r.reviewedAt) : null,
      reports: r.reasons ? (r.reasons.split(",") as ReportReason[]) : [],
    }));
}

export function getStoryCounts(): Record<StoryStatus, number> {
  const rows = db.select({ status: stories.status, n: count() }).from(stories).groupBy(stories.status).all();
  const out: Record<StoryStatus, number> = { pending: 0, approved: 0, rejected: 0, hidden: 0 };
  for (const r of rows) out[r.status] = r.n;
  return out;
}
