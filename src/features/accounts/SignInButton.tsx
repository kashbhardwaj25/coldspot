"use client";

import { useState } from "react";
import { signInWithGoogle } from "./client";

/** "Sign in with Google", returning to this page afterwards. */
export function SignInButton() {
  const [state, setState] = useState<"idle" | "leaving" | string>("idle");
  const signIn = async () => {
    setState("leaving");
    setState((await signInWithGoogle(window.location.pathname)) ?? "leaving");
  };
  const error = state !== "idle" && state !== "leaving" ? state : null;
  return (
    <div className="signin-send">
      <button type="button" className="btn primary" onClick={signIn} disabled={state === "leaving"}>
        {state === "leaving" ? "Opening Google…" : "Sign in with Google"}
      </button>
      {error && (
        <p className="error" role="alert">
          {error}
        </p>
      )}
    </div>
  );
}
