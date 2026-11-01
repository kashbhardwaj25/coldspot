# Plan: admin access through Google sign-in

**Status:** proposed, not started. Listed in `docs/TASKS.md` under "3. Admin".

Replace the shared admin password with an allowlist of Google accounts, so only named people can review stories.

## Today

- `/admin` shows a password form (`features/moderation/LoginForm.tsx`, `login()` in `moderation/auth.ts`).
- A correct `ADMIN_PASSWORD` starts a separate admin session: a random token in the `um_admin` cookie, its hash in `admin_sessions`. Sessions last 7 days and end on sign-out or when the password changes.
- The password can be guessed at 5 attempts per 15 minutes per IP (`moderation/attempts.ts`).
- Anyone who knows the password is an admin.
- Google sign-in (Better Auth) is a separate system, used only for sharing stories and echoing.

## Proposal

### 1. Allowlist in the environment

- New variable `ADMIN_EMAILS`, comma-separated, for example `ADMIN_EMAILS=you@gmail.com,other@gmail.com`.
- Validated in `src/lib/server/env.ts`. Trim the entries and compare them in lower case.
- Unset or empty means nobody is an admin (fail closed).

### 2. `isAdmin()` checks the account

- Rewrite `isAdmin()` in `features/moderation/session.ts` to read the Better Auth session (through `currentUser()` in `features/accounts/session.ts`, extended to return what's needed). It's true only when:
  - the email is on the allowlist, and
  - the email is verified (`emailVerified`, set from Google).
- Put the matching in a small pure function with unit tests.
- Every existing `isAdmin()` call stays where it is (`admin/page.tsx`, `admin/layout.tsx`, `moderation/actions.ts`), so no page or action loses its check.

### 3. The `/admin` page

| Visitor                         | Sees                                                                             |
| ------------------------------- | -------------------------------------------------------------------------------- |
| Signed out                      | The existing "Sign in with Google" button, returning to `/admin` afterwards      |
| Signed in, not on the allowlist | "This account doesn't have access" and a sign-out button; it never says who does |
| Signed in, on the allowlist     | The review queue, as now                                                         |

"Sign out" in the admin header uses the normal account sign-out (`signOut` in `features/accounts/actions.ts`).

### 4. Remove the password system

- Delete `ADMIN_PASSWORD`, `login()`/`logout()` in `moderation/auth.ts`, `attempts.ts` and its test, `LoginForm.tsx`, and the `um_admin` cookie.
- Drop the `admin_sessions` table in `src/db/schema.ts`, run `npm run db:generate`, and commit the migration.
- Admin sign-in then inherits Google's own protection (2FA, suspicious-login checks) instead of a password typed into our site.

### 5. Docs and config

- `AGENTS.md`: the privacy and safety rule about admin sessions, the environment table, the layout and the `/admin` line.
- `docs/CODING.md` (the `isAdmin()` notes), `docs/DEPLOY.md`, `docs/TASKS.md`, `.env.example`, `deploy/.env.example`, `deploy/docker-compose.yml`.
- The privacy policy doesn't change: nothing new is collected, since the email is already stored.

## Rollout

1. Set `ADMIN_EMAILS` on Railway **before** the change deploys, or nobody can reach `/admin`.
2. Deploy, sign in at `/admin` with an allowed account, and check that another account is refused.
3. Delete `ADMIN_PASSWORD` from Railway.

## Testing

- Unit tests for the allowlist matching (case, spaces, empty list, unverified email).
- Locally without Google keys: insert a test user and session row and sign the `better-auth.session_token` cookie with `SESSION_SECRET`, as `AGENTS.md` describes. Check that:
  - an allowed email gets the queue and can approve a story,
  - another email sees "no access" and its server actions are refused,
  - signed out shows the sign-in button.
- `npm run check` and `npm run build`.

## Decisions to make before starting

1. **Session length.** Better Auth sessions last 30 days, against 7 days for admin sessions today. Recommended: for admin only, require a sign-in within the last 7 days (check the session's `createdAt`) and ask older sessions to sign in with Google again. The alternative is to accept 30 days.
2. **Fallback if Google sign-in breaks.** If Google sign-in fails or the account is locked, nobody can reach `/admin` until it's fixed. Recommended: no fallback; a rescue route would mean keeping a password. Recovery is editing Railway variables or the database directly.
3. **Match on email or on Google account id.** Recommended: the verified email, which is easy to configure. The permanent Google account id is slightly stronger but awkward to find and set.
