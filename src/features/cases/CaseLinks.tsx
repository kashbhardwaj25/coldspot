import Link from "next/link";
import type { CSSProperties } from "react";
import { caseStatusLabel, catColor } from "@/lib/format";
import type { CaseSummary } from "@/lib/types";

/** A list of links to case pages: the all-cases page and "more cases" under each case. */
export function CaseLinks({ cases }: { cases: CaseSummary[] }) {
  return (
    <div className="list">
      {cases.map((c) => (
        <Link
          key={c.slug}
          className="item"
          href={`/case/${c.slug}`}
          style={{ "--c": catColor(c.category) } as CSSProperties}
        >
          <i className="d" />
          <b>{c.title}</b>
          <em className={`pill ${c.status}`}>{caseStatusLabel(c)}</em>
          <small>
            {c.region} · {c.dateLabel}
          </small>
        </Link>
      ))}
    </div>
  );
}
