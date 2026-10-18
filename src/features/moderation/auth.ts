"use server";

import { redirect } from "next/navigation";
import { STORIES_ENABLED } from "@/lib/features";
import { env } from "@/lib/server/env";
import { ipHash, safeEqual } from "@/lib/server/security";
import { AttemptLimiter } from "./attempts";
import { endAdminSession, startAdminSession } from "./session";

// 5 wrong passwords per 15 minutes per IP. Without a trusted IP, all attempts share one count.
const limiter = new AttemptLimiter(5, 15 * 60 * 1000);

export async function login(_prev: string | null, form: FormData): Promise<string | null> {
  if (!STORIES_ENABLED) return "The review queue is closed.";
  const expected = env.ADMIN_PASSWORD;
  if (!expected || expected === "change-me") return "Set ADMIN_PASSWORD in .env.local first.";

  const key = (await ipHash()) ?? "shared";
  const wait = limiter.blockedFor(key, Date.now());
  if (wait) return `Too many attempts. Try again in ${Math.ceil(wait / 60_000)} minutes.`;

  await new Promise((r) => setTimeout(r, 400)); // slow down guessing
  if (!safeEqual(String(form.get("password") ?? ""), expected)) {
    limiter.fail(key, Date.now());
    return "Wrong password.";
  }
  limiter.succeed(key);
  await startAdminSession();
  redirect("/admin");
}

export async function logout() {
  await endAdminSession();
  redirect("/admin");
}
