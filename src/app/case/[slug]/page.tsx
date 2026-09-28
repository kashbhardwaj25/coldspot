import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PageTop } from "@/components/PageTop";
import { caseStatusLabel } from "@/lib/format";
import { getAllCases, getCase } from "@/db/queries";
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
    <main className="page" style={{ "--tc": cat.color } as React.CSSProperties}>
      <PageTop mapHref={`/?case=${c.slug}`} />
      <article className="article">
        <span className="tag">
          <i className="d" />
          {cat.label} · Case file
        </span>
        <div>
          <h1 className="s-title">{c.title}</h1>
          <div className="s-sub">
            <span>
              {c.region} · {c.dateLabel}
            </span>
            <span className={`pill ${c.status}`}>{caseStatusLabel(c)}</span>
          </div>
        </div>
        <p className="quote">{c.hook}</p>
        <section>
          <h2 className="h">What was reported</h2>
          <div className="prose">
            {c.summary.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        </section>
        <section className="explain">
          <h2 className="h">Explanations offered</h2>
          <div className="prose">
            <p>{c.explanation}</p>
          </div>
        </section>
        <dl className="fields">
          <div>
            <dt>When</dt>
            <dd>{c.dateLabel}</dd>
          </div>
          <div>
            <dt>Where</dt>
            <dd>{c.region}</dd>
          </div>
          <div>
            <dt>Witnesses</dt>
            <dd>{c.witnesses}</dd>
          </div>
          <div>
            <dt>Status</dt>
            <dd>{caseStatusLabel(c)}</dd>
          </div>
        </dl>
        {c.wiki && (
          <div className="links">
            <a
              className="btn"
              href={`https://en.wikipedia.org/w/index.php?search=${encodeURIComponent(c.wiki)}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              Read more on Wikipedia ↗
            </a>
          </div>
        )}
        <p className="note">
          Famous cases are real, widely reported events. Each file sets out what witnesses said and the explanations
          that have been offered, without taking a side.
        </p>
      </article>
    </main>
  );
}
