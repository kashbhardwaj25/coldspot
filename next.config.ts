import type { NextConfig } from "next";
import { env } from "./src/lib/server/env";
import { isIndexable } from "./src/lib/site";

const siteUrl = env.NEXT_PUBLIC_SITE_URL;

const nextConfig: NextConfig = {
  // better-sqlite3 is a native module; keep it out of the server bundle.
  serverExternalPackages: ["better-sqlite3"],
  // Memoises components and hooks automatically, so the code needs no useMemo, useCallback or memo.
  // The react-hooks lint rules keep the code compatible with it.
  reactCompiler: true,

  // The coastlines never change (a new version gets a new file name), so browsers and Cloudflare can keep them.
  // The town list is regenerated now and then, so it's kept for a day and refreshed in the background.
  async headers() {
    return [
      {
        source: "/land-:detail.json",
        headers: [{ key: "Cache-Control", value: "public, max-age=31536000, immutable" }],
      },
      {
        source: "/towns.json",
        headers: [{ key: "Cache-Control", value: "public, max-age=86400, stale-while-revalidate=604800" }],
      },
    ];
  },

  // Serve the site at one address only. Once SITE_URL is the real domain, the host's own address
  // (*.up.railway.app) and www. redirect there permanently, so search engines see a single site.
  async redirects() {
    if (!isIndexable(siteUrl)) return [];
    const host = new URL(siteUrl).hostname;
    const toSite = (value: string) => ({
      source: "/:path*",
      has: [{ type: "host" as const, value }],
      destination: `${siteUrl}/:path*`,
      permanent: true,
    });
    return [toSite(".+\\.up\\.railway\\.app"), toSite(`www\\.${host.replace(/\./g, "\\.")}`)];
  },
};

export default nextConfig;
