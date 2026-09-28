import type { ReactNode } from "react";
import { ArticleTitle, Fields, Paragraphs, SectionHeading, type ArticleVariant } from "@/components/article";
import { caseStatusLabel } from "@/lib/format";
import type { CaseItem } from "@/lib/types";

type Props = {
  c: CaseItem;
  variant: ArticleVariant;
  /** Extra buttons shown before the Wikipedia link. */
  actions?: ReactNode;
};

/** A famous case: what was reported and the explanations offered, without taking a side. */
export function CaseArticle({ c, variant, actions }: Props) {
  const status = caseStatusLabel(c);
  return (
    <>
      <div>
        <ArticleTitle variant={variant}>{c.title}</ArticleTitle>
        <div className="s-sub">
          <span>
            {c.region} · {c.dateLabel}
          </span>
          <span className={`pill ${c.status}`}>{status}</span>
        </div>
      </div>
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
      {(actions || c.wiki) && (
        <div className="links">
          {actions}
          {c.wiki && (
            <a
              className="btn"
              href={`https://en.wikipedia.org/w/index.php?search=${encodeURIComponent(c.wiki)}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              Read more on Wikipedia ↗
            </a>
          )}
        </div>
      )}
      <p className="note">
        Famous cases are real, widely reported events. Each file sets out what witnesses said and the explanations that
        have been offered, without taking a side.
      </p>
    </>
  );
}
