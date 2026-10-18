import type { MetadataRoute } from "next";
import { env } from "@/lib/server/env";
import { isIndexable } from "@/lib/site";

export default function robots(): MetadataRoute.Robots {
  const base = env.NEXT_PUBLIC_SITE_URL;
  // Keep crawlers out until the site has its real domain (see lib/site.ts).
  if (!isIndexable(base)) return { rules: [{ userAgent: "*", disallow: "/" }] };
  return { rules: [{ userAgent: "*", allow: "/", disallow: "/admin" }], sitemap: `${base}/sitemap.xml` };
}
