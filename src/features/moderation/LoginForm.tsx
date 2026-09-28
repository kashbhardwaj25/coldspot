"use client";

import { useActionState } from "react";
import { login } from "./auth";

export function LoginForm() {
  const [error, action, pending] = useActionState(login, null);
  return (
    <form action={action} className="form" style={{ maxWidth: 360 }}>
      <div className="field">
        <label htmlFor="password">Admin password</label>
        <input id="password" name="password" type="password" autoComplete="current-password" required />
      </div>
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
