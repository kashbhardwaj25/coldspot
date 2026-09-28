import type { Metadata } from "next";
import { notFound } from "next/navigation";
import type { CSSProperties } from "react";
import { PageTop } from "@/components/PageTop";
import { CaseArticle } from "@/features/cases/CaseArticle";
import { getAllCases, getCase } from "@/features/cases/queries";
import { CATEGORIES } from "@/lib/categories";

export const revalidate = 3600;

type Params = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return getAllCases().map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const c = getCase((await params).slug);
  if (!c) return {};
  return {
    title: c.title,
    description: c.hook,
    alternates: { canonical: `/case/${c.slug}` },
    openGraph: { title: c.title, description: c.hook, type: "article" },
  };
}

export default async function CasePage({ params }: Params) {
  const c = getCase((await params).slug);
  if (!c) notFound();
  const cat = CATEGORIES[c.category];
  return (
    <main className="page" style={{ "--tc": cat.color } as CSSProperties}>
      <PageTop mapHref={`/?case=${c.slug}`} />
      <article className="article">
        <span className="tag">
          <i className="d" />
          {cat.label} · Case file
        </span>
        <CaseArticle c={c} variant="page" />
      </article>
    </main>
  );
}
