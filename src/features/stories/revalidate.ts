import "server-only";
import { revalidatePath } from "next/cache";

/** Refresh every public page a story appears on, after it's published, changed, hidden or removed. */
export function revalidateStory(slug: string | null) {
  revalidatePath("/");
  revalidatePath("/sitemap.xml");
  revalidatePath("/admin");
  if (slug) revalidatePath(`/story/${slug}`);
}
