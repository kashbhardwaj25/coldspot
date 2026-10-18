import "server-only";
import { betterAuth } from "better-auth";
import { drizzleAdapter } from "better-auth/adapters/drizzle";
import { nextCookies } from "better-auth/next-js";
import { db, schema } from "@/db/client";
import { env } from "@/lib/server/env";

/**
 * Google sign-in, for sharing stories and echoing them. Reading never needs an account.
 * We keep only the Google account id and the email: no name or photo (the "profile" scope isn't requested),
 * no OAuth tokens, and no IP address or user agent on sessions.
 */
function createAuth() {
  const secret = env.SESSION_SECRET;
  if (!secret || secret.length < 16) throw new Error("Set SESSION_SECRET (16+ characters) in .env.local");
  const { GOOGLE_CLIENT_ID: clientId, GOOGLE_CLIENT_SECRET: clientSecret } = env;

  return betterAuth({
    secret,
    baseURL: env.NEXT_PUBLIC_SITE_URL,
    database: drizzleAdapter(db, {
      provider: "sqlite",
      schema: {
        user: schema.users,
        session: schema.sessions,
        account: schema.accounts,
        verification: schema.verifications,
      },
    }),
    socialProviders:
      clientId && clientSecret
        ? {
            google: {
              clientId,
              clientSecret,
              disableDefaultScope: true,
              scope: ["openid", "email"],
              prompt: "select_account",
              mapProfileToUser: () => ({ name: "" }),
            },
          }
        : {},
    session: { expiresIn: 60 * 60 * 24 * 30 },
    account: { updateAccountOnSignIn: false },
    databaseHooks: {
      account: {
        create: {
          before: async (a) => ({
            data: { ...a, accessToken: null, refreshToken: null, idToken: null, scope: null },
          }),
        },
      },
      session: {
        create: { before: async (s) => ({ data: { ...s, ipAddress: null, userAgent: null } }) },
      },
    },
    telemetry: { enabled: false },
    plugins: [nextCookies()],
  });
}

let instance: ReturnType<typeof createAuth> | undefined;

/** The auth instance, created on first use so builds don't need the secrets. */
export function getAuth() {
  instance ??= createAuth();
  return instance;
}
