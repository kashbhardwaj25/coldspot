import { createAuthClient } from "better-auth/react";

/** Better Auth in the browser. Talks to /api/auth on the same origin. */
export const authClient = createAuthClient();

/** Whether someone is signed in: null while the check runs. */
export function useSignedIn(): boolean | null {
  const { data, isPending } = authClient.useSession();
  return isPending ? null : !!data;
}

/**
 * Sends the browser to Google, then back to `returnTo`. Resolves with an error message only if that
 * couldn't start (for example, sign-in isn't set up yet); otherwise the page navigates away.
 */
export async function signInWithGoogle(returnTo: string): Promise<string | null> {
  const { error } = await authClient.signIn.social({ provider: "google", callbackURL: returnTo });
  return error ? "Sign-in isn't available right now. Please try again later." : null;
}
