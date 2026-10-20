import { toNextJsHandler } from "better-auth/next-js";
import { getAuth } from "@/features/accounts/auth";
import { STORIES_ENABLED } from "@/lib/features";

// Sign-in, sign-out and session endpoints (Better Auth). Off while People's stories are hidden.
const handle = (request: Request) =>
  STORIES_ENABLED ? getAuth().handler(request) : Promise.resolve(new Response("Not found", { status: 404 }));

export const { GET, POST } = toNextJsHandler(handle);
