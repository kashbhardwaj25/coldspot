"use client";

import { AlertDialog } from "@base-ui/react/alert-dialog";
import { useRef } from "react";
import { useFormStatus } from "react-dom";

type Props = {
  /** The button's label, and the confirm button's too. */
  label: string;
  title: string;
  description: string;
  className?: string;
};

/**
 * A button inside a form that asks first, for actions that can't be undone.
 * Confirming submits the form the button sits in.
 */
export function ConfirmButton({ label, title, description, className = "btn danger" }: Props) {
  const { pending } = useFormStatus();
  const triggerRef = useRef<HTMLButtonElement>(null);
  return (
    <AlertDialog.Root>
      <AlertDialog.Trigger ref={triggerRef} className={className} disabled={pending}>
        {pending ? "Deleting…" : label}
      </AlertDialog.Trigger>
      <AlertDialog.Portal>
        <AlertDialog.Backdrop className="dialog-backdrop" />
        <AlertDialog.Viewport className="dialog-viewport">
          <AlertDialog.Popup className="dialog">
            <AlertDialog.Title className="dialog-title">{title}</AlertDialog.Title>
            <AlertDialog.Description className="dialog-text">{description}</AlertDialog.Description>
            <div className="dialog-actions">
              <AlertDialog.Close className="btn">Cancel</AlertDialog.Close>
              <AlertDialog.Close className="btn danger" onClick={() => triggerRef.current?.form?.requestSubmit()}>
                {label}
              </AlertDialog.Close>
            </div>
          </AlertDialog.Popup>
        </AlertDialog.Viewport>
      </AlertDialog.Portal>
    </AlertDialog.Root>
  );
}
