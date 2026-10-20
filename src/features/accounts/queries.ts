import "server-only";
import { desc, eq } from "drizzle-orm";
import { db, schema } from "@/db/client";
import type { StoryStatus } from "@/lib/categories";

const { stories } = schema;

/** One of the signed-in person's own stories, as listed on My stories. */
export type MyStory = {
  id: number;
  slug: string | null;
  place: string;
  hook: string;
  status: StoryStatus;
  sharedOn: string;
};

/** Everything this account has shared, newest first, whatever its review status. */
export function getMyStories(userId: string): MyStory[] {
  return db
    .select({
      id: stories.id,
      slug: stories.slug,
      place: stories.place,
      hook: stories.hook,
      status: stories.status,
      createdAt: stories.createdAt,
    })
    .from(stories)
    .where(eq(stories.userId, userId))
    .orderBy(desc(stories.createdAt))
    .all()
    .map(({ createdAt, ...s }) => ({
      ...s,
      sharedOn: createdAt.toLocaleDateString("en-GB", { day: "numeric", month: "short", year: "numeric" }),
    }));
}
