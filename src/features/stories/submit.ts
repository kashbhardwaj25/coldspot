"use server";

import { and, count, eq, gt } from "drizzle-orm";
import { db, schema } from "@/db/client";
import { ipHash } from "@/lib/server/security";
import { blockedContent, blur, firstSentence, MAX_PER_DAY, paragraphs, submission } from "./validation";

const { stories } = schema;

export type SubmitState = { ok: true; place: string } | { ok: false; error: string } | null;

/** Share a story. It's saved as `pending` and only appears once an admin approves it. */
export async function submitStory(_prev: SubmitState, form: FormData): Promise<SubmitState> {
  const parsed = submission.safeParse(Object.fromEntries(form));
  if (!parsed.success) return { ok: false, error: parsed.error.issues[0]?.message ?? "Check the form." };
  const d = parsed.data;

  // Bots fill every field. Pretend it worked so they don't retry.
  if (d.website) return { ok: true, place: d.place };

  const blocked = blockedContent(d);
  if (blocked) return { ok: false, error: blocked };

  const hash = await ipHash();
  const since = new Date(Date.now() - 24 * 60 * 60 * 1000);
  const recent =
    db
      .select({ n: count() })
      .from(stories)
      .where(and(eq(stories.ipHash, hash), gt(stories.createdAt, since)))
      .get()?.n ?? 0;
  if (recent >= MAX_PER_DAY) return { ok: false, error: "You've shared 3 stories today. Try again tomorrow." };

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
      body: paragraphs(d.story),
      status: "pending",
      ipHash: hash,
    })
    .run();

  return { ok: true, place: d.place };
}
