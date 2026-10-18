import "server-only";
import { randomBytes } from "node:crypto";
import { and, eq, gt, lt } from "drizzle-orm";
import { cookies } from "next/headers";
import { db, schema } from "@/db/client";
import { env } from "@/lib/server/env";
import { keyedHash } from "@/lib/server/security";

const { adminSessions } = schema;
const COOKIE = "cs_admin";
const MAX_AGE_S = 60 * 60 * 24 * 7;

/** Changes whenever ADMIN_PASSWORD does, which ends every existing session. */
const passwordFingerprint = () => keyedHash(`admin-password:${env.ADMIN_PASSWORD ?? ""}`);

/** Whether this request comes from a signed-in admin. Check it in every admin page and action. */
export async function isAdmin(): Promise<boolean> {
  const token = (await cookies()).get(COOKIE)?.value;
  if (!token || !env.ADMIN_PASSWORD) return false;
  const row = db
    .select({ tokenHash: adminSessions.tokenHash })
    .from(adminSessions)
    .where(
      and(
        eq(adminSessions.tokenHash, keyedHash(token)),
        eq(adminSessions.passwordFingerprint, passwordFingerprint()),
        gt(adminSessions.expiresAt, new Date()),
      ),
    )
    .get();
  return !!row;
}

/** Starts a session after a correct password: a random token in the cookie, its hash in the database. */
export async function startAdminSession() {
  const token = randomBytes(32).toString("base64url");
  const now = new Date();
  db.delete(adminSessions).where(lt(adminSessions.expiresAt, now)).run();
  db.insert(adminSessions)
    .values({
      tokenHash: keyedHash(token),
      passwordFingerprint: passwordFingerprint(),
      expiresAt: new Date(now.getTime() + MAX_AGE_S * 1000),
    })
    .run();
  (await cookies()).set(COOKIE, token, {
    httpOnly: true,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
    maxAge: MAX_AGE_S,
    path: "/admin",
  });
}

/** Ends this browser's session, in the database as well as the cookie. */
export async function endAdminSession() {
  const jar = await cookies();
  const token = jar.get(COOKIE)?.value;
  if (token) {
    db.delete(adminSessions)
      .where(eq(adminSessions.tokenHash, keyedHash(token)))
      .run();
  }
  jar.delete({ name: COOKIE, path: "/admin" });
}
