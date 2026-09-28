"use client";

import Link from "next/link";
import { CaseArticle } from "@/features/cases/CaseArticle";
import { haversineKm } from "@/lib/geo";
import type { CaseItem, StoryItem } from "@/lib/types";

/** Stories within this distance count as "near" a famous case. */
const NEARBY_KM = 800;

type Props = { c: CaseItem; stories: StoryItem[]; onNearby: (c: CaseItem) => void };

/** Case file in a sheet, with a way across to people's stories near it. */
export function CaseSheet({ c, stories, onNearby }: Props) {
  const nearby = stories.filter((s) => haversineKm(s.lat, s.lon, c.lat, c.lon) < NEARBY_KM).length;
  return (
    <CaseArticle
      c={c}
      variant="sheet"
      actions={
        <>
          <button type="button" className="btn" onClick={() => onNearby(c)}>
            {nearby ? `People's stories near here · ${nearby}` : "Look for people's stories near here"}
          </button>
          <Link className="btn" href={`/case/${c.slug}`}>
            Full page
          </Link>
        </>
      }
    />
  );
}
