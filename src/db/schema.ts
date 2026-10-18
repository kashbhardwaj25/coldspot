import { sql } from "drizzle-orm";
import { index, integer, primaryKey, real, sqliteTable, text } from "drizzle-orm/sqlite-core";
import { CASE_STATUS_KEYS, CATEGORY_KEYS, STORY_STATUS_KEYS } from "../lib/categories";

const createdAt = () =>
  integer("created_at", { mode: "timestamp" })
    .notNull()
    .default(sql`(unixepoch())`);

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
  /** Shown first where markers crowd at low zoom. */
  featured: integer("featured", { mode: "boolean" }).notNull().default(false),
  createdAt: createdAt(),
});

// Accounts (Better Auth). Sign-in is Google only, and we keep just the Google account and the email address:
// no name, photo, OAuth tokens, IP address or user agent (see `features/accounts/auth.ts`).
const stamp = (name: string) => integer(name, { mode: "timestamp_ms" }).notNull();

export const users = sqliteTable("users", {
  id: text("id").primaryKey(),
  name: text("name").notNull().default(""),
  email: text("email").notNull().unique(),
  emailVerified: integer("email_verified", { mode: "boolean" }).notNull().default(false),
  image: text("image"),
  createdAt: stamp("created_at"),
  updatedAt: stamp("updated_at"),
});

export const sessions = sqliteTable(
  "sessions",
  {
    id: text("id").primaryKey(),
    token: text("token").notNull().unique(),
    userId: text("user_id")
      .notNull()
      .references(() => users.id, { onDelete: "cascade" }),
    expiresAt: stamp("expires_at"),
    ipAddress: text("ip_address"),
    userAgent: text("user_agent"),
    createdAt: stamp("created_at"),
    updatedAt: stamp("updated_at"),
  },
  (t) => [index("sessions_user_idx").on(t.userId)],
);

export const accounts = sqliteTable(
  "accounts",
  {
    id: text("id").primaryKey(),
    accountId: text("account_id").notNull(),
    providerId: text("provider_id").notNull(),
    userId: text("user_id")
      .notNull()
      .references(() => users.id, { onDelete: "cascade" }),
    accessToken: text("access_token"),
    refreshToken: text("refresh_token"),
    idToken: text("id_token"),
    accessTokenExpiresAt: integer("access_token_expires_at", { mode: "timestamp_ms" }),
    refreshTokenExpiresAt: integer("refresh_token_expires_at", { mode: "timestamp_ms" }),
    scope: text("scope"),
    password: text("password"),
    createdAt: stamp("created_at"),
    updatedAt: stamp("updated_at"),
  },
  (t) => [index("accounts_user_idx").on(t.userId)],
);

/** Short-lived sign-in state (OAuth). */
export const verifications = sqliteTable("verifications", {
  id: text("id").primaryKey(),
  identifier: text("identifier").notNull(),
  value: text("value").notNull(),
  expiresAt: stamp("expires_at"),
  createdAt: stamp("created_at"),
  updatedAt: stamp("updated_at"),
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
    // Starting echo count for seeded samples. Real echoes live in the `echoes` table.
    echoSeed: integer("echo_seed").notNull().default(0),
    // SHA-256 of IP + secret, used only for rate limiting.
    ipHash: text("ip_hash"),
    // Who shared it. Never shown in public; deleting the account deletes their stories. Null for samples.
    userId: text("user_id").references(() => users.id, { onDelete: "cascade" }),
    // Shown in public instead of any account detail. Null means "Anonymous".
    penName: text("pen_name"),
    createdAt: createdAt(),
    reviewedAt: integer("reviewed_at", { mode: "timestamp" }),
  },
  (t) => [
    index("stories_status_idx").on(t.status),
    index("stories_ip_idx").on(t.ipHash, t.createdAt),
    index("stories_user_idx").on(t.userId, t.createdAt),
  ],
);

/** "Echo this, I've seen something similar." One per account per story. */
export const echoes = sqliteTable(
  "echoes",
  {
    storyId: integer("story_id")
      .notNull()
      .references(() => stories.id, { onDelete: "cascade" }),
    userId: text("user_id")
      .notNull()
      .references(() => users.id, { onDelete: "cascade" }),
    createdAt: createdAt(),
  },
  (t) => [primaryKey({ columns: [t.storyId, t.userId] }), index("echoes_user_idx").on(t.userId)],
);
