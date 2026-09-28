import type { Metadata } from "next";
import { notFound } from "next/navigation";
import type { CSSProperties } from "react";
import { PageTop } from "@/components/PageTop";
import { getApprovedStories, getApprovedStory } from "@/features/stories/queries";
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
  return (
    <main className="page" style={{ "--tc": cat.color } as CSSProperties}>
      <PageTop mapHref={`/?story=${s.slug}`} />
      <article className="article">
        <span className="tag">
          <i />
          {cat.label}
          {s.isSample ? " · Sample story" : ""}
        </span>
        <StoryArticle s={s} variant="page" lastField={["Echoes", s.echoes]} />
      </article>
    </main>
  );
}
