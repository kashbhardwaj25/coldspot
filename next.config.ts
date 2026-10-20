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
