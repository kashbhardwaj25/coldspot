"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { env } from "@/lib/server/env";
import { ADMIN_COOKIE, adminToken, safeEqual } from "@/lib/server/security";

export async function login(_prev: string | null, form: FormData): Promise<string | null> {
  const expected = env.ADMIN_PASSWORD;
  if (!expected || expected === "change-me") return "Set ADMIN_PASSWORD in .env.local first.";
  await new Promise((r) => setTimeout(r, 400)); // slow down guessing
  if (!safeEqual(String(form.get("password") ?? ""), expected)) return "Wrong password.";
  (await cookies()).set(ADMIN_COOKIE, adminToken(), {
    httpOnly: true,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
    maxAge: 60 * 60 * 24 * 7,
    path: "/admin",
  });
  redirect("/admin");
}

export async function logout() {
  (await cookies()).delete({ name: ADMIN_COOKIE, path: "/admin" });
  redirect("/admin");
}
