"use client";

import { useEffect, useRef } from "react";

type TurnstileApi = {
  render: (el: HTMLElement, options: Record<string, unknown>) => string;
  reset: (id: string) => void;
  remove: (id: string) => void;
};
declare global {
  interface Window {
    turnstile?: TurnstileApi;
  }
}

const SCRIPT = "https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit";
let loading: Promise<TurnstileApi> | null = null;

/** Loads Cloudflare's script once, the first time a widget is shown. */
function loadTurnstile(): Promise<TurnstileApi> {
  loading ??= new Promise((resolve, reject) => {
    const s = document.createElement("script");
    s.src = SCRIPT;
    s.async = true;
    s.onload = () => (window.turnstile ? resolve(window.turnstile) : reject(new Error("Turnstile missing")));
    s.onerror = () => {
      loading = null;
      reject(new Error("Couldn't load Turnstile"));
    };
    document.head.append(s);
  });
  return loading;
}

type Props = {
  siteKey: string;
  /** Changes after each submission; the widget then fetches a fresh token, since each one works only once. */
  resetKey: unknown;
};

/** Cloudflare Turnstile spam check. Adds a hidden `cf-turnstile-response` field to the form it sits in. */
export function Turnstile({ siteKey, resetKey }: Props) {
  const boxRef = useRef<HTMLDivElement>(null);
  const idRef = useRef<string | null>(null);

  useEffect(() => {
    let cancelled = false;
    loadTurnstile()
      .then((api) => {
        if (cancelled || !boxRef.current) return;
        idRef.current = api.render(boxRef.current, { sitekey: siteKey, theme: "dark", size: "flexible" });
      })
      .catch((err: unknown) => console.error(err));
    return () => {
      cancelled = true;
      if (idRef.current) window.turnstile?.remove(idRef.current);
      idRef.current = null;
    };
  }, [siteKey]);

  useEffect(() => {
    if (idRef.current) window.turnstile?.reset(idRef.current);
  }, [resetKey]);

  return <div className="turnstile" ref={boxRef} />;
}
