import type { Metadata } from "next";
import { inPlace, placePath } from "./places";
import type { PlaceDetail } from "./queries";

/** Title, description and canonical URL for a country or state page. */
export function placeMetadata({ place, country, cases, stories }: PlaceDetail): Metadata {
  const where = country ? `${place.name}, ${country.name}` : place.name;
  const title = `Unexplained encounters ${inPlace(place.key, where)}`;
  const lead = [...cases.map((c) => c.title), ...stories.map((s) => s.place)].slice(0, 3).join(", ");
  const description = `${place.count} famous cases and people's stories ${place.key === "at-sea" ? "at sea" : `from ${where}`}, including ${lead}.`;
  return { title, description, alternates: { canonical: placePath(place.key) }, openGraph: { title, description } };
}
