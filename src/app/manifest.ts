import type { MetadataRoute } from "next";
import { SITE_DESCRIPTION } from "@/features/cases/jsonld";
import { PALETTE } from "@/lib/tokens";

/** Lets people add the site to their home screen, where it opens full screen like an app. */
export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Uncanny Map",
    short_name: "Uncanny Map",
    description: SITE_DESCRIPTION,
    start_url: "/",
    display: "standalone",
    background_color: PALETTE.night,
    theme_color: PALETTE.night,
    icons: [
      { src: "/icons/icon-192.png", sizes: "192x192", type: "image/png", purpose: "any" },
      { src: "/icons/icon-512.png", sizes: "512x512", type: "image/png", purpose: "any" },
      { src: "/icons/icon-maskable-512.png", sizes: "512x512", type: "image/png", purpose: "maskable" },
    ],
  };
}
