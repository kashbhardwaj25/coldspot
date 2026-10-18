"use server";

import { and, count, eq, gt, type SQL } from "drizzle-orm";
import { db, schema } from "@/db/client";
import { currentUser } from "@/features/accounts/session";
import { STORIES_ENABLED } from "@/lib/features";
import { ipHash } from "@/lib/server/security";
import { verifyTurnstile } from "./spamCheck";
import { blockedContent, blur, firstSentence, MAX_PER_DAY, paragraphs, submission } from "./validation";

const { stories } = schema;

export type SubmitState = { ok: true; place: string } | { ok: false; error: string } | null;

const sharedToday = (who: SQL | undefined) => {
  const since = new Date(Date.now() - 24 * 60 * 60 * 1000);
  return (
    db
      .select({ n: count() })
      .from(stories)
      .where(and(who, gt(stories.createdAt, since)))
      .get()?.n ?? 0
  );
};

/** Share a story. Needs a signed-in account. It's saved as `pending` and only appears once an admin approves it. */
export async function submitStory(_prev: SubmitState, form: FormData): Promise<SubmitState> {
  if (!STORIES_ENABLED) return { ok: false, error: "Sharing stories isn't open yet." };
  const viewer = await currentUser();
  if (!viewer) return { ok: false, error: "Sign in to share your story." };
  const parsed = submission.safeParse(Object.fromEntries(form));
  if (!parsed.success) return { ok: false, error: parsed.error.issues[0]?.message ?? "Check the form." };
  const d = parsed.data;

  // Bots fill every field. Pretend it worked so they don't retry.
  if (d.website) return { ok: true, place: d.place };

  const blocked = blockedContent(d);
  if (blocked) return { ok: false, error: blocked };

  const human = await verifyTurnstile(String(form.get("cf-turnstile-response") ?? "") || null);
  if (!human) return { ok: false, error: "The spam check didn't go through. Wait a moment for it, then send again." };

  // Per account, and per IP (when it can be trusted) as an extra layer against someone with several accounts.
  const hash = await ipHash();
  if (
    sharedToday(eq(stories.userId, viewer.id)) >= MAX_PER_DAY ||
    (hash !== null && sharedToday(eq(stories.ipHash, hash)) >= MAX_PER_DAY)
  ) {
    return { ok: false, error: "You've shared 3 stories today. Try again tomorrow." };
  }

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
      penName: d.penName || null,
      hook: firstSentence(d.story),
      body: paragraphs(d.story),
      status: "pending",
      ipHash: hash,
      userId: viewer.id,
    })
    .run();

  return { ok: true, place: d.place };
}
