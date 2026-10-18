"use client";

import { Button } from "@base-ui/react/button";
import { useState } from "react";
import { Icon } from "@/components/brand";

type Props = { path: string; title: string; text: string };

/** Shares a page: the phone's own share sheet where there is one, otherwise copies the link. */
export function ShareButton({ path, title, text }: Props) {
  const [copied, setCopied] = useState(false);

  const share = async () => {
    const url = new URL(path, window.location.origin).toString();
    if (navigator.share) {
      // Cancelling the share sheet rejects; that's not an error worth showing.
      await navigator.share({ title, text, url }).catch(() => {});
      return;
    }
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      window.prompt("Copy this link:", url);
    }
  };

  return (
    <Button className="btn" onClick={share}>
      {Icon.share}
      <span aria-live="polite">{copied ? "Link copied" : "Share"}</span>
    </Button>
  );
}
