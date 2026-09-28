import { createHash, createHmac, timingSafeEqual } from "node:crypto";
import { cookies, headers } from "next/headers";

const secret = () => {
  const s = process.env.SESSION_SECRET;
  if (!s || s.length < 16) throw new Error("Set SESSION_SECRET (16+ characters) in .env.local");
  return s;
};

export const ADMIN_COOKIE = "cs_admin";
export const VISITOR_COOKIE = "cs_vid";

/** Constant-time string comparison. */
export function safeEqual(a: string, b: string) {
  const ha = createHash("sha256").update(a).digest();
  const hb = createHash("sha256").update(b).digest();
  return timingSafeEqual(ha, hb);
}

export function adminToken() {
  return createHmac("sha256", secret()).update("coldspot-admin").digest("hex");
}

export async function isAdmin() {
  const c = (await cookies()).get(ADMIN_COOKIE)?.value;
  return !!c && safeEqual(c, adminToken());
}

/** Hash of the caller's IP, salted with the secret. Only used for rate limits. */
export async function ipHash() {
  const h = await headers();
  const ip =
    h.get("cf-connecting-ip") ?? h.get("x-real-ip") ?? h.get("x-forwarded-for")?.split(",")[0]?.trim() ?? "local";
  return createHash("sha256").update(`${secret()}:${ip}`).digest("hex");
}

/** Anonymous id for echoes. Created on first use. */
export async function visitorId(create: boolean) {
  const jar = await cookies();
  let id = jar.get(VISITOR_COOKIE)?.value;
  if (!id && create) {
    id = crypto.randomUUID();
    jar.set(VISITOR_COOKIE, id, {
      httpOnly: true,
      sameSite: "lax",
      secure: process.env.NODE_ENV === "production",
      maxAge: 60 * 60 * 24 * 365,
      path: "/",
    });
  }
  return id ?? null;
}
