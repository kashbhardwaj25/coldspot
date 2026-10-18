import { z } from "zod";
import { PROXY_MODES } from "../proxy";

/**
 * Environment variables, validated once at startup. Secrets are optional here so the site can still be built
 * without them; the code that needs a secret checks for it (see `security.ts`, `moderation/auth.ts` and `accounts/auth.ts`).
 * No `server-only` import: `scripts/setup.ts` loads this through `db/client.ts` outside Next.
 */
const schema = z.object({
  DATABASE_PATH: z.string().min(1).default("data/coldspot.db"),
  ADMIN_PASSWORD: z.string().optional(),
  SESSION_SECRET: z.string().optional(),
  NEXT_PUBLIC_SITE_URL: z.url().default("http://localhost:3000"),
  // Google sign-in for sharing stories and echoes (Google Cloud Console → OAuth client).
  GOOGLE_CLIENT_ID: z.string().optional(),
  GOOGLE_CLIENT_SECRET: z.string().optional(),
  // Which proxy sets the visitor's IP (see lib/proxy.ts). "cloudflare" in production behind the Cloudflare proxy.
  TRUST_PROXY: z.enum(PROXY_MODES).default("none"),
  // Cloudflare Turnstile on the share form. Both or neither; without them the check is skipped.
  NEXT_PUBLIC_TURNSTILE_SITE_KEY: z.string().optional(),
  TURNSTILE_SECRET_KEY: z.string().optional(),
  // Shown on the privacy and terms pages for questions and removal requests.
  CONTACT_EMAIL: z.email().optional(),
  // Cloudflare Web Analytics (no cookies). Without it, no analytics script is loaded.
  CF_ANALYTICS_TOKEN: z.string().optional(),
});

export const env = schema.parse(process.env);
