import type { Metadata } from "next";
import { notFound } from "next/navigation";
import type { CSSProperties } from "react";
import Link from "next/link";
import { SectionHeading } from "@/components/article";
import { JsonLd } from "@/components/JsonLd";
import { PageTop } from "@/components/PageTop";
import { ShareButton } from "@/components/ui/ShareButton";
import { CaseArticle } from "@/features/cases/CaseArticle";
import { CaseLinks } from "@/features/cases/CaseLinks";
import { caseJsonLd } from "@/features/cases/jsonld";
import { getAllCases, getCase } from "@/features/cases/queries";
import { relatedCases } from "@/features/cases/related";
import { CATEGORIES } from "@/lib/categories";
import { env } from "@/lib/server/env";

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
  const { nearby, sameCategory } = relatedCases(getAllCases(), c);
  return (
    <main className="page" style={{ "--tc": cat.color } as CSSProperties}>
      <PageTop mapHref={`/?case=${c.slug}`} />
      <article className="article">
        <span className="tag">
          <i className="d" />
          {cat.label} · Case file
        </span>
        <CaseArticle
          c={c}
          variant="page"
          actions={<ShareButton path={`/case/${c.slug}`} title={c.title} text={c.hook} />}
        />
        <section className="related">
          <SectionHeading variant="page">Nearby cases</SectionHeading>
          <CaseLinks cases={nearby} />
        </section>
        {sameCategory.length > 0 && (
          <section className="related">
            <SectionHeading variant="page">More {cat.label.toLowerCase()} cases</SectionHeading>
            <CaseLinks cases={sameCategory} />
          </section>
        )}
        <Link className="btn" href="/cases">
          All famous cases
        </Link>
      </article>
      <JsonLd data={caseJsonLd(c, env.NEXT_PUBLIC_SITE_URL)} />
    </main>
  );
}
