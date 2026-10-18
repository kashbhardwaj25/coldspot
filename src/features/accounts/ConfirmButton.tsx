"use client";

import { useFormStatus } from "react-dom";

type Props = { label: string; confirm: string; className?: string };

/** A submit button that asks first, for actions that can't be undone. */
export function ConfirmButton({ label, confirm, className = "btn danger" }: Props) {
  const { pending } = useFormStatus();
  return (
    <button
      type="submit"
      className={className}
      disabled={pending}
      onClick={(e) => {
        if (!window.confirm(confirm)) e.preventDefault();
      }}
    >
      {pending ? "Deleting…" : label}
    </button>
  );
}
