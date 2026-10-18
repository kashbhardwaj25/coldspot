"use client";

import Link from "next/link";
import { ArticleTitle } from "@/components/article";
import { CaseArticle } from "@/features/cases/CaseArticle";
import { STORIES_ENABLED } from "@/lib/features";
import { caseStatusLabel } from "@/lib/format";
import { haversineKm } from "@/lib/geo";
import type { CaseSummary, StoryItem } from "@/lib/types";
import { useCaseFile } from "../useCaseFile";

/** Stories within this distance count as "near" a famous case. */
const NEARBY_KM = 800;

type Props = { c: CaseSummary; stories: StoryItem[]; onNearby: (c: CaseSummary) => void };

/** Case file in a sheet, loaded on open, with a way across to people's stories near it. */
export function CaseSheet({ c, stories, onNearby }: Props) {
  const file = useCaseFile(c);
  if (file === "loading" || file === "error") return <Opening c={c} failed={file === "error"} />;
  const nearby = stories.filter((s) => haversineKm(s.lat, s.lon, c.lat, c.lon) < NEARBY_KM).length;
  return (
    <CaseArticle
      c={file}
      variant="sheet"
      actions={
        <>
          {STORIES_ENABLED && (
            <button type="button" className="btn" onClick={() => onNearby(c)}>
              {nearby ? `People's stories near here · ${nearby}` : "Look for people's stories near here"}
            </button>
          )}
          <Link className="btn" href={`/case/${c.slug}`}>
            Full page
          </Link>
        </>
      }
    />
  );
}

/** What the map already knows about a case, while the full case file loads (or if it can't). */
function Opening({ c, failed }: { c: CaseSummary; failed: boolean }) {
  return (
    <>
      <div>
        <ArticleTitle variant="sheet">{c.title}</ArticleTitle>
        <div className="s-sub">
          <span>
            {c.region} · {c.dateLabel}
          </span>
          <span className={`pill ${c.status}`}>{caseStatusLabel(c)}</span>
        </div>
      </div>
      <p className="quote">{c.hook}</p>
      {failed ? (
        <p className="opening">
          The case file couldn&apos;t be loaded. Check your connection, or{" "}
          <Link href={`/case/${c.slug}`}>open the full page</Link>.
        </p>
      ) : (
        <p className="opening" aria-live="polite">
          Opening the case file…
        </p>
      )}
    </>
  );
}
