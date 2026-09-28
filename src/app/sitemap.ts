import type { MetadataRoute } from "next";
import { getAllCases, getApprovedStories } from "@/db/queries";

export const revalidate = 3600;

export default function sitemap(): MetadataRoute.Sitemap {
  const base = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";
  return [
    { url: base, changeFrequency: "daily", priority: 1 },
    ...getAllCases().map((c) => ({ url: `${base}/case/${c.slug}`, changeFrequency: "monthly" as const, priority: 0.8 })),
    ...getApprovedStories().map((s) => ({ url: `${base}/story/${s.slug}`, changeFrequency: "monthly" as const, priority: 0.6 })),
  ];
}
