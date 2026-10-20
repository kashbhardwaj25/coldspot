"use server";

import { and, eq } from "drizzle-orm";
import { revalidatePath } from "next/cache";
import { headers } from "next/headers";
import { redirect } from "next/navigation";
import { z } from "zod";
import { db, schema } from "@/db/client";
import { revalidateStory } from "@/features/stories/revalidate";
import { STORIES_ENABLED } from "@/lib/features";
import { getAuth } from "./auth";
import { currentUser } from "./session";

const { stories, users } = schema;
const storyId = z.coerce.number().int().positive();

/** Delete one of your own stories, published or not. */
export async function deleteMyStory(form: FormData) {
  const viewer = STORIES_ENABLED ? await currentUser() : null;
  const id = storyId.safeParse(form.get("id"));
  if (!viewer || !id.success) redirect("/my-stories");
  const story = db
    .delete(stories)
    .where(and(eq(stories.id, id.data), eq(stories.userId, viewer.id)))
    .returning({ slug: stories.slug, status: stories.status })
    .get();
  if (story?.status === "approved") revalidateStory(story.slug);
  revalidatePath("/my-stories");
}

export async function signOut() {
  await getAuth().api.signOut({ headers: await headers() });
  redirect("/");
}

/** Delete the account, every story it shared and every echo it gave. Can't be undone. */
export async function deleteMyAccount() {
  const viewer = STORIES_ENABLED ? await currentUser() : null;
  if (!viewer) redirect("/my-stories");
  // Signing out first clears the cookie while the session still exists.
  await getAuth().api.signOut({ headers: await headers() });
  db.transaction((tx) => {
    tx.delete(stories).where(eq(stories.userId, viewer.id)).run();
    // Sessions, the Google link and echoes go with the user row (ON DELETE CASCADE).
    tx.delete(users).where(eq(users.id, viewer.id)).run();
  });
  // Stories and echo counts can change anywhere on the site.
  revalidatePath("/", "layout");
  redirect("/");
}
