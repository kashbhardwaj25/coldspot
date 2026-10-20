import Link from "next/link";
import type { CSSProperties } from "react";
import { ArticleTitle, SectionHeading } from "@/components/article";
import { CaseLinks } from "@/features/cases/CaseLinks";
import { CATEGORIES, CATEGORY_KEYS } from "@/lib/categories";
import type { CaseSummary, StoryItem } from "@/lib/types";
import { inPlace, placePath } from "./places";
import type { PlaceDetail } from "./queries";

/** "3 sky, 2 creatures": what kinds of encounters a place has, for its introduction. */
function kinds(items: (CaseSummary | StoryItem)[]) {
  return CATEGORY_KEYS.map(
    (k) => [CATEGORIES[k].label.toLowerCase(), items.filter((i) => i.category === k).length] as const,
  )
    .filter(([, n]) => n > 0)
    .map(([label, n]) => `${n} ${label}`)
    .join(", ");
}

const plural = (n: number, one: string, many: string) => `${n} ${n === 1 ? one : many}`;

/** A country or state page: its famous cases and people's stories, and its busier states. */
export function PlaceArticle({ detail: { place, country, cases, stories } }: { detail: PlaceDetail }) {
  const where = country ? `${place.name}, ${country.name}` : place.name;
  const counts = [
    cases.length ? plural(cases.length, "famous case", "famous cases") : "",
    stories.length ? plural(stories.length, "story shared by people", "stories shared by people") : "",
  ].filter(Boolean);
  return (
    <article className="article">
      <span className="tag">
        <Link href="/places">Places</Link>
        {country && (
          <>
            {" "}
            · <Link href={placePath(country.key)}>{country.name}</Link>
          </>
        )}
      </span>
      <ArticleTitle variant="page">Unexplained encounters {inPlace(place.key, where)}</ArticleTitle>
      <div className="prose">
        <p>
          {counts.join(" and ")} {place.key === "at-sea" ? "at sea" : `from ${where}`}: {kinds([...cases, ...stories])}.
          Famous cases set out what was reported and the explanations offered, without taking a side.
        </p>
      </div>
      {place.states.length > 0 && (
        <section className="related">
          <SectionHeading variant="page">By state or region</SectionHeading>
          <div className="place-links">
            {place.states.map((s) => (
              <Link key={s.key} href={placePath(s.key)}>
                {s.name} <b>{s.count}</b>
              </Link>
            ))}
          </div>
        </section>
      )}
      {cases.length > 0 && (
        <section className="related">
          <SectionHeading variant="page">Famous cases</SectionHeading>
          <CaseLinks cases={cases} />
        </section>
      )}
      {stories.length > 0 && (
        <section className="related">
          <SectionHeading variant="page">People&apos;s stories</SectionHeading>
          <div className="list">
            {stories.map((s) => (
              <Link
                key={s.slug}
                className="item"
                href={`/story/${s.slug}`}
                style={{ "--c": CATEGORIES[s.category].color } as CSSProperties}
              >
                <i />
                <b>{s.place}</b>
                <em>{s.year ?? ""}</em>
                <small>{s.hook}</small>
              </Link>
            ))}
          </div>
        </section>
      )}
    </article>
  );
}
