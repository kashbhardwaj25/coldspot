import "server-only";
import { createHash, createHmac, timingSafeEqual } from "node:crypto";
import { headers } from "next/headers";
import { trustedIp } from "../proxy";
import { env } from "./env";

export const secret = () => {
  const s = env.SESSION_SECRET;
  if (!s || s.length < 16) throw new Error("Set SESSION_SECRET (16+ characters) in .env.local");
  return s;
};

/** Constant-time string comparison. */
export function safeEqual(a: string, b: string) {
  const ha = createHash("sha256").update(a).digest();
  const hb = createHash("sha256").update(b).digest();
  return timingSafeEqual(ha, hb);
}

/** Keyed hash, so stored values can't be reversed or matched without the secret. */
export const keyedHash = (value: string) => createHmac("sha256", secret()).update(value).digest("hex");

/**
 * Hash of the caller's IP, salted with the secret, for rate limits only. Null when TRUST_PROXY doesn't name a
 * proxy we trust: then the IP can't be known, and IP limits are skipped rather than lumping everyone together.
 */
export async function ipHash(): Promise<string | null> {
  const h = await headers();
  const ip = trustedIp(env.TRUST_PROXY, (name) => h.get(name));
  return ip ? createHash("sha256").update(`${secret()}:${ip}`).digest("hex") : null;
}
