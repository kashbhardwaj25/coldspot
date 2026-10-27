import type { CSSProperties, ReactNode } from "react";
import { ArticleTitle, Fields, Paragraphs, SectionHeading, type ArticleVariant } from "@/components/article";
import { Icon } from "@/components/brand";
import { CATEGORIES } from "@/lib/categories";
import { caseStatusLabel } from "@/lib/format";
import type { CaseItem } from "@/lib/types";

type Props = {
  c: CaseItem;
  variant: ArticleVariant;
  /** Extra buttons shown before the Wikipedia and YouTube links. */
  actions?: ReactNode;
  /** Shown between the title and the opening line (the small globe on the case page). */
  lead?: ReactNode;
};

/** A famous case: what was reported and the explanations offered, without taking a side. */
export function CaseArticle({ c, variant, actions, lead }: Props) {
  const status = caseStatusLabel(c);
  return (
    <>
      <div>
        <ArticleTitle variant={variant}>{c.title}</ArticleTitle>
        <div className="s-sub">
          <span className="tag" style={{ "--tc": CATEGORIES[c.category].color } as CSSProperties}>
            <i className="d" />
            {CATEGORIES[c.category].label}
          </span>
          <span>
            {c.region} · {c.dateLabel}
          </span>
          <span className={`pill ${c.status}`}>{status}</span>
        </div>
      </div>
      {lead}
      <p className="quote">{c.hook}</p>
      <section>
        <SectionHeading variant={variant}>What was reported</SectionHeading>
        <Paragraphs items={c.summary} />
      </section>
      <section className="explain">
        <SectionHeading variant={variant}>Explanations offered</SectionHeading>
        <Paragraphs items={[c.explanation]} />
      </section>
      <Fields
        items={[
          ["When", c.dateLabel],
          ["Where", c.region],
          ["Witnesses", c.witnesses],
          ["Status", status],
        ]}
      />
      <div className="links">
        {actions}
        {c.wiki && (
          <a
            className="btn"
            href={`https://en.wikipedia.org/w/index.php?search=${encodeURIComponent(c.wiki)}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            Read more on Wikipedia {Icon.external}
          </a>
        )}
        <a
          className="btn"
          href={`https://www.youtube.com/results?search_query=${encodeURIComponent(c.title)}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          Search on YouTube {Icon.external}
        </a>
      </div>
      <p className="note">
        Famous cases are real, widely reported events. Each file sets out what witnesses said and the explanations that
        have been offered, without taking a side.
      </p>
    </>
  );
}
