"use server";

import { and, eq } from "drizzle-orm";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { db, schema } from "@/db/client";
import { isAdmin } from "@/lib/server/security";

const { stories } = schema;

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

/** Publish a pending story, with the reviewer's edits, and refresh every page it appears on. */
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
