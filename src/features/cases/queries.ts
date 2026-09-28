import "server-only";
import { asc, eq } from "drizzle-orm";
import { db, schema } from "@/db/client";
import type { CaseItem } from "@/lib/types";

const { cases } = schema;

function toCaseItem(r: typeof cases.$inferSelect): CaseItem {
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
    summary: r.summary,
    explanation: r.explanation,
    wiki: r.wiki,
  };
}

export function getAllCases(): CaseItem[] {
  return db.select().from(cases).orderBy(asc(cases.id)).all().map(toCaseItem);
}

export function getCase(slug: string): CaseItem | null {
  const row = db.select().from(cases).where(eq(cases.slug, slug)).get();
  return row ? toCaseItem(row) : null;
}
