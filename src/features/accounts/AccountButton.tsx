"use client";

import Link from "next/link";
import { useState } from "react";
import { Icon } from "@/components/brand";
import { signInWithGoogle, useSignedIn } from "./client";

/** Header button: "Sign in" when signed out, a link to My stories when signed in. */
export function AccountButton() {
  const signedIn = useSignedIn();
  const [leaving, setLeaving] = useState(false);

  if (signedIn) {
    return (
      <Link className="btn" href="/my-stories" aria-label="My stories" title="Your stories and account">
        {Icon.user}
        <span>My stories</span>
      </Link>
    );
  }

  const signIn = async () => {
    setLeaving(true);
    // There's nowhere better to show a failure in the header; the share form shows it if they try again there.
    if (await signInWithGoogle("/")) setLeaving(false);
  };

  return (
    <button
      type="button"
      className="btn"
      onClick={signIn}
      disabled={signedIn === null || leaving}
      aria-label="Sign in"
      title="Sign in with Google to share stories and echo them"
    >
      {Icon.user}
      <span>Sign in</span>
    </button>
  );
}
