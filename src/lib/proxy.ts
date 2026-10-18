/**
 * Which proxy, if any, we trust to tell us the visitor's IP (the TRUST_PROXY setting).
 * - `none`: no trusted proxy. Headers can be forged by anyone, so we don't read them and IP limits are off.
 * - `cloudflare`: behind the Cloudflare proxy, which sets `cf-connecting-ip`.
 * - `forwarded`: behind one proxy that appends the visitor's IP to `x-forwarded-for` (we read the last entry,
 *   the one our own proxy added; anything before it came from the visitor and can be forged).
 */
export const PROXY_MODES = ["none", "cloudflare", "forwarded"] as const;
export type ProxyMode = (typeof PROXY_MODES)[number];

/** The visitor's IP from the header the trusted proxy sets, or null if there isn't one we can trust. */
export function trustedIp(mode: ProxyMode, header: (name: string) => string | null): string | null {
  switch (mode) {
    case "cloudflare":
      return header("cf-connecting-ip")?.trim() || null;
    case "forwarded":
      return header("x-forwarded-for")?.split(",").at(-1)?.trim() || null;
    case "none":
      return null;
  }
}

/** The headers Better Auth should read the IP from for its own rate limiting. */
export const IP_HEADERS: Record<ProxyMode, string[]> = {
  none: [],
  cloudflare: ["cf-connecting-ip"],
  forwarded: ["x-forwarded-for"],
};
