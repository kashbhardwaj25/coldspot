import type { Metadata } from "next";
import { JsonLd } from "@/components/JsonLd";
import { getCaseSummaries } from "@/features/cases/queries";
import { siteJsonLd } from "@/features/cases/jsonld";
import UncannyMapApp from "@/features/map/UncannyMapApp";
import { getMapPlaces } from "@/features/regions/queries";
import { getApprovedStories } from "@/features/stories/queries";
import { env } from "@/lib/server/env";

// Rebuilt at most every 5 minutes, and immediately when you approve a story.
export const revalidate = 300;

export const metadata: Metadata = {
  title: { absolute: "Uncanny Map: a globe of unexplained encounters" },
  alternates: { canonical: "/" },
};

export default function Home() {
  // Only what the globe and list need; each case file's full text is fetched when it's opened.
  const cases = getCaseSummaries();
  const stories = getApprovedStories();
  return (
    <>
      <UncannyMapApp
        data={{
          cases,
          stories,
          places: getMapPlaces(cases, stories),
          // The site key is public and known at build time; the secret is only needed when the server checks.
          turnstileSiteKey: env.NEXT_PUBLIC_TURNSTILE_SITE_KEY ?? null,
        }}
      />
      <JsonLd data={siteJsonLd(env.NEXT_PUBLIC_SITE_URL)} />
    </>
  );
}
