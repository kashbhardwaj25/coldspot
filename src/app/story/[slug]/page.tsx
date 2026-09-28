import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PageTop } from "@/components/PageTop";
import { getApprovedStories, getApprovedStory } from "@/db/queries";
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
    <main className="page" style={{ "--tc": cat.color } as React.CSSProperties}>
      <PageTop mapHref={`/?story=${s.slug}`} />
      <article className="article">
        <span className="tag">
          <i />
          {cat.label}
          {s.isSample ? " · Sample story" : ""}
        </span>
        <div>
          <h1 className="s-title">{s.place}</h1>
          <div className="s-sub">
            <span>
              {s.region}
              {s.year ? ` · ${s.year}` : ""}
            </span>
          </div>
        </div>
        <p className="quote">{s.hook}</p>
        <div className="prose">
          {s.body.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>
        <dl className="fields">
          <div>
            <dt>Year</dt>
            <dd>{s.year ?? "Not given"}</dd>
          </div>
          <div>
            <dt>Time</dt>
            <dd>{s.timeLabel ?? "Not given"}</dd>
          </div>
          <div>
            <dt>Witnesses</dt>
            <dd>{s.witnesses ?? "Not given"}</dd>
          </div>
          <div>
            <dt>Echoes</dt>
            <dd>{s.echoes}</dd>
          </div>
        </dl>
        {s.isSample && (
          <p className="note">This is a sample story written to show the format. It is not a real report.</p>
        )}
      </article>
    </main>
  );
}
