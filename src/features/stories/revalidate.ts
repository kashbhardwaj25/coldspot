import "server-only";
import { revalidatePath } from "next/cache";

/** Refresh every public page a story appears on, after it's published, changed, hidden or removed. */
export function revalidateStory(slug: string | null) {
  revalidatePath("/");
  revalidatePath("/sitemap.xml");
  revalidatePath("/admin");
  // The places index and every country and state page, whose counts and lists change.
  revalidatePath("/places");
  revalidatePath("/(site)/places/[country]", "page");
  revalidatePath("/(site)/places/[country]/[state]", "page");
  if (slug) revalidatePath(`/story/${slug}`);
}
