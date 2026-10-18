import { getAllCases, getCaseDetail } from "@/features/cases/queries";

// Pre-built for every case at build time, so opening a case file on the map is a cached file, not a query.
export const revalidate = 3600;

export function generateStaticParams() {
  return getAllCases().map((c) => ({ slug: c.slug }));
}

/** The full text of one case file, for the map. */
export async function GET(_req: Request, { params }: { params: Promise<{ slug: string }> }) {
  const detail = getCaseDetail((await params).slug);
  if (!detail) return Response.json({ error: "Not found" }, { status: 404 });
  return Response.json(detail);
}
