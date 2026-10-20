import "server-only";
import { env } from "@/lib/server/env";

/** Turnstile is on only when both keys are set; locally, without them, the check is skipped. */
export const turnstileEnabled = () => !!(env.TURNSTILE_SECRET_KEY && env.NEXT_PUBLIC_TURNSTILE_SITE_KEY);

/** Asks Cloudflare whether the token from the share form's Turnstile widget is genuine. Each token works once. */
export async function verifyTurnstile(token: string | null): Promise<boolean> {
  const secret = env.TURNSTILE_SECRET_KEY;
  if (!turnstileEnabled() || !secret) return true;
  if (!token) return false;
  try {
    const res = await fetch("https://challenges.cloudflare.com/turnstile/v0/siteverify", {
      method: "POST",
      body: new URLSearchParams({ secret, response: token }),
      signal: AbortSignal.timeout(5000),
    });
    const data: unknown = await res.json();
    return typeof data === "object" && data !== null && (data as { success?: unknown }).success === true;
  } catch {
    // If Cloudflare can't be reached, fail closed: the writer can try again, and their text is kept.
    return false;
  }
}
