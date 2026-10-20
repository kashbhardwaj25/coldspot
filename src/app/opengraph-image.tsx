import { ImageResponse } from "next/og";
import { PALETTE } from "@/lib/tokens";
import { OgCard } from "@/components/OgCard";

export const alt = "Uncanny Map: a globe of unexplained encounters";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

/** Default link preview for the site. */
export default function Image() {
  return new ImageResponse(
    <OgCard
      eyebrow="A globe of unexplained encounters"
      accent={PALETTE.phosphor}
      title="Something happened here."
      subtitle="Famous unexplained cases from around the world: strange lights, visitors, creatures, sounds and places, with the explanations offered."
    />,
    size,
  );
}
