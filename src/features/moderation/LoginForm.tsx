"use client";

import { useActionState } from "react";
import { TextField } from "@/components/ui/TextField";
import { login } from "./auth";

export function LoginForm() {
  const [error, action, pending] = useActionState(login, null);
  return (
    <form action={action} className="form narrow">
      <TextField label="Admin password" name="password" type="password" autoComplete="current-password" required />
      {error && (
        <p className="error" role="alert">
          {error}
        </p>
      )}
      <div>
        <button className="btn primary" type="submit" disabled={pending}>
          {pending ? "Checking…" : "Sign in"}
        </button>
      </div>
    </form>
  );
}
