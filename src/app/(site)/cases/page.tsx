import type { Metadata } from "next";
import { ArticleTitle, SectionHeading } from "@/components/article";
import { PageTop } from "@/components/PageTop";
import { CaseLinks } from "@/features/cases/CaseLinks";
import { getAllCases } from "@/features/cases/queries";
import { titleKey } from "@/features/cases/related";
import { CATEGORIES, CATEGORY_KEYS } from "@/lib/categories";

export const revalidate = 3600;

export const metadata: Metadata = {
  title: "All famous cases",
  description:
    "Every famous unexplained case on Coldspot, from strange lights and visitors to creatures, mysterious sounds and places, with what was reported and the explanations offered.",
  alternates: { canonical: "/cases" },
};

/** Every famous case as plain links, grouped by category: the crawlable way into the case pages. */
export default function CasesPage() {
  const all = getAllCases();
  return (
    <main className="page">
      <PageTop mapHref="/" />
      <article className="article">
        <span className="tag">
          <i className="d" />
          Famous cases
        </span>
        <ArticleTitle variant="page">All famous cases</ArticleTitle>
        <p className="prose">
          Real, widely reported encounters from around the world: lights in the sky, visitors and figures, creatures,
          strange sounds and places where something keeps happening. Each case file sets out what witnesses reported and
          the explanations that have been offered, without taking a side.
        </p>
        {CATEGORY_KEYS.map((key) => {
          const cases = all.filter((c) => c.category === key).sort((a, b) => titleKey(a).localeCompare(titleKey(b)));
          return (
            <section key={key} id={key} className="related">
              <SectionHeading variant="page">
                {CATEGORIES[key].label} · {cases.length}
              </SectionHeading>
              <CaseLinks cases={cases} />
            </section>
          );
        })}
      </article>
    </main>
  );
}
