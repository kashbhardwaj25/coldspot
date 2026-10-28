import "server-only";
import { asc, eq } from "drizzle-orm";
import { db, schema } from "@/db/client";
import type { CaseDetail, CaseItem, CaseSummary } from "@/lib/types";

const { cases } = schema;

type CaseRow = typeof cases.$inferSelect;

function toCaseSummary(r: Omit<CaseRow, "id" | "summary" | "explanation" | "wiki" | "createdAt">): CaseSummary {
  return {
    kind: "case",
    slug: r.slug,
    category: r.category,
    title: r.title,
    region: r.region,
    lat: r.lat,
    lon: r.lon,
    dateLabel: r.dateLabel,
    status: r.status,
    statusLabel: r.statusLabel,
    witnesses: r.witnesses,
    hook: r.hook,
    featured: r.featured,
    body: r.body,
    countryKey: r.countryKey,
    stateKey: r.stateKey,
  };
}

const toCaseItem = (r: CaseRow): CaseItem => ({
  ...toCaseSummary(r),
  summary: r.summary,
  explanation: r.explanation,
  wiki: r.wiki,
});

/** Every case with its full text, for the case pages, the all-cases page and the sitemap. */
export function getAllCases(): CaseItem[] {
  return db.select().from(cases).orderBy(asc(cases.id)).all().map(toCaseItem);
}

/** Every case without its full text: what the map screen sends to the browser. */
export function getCaseSummaries(): CaseSummary[] {
  return db
    .select({
      slug: cases.slug,
      category: cases.category,
      title: cases.title,
      region: cases.region,
      lat: cases.lat,
      lon: cases.lon,
      dateLabel: cases.dateLabel,
      status: cases.status,
      statusLabel: cases.statusLabel,
      witnesses: cases.witnesses,
      hook: cases.hook,
      featured: cases.featured,
      body: cases.body,
      countryKey: cases.countryKey,
      stateKey: cases.stateKey,
    })
    .from(cases)
    .orderBy(asc(cases.id))
    .all()
    .map(toCaseSummary);
}

/** The full text of one case file, fetched by the map when it's opened. */
export function getCaseDetail(slug: string): CaseDetail | null {
  return (
    db
      .select({ summary: cases.summary, explanation: cases.explanation, wiki: cases.wiki })
      .from(cases)
      .where(eq(cases.slug, slug))
      .get() ?? null
  );
}

export function getCase(slug: string): CaseItem | null {
  const row = db.select().from(cases).where(eq(cases.slug, slug)).get();
  return row ? toCaseItem(row) : null;
}
