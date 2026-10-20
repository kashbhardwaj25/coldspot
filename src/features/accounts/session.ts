import "server-only";
import { headers } from "next/headers";
import { getAuth } from "./auth";

export type Viewer = { id: string; email: string };

/** The signed-in account for this request, or null. Never returns the session token. */
export async function currentUser(): Promise<Viewer | null> {
  const session = await getAuth().api.getSession({ headers: await headers() });
  return session ? { id: session.user.id, email: session.user.email } : null;
}
