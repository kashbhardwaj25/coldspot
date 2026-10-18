import { ImageResponse } from "next/og";
import { PALETTE } from "@/lib/tokens";
import { OgCard } from "@/components/OgCard";
import { getAllCases, getCase } from "@/features/cases/queries";
import { CATEGORIES } from "@/lib/categories";
import { caseStatusLabel } from "@/lib/format";

export const alt = "Coldspot case file";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const revalidate = 3600;

export function generateStaticParams() {
  return getAllCases().map((c) => ({ slug: c.slug }));
}

/** Link preview for a case page: category, title, place and date, and status. */
export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
  const c = getCase((await params).slug);
  if (!c)
    return new ImageResponse(<OgCard eyebrow="Case file" accent={PALETTE.ice} title="Coldspot" subtitle="" />, size);
  const cat = CATEGORIES[c.category];
  return new ImageResponse(
    <OgCard
      eyebrow={`${cat.label} · Case file`}
      accent={cat.color}
      title={c.title}
      subtitle={`${c.region} · ${c.dateLabel}`}
      footer={caseStatusLabel(c)}
    />,
    size,
  );
}
