import { z } from "zod";

/**
 * Environment variables, validated once at startup. Secrets are optional here so the site can still be built
 * without them; the code that needs a secret checks for it (see `security.ts` and `moderation/auth.ts`).
 * No `server-only` import: `scripts/setup.ts` loads this through `db/client.ts` outside Next.
 */
const schema = z.object({
  DATABASE_PATH: z.string().min(1).default("data/coldspot.db"),
  ADMIN_PASSWORD: z.string().optional(),
  SESSION_SECRET: z.string().optional(),
  NEXT_PUBLIC_SITE_URL: z.url().default("http://localhost:3000"),
});

export const env = schema.parse(process.env);
