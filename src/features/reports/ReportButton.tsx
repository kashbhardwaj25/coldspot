"use client";

import { Dialog } from "@base-ui/react/dialog";
import { Radio } from "@base-ui/react/radio";
import { RadioGroup } from "@base-ui/react/radio-group";
import { useState, useTransition } from "react";
import { signInWithGoogle, useSignedIn } from "@/features/accounts/client";
import { REPORT_REASON_KEYS, REPORT_REASONS, type ReportReason } from "@/lib/categories";
import { reportStory } from "./actions";

type Props = { slug: string; /** Where to come back to after signing in. */ returnTo: string };

/** "Report this story": pick which rule it breaks. Signed-out readers are asked to sign in first. */
export function ReportButton({ slug, returnTo }: Props) {
  const signedIn = useSignedIn();
  const [open, setOpen] = useState(false);
  const [reason, setReason] = useState<ReportReason | null>(null);
  const [result, setResult] = useState<"sent" | string | null>(null);
  const [pending, start] = useTransition();

  const send = () =>
    start(async () => {
      if (!reason) return setResult("Choose a reason.");
      const r = await reportStory(slug, reason);
      setResult(r.ok ? "sent" : r.error);
    });

  if (signedIn === false) {
    return (
      <button type="button" className="link-btn quiet" onClick={() => signInWithGoogle(returnTo)}>
        Sign in to report this story
      </button>
    );
  }

  return (
    <Dialog.Root open={open} onOpenChange={setOpen}>
      <Dialog.Trigger className="link-btn quiet" disabled={signedIn === null}>
        Report this story
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Backdrop className="dialog-backdrop" />
        <Dialog.Viewport className="dialog-viewport">
          <Dialog.Popup className="dialog">
            <Dialog.Title className="dialog-title">
              {result === "sent" ? "Thanks for telling us" : "What's wrong with this story?"}
            </Dialog.Title>
            {result === "sent" ? (
              <Dialog.Description className="dialog-text">
                We&apos;ll look at it. A story that several people report is hidden until it&apos;s reviewed.
              </Dialog.Description>
            ) : (
              <RadioGroup
                className="report-reasons"
                aria-label="Reason"
                value={reason}
                onValueChange={(v) => setReason(v as ReportReason)}
              >
                {REPORT_REASON_KEYS.map((k) => (
                  <label key={k} className="report-reason">
                    <Radio.Root value={k} className="radio">
                      <Radio.Indicator className="radio-dot" />
                    </Radio.Root>
                    {REPORT_REASONS[k]}
                  </label>
                ))}
              </RadioGroup>
            )}
            {result && result !== "sent" && (
              <p className="error" role="alert">
                {result}
              </p>
            )}
            <div className="dialog-actions">
              <Dialog.Close className="btn">{result === "sent" ? "Close" : "Cancel"}</Dialog.Close>
              {result !== "sent" && (
                <button type="button" className="btn danger" onClick={send} disabled={pending}>
                  {pending ? "Sending…" : "Send report"}
                </button>
              )}
            </div>
          </Dialog.Popup>
        </Dialog.Viewport>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
