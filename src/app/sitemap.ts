import type { MetadataRoute } from "next";
import { getAllCases } from "@/features/cases/queries";
import { getApprovedStories } from "@/features/stories/queries";
import { env } from "@/lib/server/env";

export const revalidate = 3600;

export default function sitemap(): MetadataRoute.Sitemap {
  const base = env.NEXT_PUBLIC_SITE_URL;
  return [
    { url: base, changeFrequency: "daily", priority: 1 },
    { url: `${base}/cases`, changeFrequency: "weekly", priority: 0.9 },
    { url: `${base}/privacy`, changeFrequency: "yearly", priority: 0.2 },
    { url: `${base}/terms`, changeFrequency: "yearly", priority: 0.2 },
    ...getAllCases().map((c) => ({
      url: `${base}/case/${c.slug}`,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
    ...getApprovedStories().map((s) => ({
      url: `${base}/story/${s.slug}`,
      changeFrequency: "monthly" as const,
      priority: 0.6,
    })),
  ];
}
