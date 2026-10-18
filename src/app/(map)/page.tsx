import type { Metadata } from "next";
import { JsonLd } from "@/components/JsonLd";
import { getCaseSummaries } from "@/features/cases/queries";
import { siteJsonLd } from "@/features/cases/jsonld";
import ColdspotApp from "@/features/map/ColdspotApp";
import { getApprovedStories } from "@/features/stories/queries";
import { env } from "@/lib/server/env";

// Rebuilt at most every 5 minutes, and immediately when you approve a story.
export const revalidate = 300;

export const metadata: Metadata = {
  title: { absolute: "Coldspot: a globe of unexplained encounters" },
  alternates: { canonical: "/" },
};

export default function Home() {
  // Only what the globe and list need; each case file's full text is fetched when it's opened.
  const cases = getCaseSummaries();
  const stories = getApprovedStories();
  return (
    <>
      <ColdspotApp cases={cases} stories={stories} />
      <JsonLd data={siteJsonLd(env.NEXT_PUBLIC_SITE_URL)} />
    </>
  );
}
