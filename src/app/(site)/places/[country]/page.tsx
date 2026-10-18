import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PageTop } from "@/components/PageTop";
import { PlaceArticle } from "@/features/regions/PlaceArticle";
import { placeMetadata } from "@/features/regions/metadata";
import { getPlace, getPlacePages } from "@/features/regions/queries";

export const revalidate = 3600;

type Params = { params: Promise<{ country: string }> };

export function generateStaticParams() {
  return getPlacePages().filter((p) => !p.state);
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const detail = getPlace((await params).country);
  return detail ? placeMetadata(detail) : {};
}

export default async function CountryPage({ params }: Params) {
  const detail = getPlace((await params).country);
  if (!detail) notFound();
  return (
    <main className="page">
      <PageTop mapHref={`/?place=${detail.place.key}`} />
      <PlaceArticle detail={detail} />
    </main>
  );
}
