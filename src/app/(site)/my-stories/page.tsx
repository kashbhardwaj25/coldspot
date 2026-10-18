import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PageTop } from "@/components/PageTop";
import { MyStories } from "@/features/accounts/MyStories";
import { getMyStories } from "@/features/accounts/queries";
import { currentUser } from "@/features/accounts/session";
import { STORIES_ENABLED } from "@/lib/features";

// Per person, so never cached.
export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "My stories",
  robots: { index: false, follow: false },
};

export default async function MyStoriesPage() {
  if (!STORIES_ENABLED) notFound();
  const viewer = await currentUser();
  return (
    <main className="page">
      <PageTop mapHref="/" />
      <MyStories viewer={viewer} stories={viewer ? getMyStories(viewer.id) : []} />
    </main>
  );
}
