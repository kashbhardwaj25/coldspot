import type { Metadata } from "next";
import { notFound } from "next/navigation";
import type { CSSProperties } from "react";
import { PageTop } from "@/components/PageTop";
import { ShareButton } from "@/components/ui/ShareButton";
import { getApprovedStories, getApprovedStory } from "@/features/stories/queries";
import Link from "next/link";
import { MarkRead } from "@/features/map/MarkRead";
import { placeLinkFor } from "@/features/regions/queries";
import { ReportButton } from "@/features/reports/ReportButton";
import { StoryArticle } from "@/features/stories/StoryArticle";
import { CATEGORIES } from "@/lib/categories";

export const revalidate = 3600;

type Params = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return getApprovedStories().map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const s = getApprovedStory((await params).slug);
  if (!s) return {};
  const title = `${s.place}${s.region ? `, ${s.region}` : ""}`;
  return {
    title,
    description: s.hook,
    alternates: { canonical: `/story/${s.slug}` },
    openGraph: { title, description: s.hook, type: "article" },
  };
}

export default async function StoryPage({ params }: Params) {
  const s = getApprovedStory((await params).slug);
  if (!s) notFound();
  const cat = CATEGORIES[s.category];
  const place = placeLinkFor(s.countryKey, s.stateKey);
  return (
    <main className="page" style={{ "--tc": cat.color } as CSSProperties}>
      <PageTop mapHref={`/?story=${s.slug}`} />
      <MarkRead kind="story" slug={s.slug} />
      <article className="article">
        <StoryArticle s={s} variant="page" lastField={["Echoes", s.echoes]}>
          <div className="links">
            <ShareButton path={`/story/${s.slug}`} title={`${s.place}: a story on Uncanny Map`} text={s.hook} />
            {place && (
              <Link className="btn" href={place.path}>
                More from {place.name}
              </Link>
            )}
            <ReportButton slug={s.slug} returnTo={`/story/${s.slug}`} />
          </div>
        </StoryArticle>
      </article>
    </main>
  );
}
