import { startTransition, useActionState, useEffect, useRef, useState, type FormEvent } from "react";
import { signInWithGoogle, useSignedIn } from "@/features/accounts/client";
import { clearDraft, RESUME_QUERY, saveDraft } from "@/features/stories/draft";
import { submitStory, type SubmitState } from "@/features/stories/submit";
import type { CaseSummary } from "@/lib/types";
import type { Town } from "../towns";
import { allCategories, toMarkers } from "../useGlobe";

type Point = { lat: number; lon: number };

/**
 * The share form's state and actions: sending (through a transition, so a rejected story keeps its text),
 * signing in without losing the draft, and picking a town that moves the pin and fills in the region.
 */
export function useShareForm({ center, cases }: { center: Point; cases: CaseSummary[] }) {
  const [state, action, pending] = useActionState<SubmitState, FormData>(submitStory, null);
  const signedIn = useSignedIn();
  const formRef = useRef<HTMLFormElement>(null);
  const autoRegion = useRef("");
  const [signInError, setSignInError] = useState<string | null>(null);
  const [leaving, setLeaving] = useState(false);
  const [target, setTarget] = useState<Point | null>(null);

  useEffect(() => {
    if (state?.ok) clearDraft();
  }, [state]);

  // React resets a form after a form action runs; submitting through a transition keeps what was typed.
  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    startTransition(() => action(data));
  };

  // Google sign-in leaves the page: keep the draft, with the pin where the writer moved it.
  const signIn = async () => {
    if (!formRef.current) return;
    const data = new FormData(formRef.current);
    saveDraft(data, { lat: Number(data.get("lat")) || center.lat, lon: Number(data.get("lon")) || center.lon });
    setLeaving(true);
    const error = await signInWithGoogle(`/?${RESUME_QUERY}`);
    if (error) {
      setSignInError(error);
      setLeaving(false);
    }
  };

  // A picked town moves the pin, and fills in the state and country unless the writer typed their own.
  const pickTown = (t: Town) => {
    setTarget({ lat: t[2], lon: t[3] });
    const region = formRef.current?.elements.namedItem("region");
    if (region instanceof HTMLInputElement && (!region.value || region.value === autoRegion.current)) {
      region.value = autoRegion.current = t[1];
    }
  };

  return {
    formRef,
    sent: state?.ok ? state.place : null,
    error: signInError ?? (state && !state.ok ? state.error : null),
    resetKey: state,
    pending,
    signedIn,
    leaving,
    target,
    landmarks: toMarkers(cases, allCategories()),
    onSubmit,
    signIn,
    pickTown,
  };
}
