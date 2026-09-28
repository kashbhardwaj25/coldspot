"use server";

import { and, count, eq, gt, inArray } from "drizzle-orm";
import { z } from "zod";
import { db, schema } from "@/db/client";
import { CATEGORY_KEYS } from "@/lib/categories";
import { ipHash, visitorId } from "@/lib/server/security";

const { stories, echoes } = schema;

/* ---------- Share a story ---------- */

export type SubmitState = { ok: true; place: string } | { ok: false; error: string } | null;

const MAX_PER_DAY = 3;
const LINK_RE = /(https?:\/\/|www\.|\b[a-z0-9-]+\.(com|in|net|org|io|co|xyz|app)\b)/i;
const PHONE_RE = /(\+?\d[\d\s-]{8,}\d)/;

const submission = z.object({
  category: z.enum(CATEGORY_KEYS),
  place: z.string().trim().min(2, "Add the town or area.").max(80),
  region: z.string().trim().max(80).default(""),
  year: z
    .string()
    .trim()
    .optional()
    .transform((v) => (v ? Number(v) : null))
    .refine((v) => v === null || (Number.isInteger(v) && v >= 1900 && v <= new Date().getFullYear()), "Check the year."),
  timeLabel: z.string().trim().max(40).optional(),
  witnesses: z.string().trim().max(80).optional(),
  story: z
    .string()
    .trim()
    .min(80, "Tell a little more: at least a few sentences.")
    .max(6000, "Keep it under 6,000 characters."),
  lat: z.coerce.number().min(-85).max(85),
  lon: z.coerce.number().min(-180).max(180),
  website: z.string().optional(), // honeypot: real people never see this field
});

/** Rounds to a ~5 km grid so exact locations are never stored. */
const blur = (v: number) => Math.round(Math.round(v / 0.05) * 0.05 * 100) / 100;

function firstSentence(text: string) {
  const m = text.match(/^(.{20,220}?[.!?])(\s|$)/s);
  return (m ? m[1] : text.slice(0, 200)).replace(/\s+/g, " ").trim();
}

export async function submitStory(_prev: SubmitState, form: FormData): Promise<SubmitState> {
  const parsed = submission.safeParse(Object.fromEntries(form));
  if (!parsed.success) return { ok: false, error: parsed.error.issues[0]?.message ?? "Check the form." };
  const d = parsed.data;

  // Bots fill every field. Pretend it worked so they don't retry.
  if (d.website) return { ok: true, place: d.place };

  const text = `${d.place} ${d.region} ${d.story} ${d.witnesses ?? ""}`;
  if (LINK_RE.test(text)) return { ok: false, error: "Remove links and website names from your story." };
  if (PHONE_RE.test(text)) return { ok: false, error: "Remove phone numbers from your story." };

  const hash = await ipHash();
  const since = new Date(Date.now() - 24 * 60 * 60 * 1000);
  const [{ n }] = db
    .select({ n: count() })
    .from(stories)
    .where(and(eq(stories.ipHash, hash), gt(stories.createdAt, since)))
    .all();
  if (n >= MAX_PER_DAY) return { ok: false, error: "You've shared 3 stories today. Try again tomorrow." };

  const body = d.story
    .split(/\n\s*\n/)
    .map((p) => p.replace(/\s+/g, " ").trim())
    .filter(Boolean);

  db.insert(stories)
    .values({
      category: d.category,
      place: d.place,
      region: d.region,
      lat: blur(d.lat),
      lon: blur(d.lon),
      year: d.year,
      timeLabel: d.timeLabel || null,
      witnesses: d.witnesses || null,
      hook: firstSentence(d.story),
      body,
      status: "pending",
      ipHash: hash,
    })
    .run();

  return { ok: true, place: d.place };
}

/* ---------- Echoes ---------- */

export async function toggleEcho(slug: string): Promise<{ echoes: number; mine: boolean } | null> {
  const story = db
    .select({ id: stories.id, seed: stories.echoSeed })
    .from(stories)
    .where(and(eq(stories.slug, slug), eq(stories.status, "approved")))
    .get();
  if (!story) return null;

  const vid = (await visitorId(true))!;
  const existing = db
    .select()
    .from(echoes)
    .where(and(eq(echoes.storyId, story.id), eq(echoes.visitorId, vid)))
    .get();

  if (existing) {
    db.delete(echoes).where(and(eq(echoes.storyId, story.id), eq(echoes.visitorId, vid))).run();
  } else {
    db.insert(echoes).values({ storyId: story.id, visitorId: vid }).onConflictDoNothing().run();
  }

  const [{ n }] = db.select({ n: count() }).from(echoes).where(eq(echoes.storyId, story.id)).all();
  return { echoes: story.seed + n, mine: !existing };
}

/** Slugs of the stories this visitor has echoed. */
export async function myEchoes(): Promise<string[]> {
  const vid = await visitorId(false);
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
    .map((r) => r.slug!)
    .filter(Boolean);
}
