import type { Metadata } from "next";
import { PageTop } from "@/components/PageTop";
import { PlacesIndex } from "@/features/regions/PlacesIndex";
import { getPlaces } from "@/features/regions/queries";

export const revalidate = 3600;

export const metadata: Metadata = {
  title: "Places",
  description: "Unexplained encounters by country: famous cases and people's stories from around the world.",
  alternates: { canonical: "/places" },
};

export default function PlacesPage() {
  return (
    <main className="page">
      <PageTop mapHref="/" />
      <PlacesIndex places={getPlaces()} />
    </main>
  );
}
