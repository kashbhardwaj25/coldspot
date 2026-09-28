import { sql } from "drizzle-orm";
import { index, integer, primaryKey, real, sqliteTable, text } from "drizzle-orm/sqlite-core";
import { CASE_STATUS_KEYS, CATEGORY_KEYS, STORY_STATUS_KEYS } from "../lib/categories";

const createdAt = () =>
  integer("created_at", { mode: "timestamp" }).notNull().default(sql`(unixepoch())`);

/** Famous, real cases. Curated by you, never submitted by users. */
export const cases = sqliteTable("cases", {
  id: integer("id").primaryKey({ autoIncrement: true }),
  slug: text("slug").notNull().unique(),
  category: text("category", { enum: CATEGORY_KEYS }).notNull(),
  title: text("title").notNull(),
  region: text("region").notNull(),
  lat: real("lat").notNull(),
  lon: real("lon").notNull(),
  dateLabel: text("date_label").notNull(),
  status: text("status", { enum: CASE_STATUS_KEYS }).notNull(),
  statusLabel: text("status_label"),
  witnesses: text("witnesses").notNull(),
  hook: text("hook").notNull(),
  summary: text("summary", { mode: "json" }).$type<string[]>().notNull(),
  explanation: text("explanation").notNull(),
  wiki: text("wiki"),
  createdAt: createdAt(),
});

/** People's stories. Submissions arrive as `pending` and go live when approved. */
export const stories = sqliteTable(
  "stories",
  {
    id: integer("id").primaryKey({ autoIncrement: true }),
    // Set when the story is approved.
    slug: text("slug").unique(),
    category: text("category", { enum: CATEGORY_KEYS }).notNull(),
    place: text("place").notNull(),
    region: text("region").notNull().default(""),
    // Rounded to ~5 km on the server. Exact spots are never stored.
    lat: real("lat").notNull(),
    lon: real("lon").notNull(),
    year: integer("year"),
    timeLabel: text("time_label"),
    witnesses: text("witnesses"),
    hook: text("hook").notNull(),
    body: text("body", { mode: "json" }).$type<string[]>().notNull(),
    status: text("status", { enum: STORY_STATUS_KEYS }).notNull().default("pending"),
    isSample: integer("is_sample", { mode: "boolean" }).notNull().default(false),
    narrated: integer("narrated", { mode: "boolean" }).notNull().default(false),
    narrationLength: text("narration_length"),
    // Starting echo count for seeded samples. Real echoes live in the `echoes` table.
    echoSeed: integer("echo_seed").notNull().default(0),
    // SHA-256 of IP + secret, used only for rate limiting.
    ipHash: text("ip_hash"),
    createdAt: createdAt(),
    reviewedAt: integer("reviewed_at", { mode: "timestamp" }),
  },
  (t) => [index("stories_status_idx").on(t.status), index("stories_ip_idx").on(t.ipHash, t.createdAt)],
);

/** "Echo this, I've seen something similar." One per visitor per story. */
export const echoes = sqliteTable(
  "echoes",
  {
    storyId: integer("story_id")
      .notNull()
      .references(() => stories.id, { onDelete: "cascade" }),
    visitorId: text("visitor_id").notNull(),
    createdAt: createdAt(),
  },
  (t) => [primaryKey({ columns: [t.storyId, t.visitorId] })],
);
