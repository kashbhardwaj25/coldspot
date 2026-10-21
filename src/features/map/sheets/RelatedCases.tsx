import type { CSSProperties } from "react";
import { SectionHeading } from "@/components/article";
import { relatedCases } from "@/features/cases/related";
import { CATEGORIES } from "@/lib/categories";
import { caseStatusLabel, catColor } from "@/lib/format";
import type { CaseSummary } from "@/lib/types";

type Props = { c: CaseSummary; cases: CaseSummary[]; onPick: (c: CaseSummary) => void };

/** The end of a case file on the map: cases nearby and in the same category. Picking one opens its case file. */
export function RelatedCases({ c, cases, onPick }: Props) {
  const { nearby, sameCategory } = relatedCases(cases, c, 3);
  const groups = [
    { title: "Nearby cases", items: nearby },
    { title: `More ${CATEGORIES[c.category].label.toLowerCase()} cases`, items: sameCategory },
  ].filter((g) => g.items.length > 0);

  return groups.map((g) => (
    <section className="related" key={g.title}>
      <SectionHeading variant="sheet">{g.title}</SectionHeading>
      <div className="list">
        {g.items.map((o) => (
          <button
            type="button"
            key={o.slug}
            className="item"
            style={{ "--c": catColor(o.category) } as CSSProperties}
            onClick={(e) => {
              // The sheet stays open with the new case file, so start it from the top.
              e.currentTarget.closest(".sheet-body")?.scrollTo({ top: 0 });
              onPick(o);
            }}
          >
            <i className="d" />
            <b>{o.title}</b>
            <em className={`pill ${o.status}`}>{caseStatusLabel(o)}</em>
            <small>
              {o.region} · {o.dateLabel}
            </small>
          </button>
        ))}
      </div>
    </section>
  ));
}
