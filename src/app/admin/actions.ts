"use server";

import { and, eq } from "drizzle-orm";
import { revalidatePath } from "next/cache";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { db, schema } from "@/db/client";
import { ADMIN_COOKIE, adminToken, isAdmin, safeEqual } from "@/lib/server/security";

const { stories } = schema;

export async function login(_prev: string | null, form: FormData): Promise<string | null> {
  const expected = process.env.ADMIN_PASSWORD;
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

function slugify(s: string) {
  return (
    s
      .toLowerCase()
      .normalize("NFKD")
      .replace(/[^\w\s-]/g, "")
      .trim()
      .replace(/[\s_-]+/g, "-")
      .slice(0, 50) || "story"
  );
}

export async function approve(form: FormData) {
  if (!(await isAdmin())) redirect("/admin");
  const id = Number(form.get("id"));
  const place = String(form.get("place") ?? "").trim();
  const region = String(form.get("region") ?? "").trim();
  const hook = String(form.get("hook") ?? "").trim();
  if (!id || !place || !hook) return;

  const slug = `${slugify(place)}-${id}`;
  db.update(stories)
    .set({ place, region, hook, slug, status: "approved", reviewedAt: new Date() })
    .where(and(eq(stories.id, id), eq(stories.status, "pending")))
    .run();

  revalidatePath("/");
  revalidatePath(`/story/${slug}`);
  revalidatePath("/sitemap.xml");
  revalidatePath("/admin");
}

export async function reject(form: FormData) {
  if (!(await isAdmin())) redirect("/admin");
  const id = Number(form.get("id"));
  if (!id) return;
  db.update(stories)
    .set({ status: "rejected", reviewedAt: new Date() })
    .where(and(eq(stories.id, id), eq(stories.status, "pending")))
    .run();
  revalidatePath("/admin");
}
