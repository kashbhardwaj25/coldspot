# Coldspot: coding standards

How code is written in this repo. Product rules (privacy, content, map borders) live in `AGENTS.md`; this file covers the code itself. Most of it is enforced by tooling, so `npm run check` passing is the first bar, not the last.

## Tooling

| Command             | What it does                                            |
| ------------------- | ------------------------------------------------------- |
| `npm run check`     | Typecheck, lint and format check. Run before finishing. |
| `npm run lint:fix`  | ESLint with autofix                                     |
| `npm run format`    | Prettier on the whole repo                              |
| `npm run typecheck` | `tsc --noEmit`                                          |

- **ESLint** (`eslint.config.mjs`): Next core-web-vitals + TypeScript, the full `jsx-a11y` recommended set, React Compiler rules from `react-hooks` v7, and `eslint-config-prettier` last.
- **Prettier** (`.prettierrc.json`): 120 columns, double quotes, semicolons, trailing commas. Don't hand-format; don't fight it.
- **Pre-commit** (Husky + lint-staged): staged files get `eslint --fix --max-warnings=0` and Prettier, then the whole project is typechecked. Never commit with `--no-verify`; fix the cause instead.
- `.editorconfig` and `.nvmrc` (Node 22) keep editors and Node versions consistent.

## File size: 150 lines

`max-lines` is an error at 150 lines, not counting blank lines and comments. Seed data in `src/data/` is exempt.

- Split by responsibility, not by line number. A good split gives each file a one-line description (see `src/features/globe/`: camera, input, motion, draw, tuning, engine).
- Don't game the limit by cramming statements onto one line or deleting useful comments.
- A component that renders several distinct regions becomes several components. Logic that isn't rendering (effects, subscriptions, derived data) moves into a `useX` hook next to it.
- CSS isn't linted for length, but follows the same idea: styles live in `src/styles/`, one file per area. `map.css` is the largest; split it further before it grows much more.

## TypeScript

`tsconfig.json` is `strict` plus `noUncheckedIndexedAccess`, `noUnusedLocals`, `noUnusedParameters`, `noImplicitReturns`, `noImplicitOverride` and `noFallthroughCasesInSwitch`.

- No `any` (error). Use `unknown` and narrow, or a real type.
- No non-null assertions (`!`). Narrow with a guard, or throw a clear error where a value truly must exist (see `context()` in `globe/engine.ts`).
- Indexing can return `undefined`: handle it. For single-row counts use `.get()?.n ?? 0`, not `const [{ n }] = ….all()`.
- Type-only imports use `import { type X }` (enforced).
- Prefix intentionally unused parameters with `_` (`_prev` in `useActionState` actions).
- Database row types come from the schema (`typeof table.$inferSelect`). Browser-facing shapes are `CaseItem`/`StoryItem` in `src/lib/types.ts`.
- Validate every external input (forms, params, env) with `zod` at the boundary.

## Next.js

- **Server Components by default.** Add `"use client"` only to the component that needs state, effects or browser APIs, as low in the tree as possible.
- **Server-only modules** start with `import "server-only"` (every feature's `queries.ts`, `lib/server/security.ts`). `db/client.ts` and `lib/server/env.ts` don't, because `scripts/setup.ts` loads them outside Next.
- **Server actions are public HTTP endpoints.** Validate input with `zod`, check `isAdmin()` inside every admin action and every admin page (not only in `admin/layout.tsx`: layouts render in parallel with pages, so a layout check doesn't stop a page's queries), keep writes short and synchronous, and `revalidatePath` every public page the change affects.
- `params`, `cookies()` and `headers()` are async; `await` them.
- Keep `/` static: no `cookies()`, `headers()` or `searchParams` on it. Read deep links on the client.
- Use `next/link` for internal links, `next/font` for fonts (already set up in `layout.tsx`), and the Metadata API for titles, descriptions and Open Graph tags.
- Read environment variables through `env` (`lib/server/env.ts`), which validates them with zod. Only `NEXT_PUBLIC_*` values may reach client code.

## React

- Function components with a `Props` type. Exported components get a one-line doc comment saying what they are.
- React 19: `ref` is a normal prop; no `forwardRef`.
- **The React Compiler lint rules are errors.** In particular:
  - Never read `ref.current` during render.
  - Name refs `somethingRef` and keep them as standalone variables; reading refs off a props object or a plain object (`el.base`) is flagged.
  - Components that take a `ref` prop should destructure their props.
- **Effects are for syncing with things outside React** (the globe engine, audio, DOM listeners, fetches). Always clean up. Don't use an effect to derive state from props; compute it during render or with `useMemo`.
- Per-frame values never go through React state. Use a `Signal` (`src/lib/signal.ts`) and write to the DOM in a subscriber, like `Freq` in `parts.tsx`.
- Keep state minimal and derived values derived (`tuned` is looked up from `tunedKey`, not stored).
- `useCallback`/`useMemo` only where identity or cost matters (effect dependencies, props to memoised children, real computation).
- Stable keys: use `itemKey(item)` or a slug. Array indexes are fine only for static lists of paragraphs.
- Hooks live in `useX.ts` files beside the component that uses them.

## Accessibility

The `jsx-a11y` recommended rules are errors. Beyond what the linter can see:

- Use the right element: `<button type="button">` for actions, `<a>`/`<Link>` for navigation. Never a clickable `<div>` that keyboard users need.
- Every form control has a `<label htmlFor>`. Hints are linked with `aria-describedby`.
- Toggles use `aria-pressed`. Groups of toggles have `role="group"` and an `aria-label`.
- Dialogs (`Sheet`) have `role="dialog"`, `aria-modal`, `aria-labelledby`, close on Esc, move focus in on open, and return it on close.
- Decorative SVGs and glyphs get `aria-hidden="true"`. Icon-only buttons get an `aria-label`.
- `aria-live` regions should announce meaningful changes only. Hide constantly changing text inside them (coordinates are `aria-hidden`).
- No `autoFocus`.
- Respect `prefers-reduced-motion` in every animation, both CSS and canvas.
- Anything you can do with a pointer on the globe must also work from the keyboard (arrow keys, +/−, Enter).
- Colours come from the CSS variables, which were chosen for contrast on the dark background; check contrast before adding new ones.

## Folder structure

Organised by feature, not by kind of file. The full tree is in `AGENTS.md` under "Layout".

| Folder                 | Holds                                                                                        | May import                                              |
| ---------------------- | -------------------------------------------------------------------------------------------- | ------------------------------------------------------- |
| `src/app/`             | Routes only: thin pages, layouts, metadata, `sitemap.ts`, `robots.ts`                        | `features`, `components`, `lib` (never `db`)            |
| `src/features/<name>/` | Everything for one domain: `queries.ts`, `"use server"` files, pure logic, components, hooks | `db`, `lib`, `components`, other features' public files |
| `src/features/globe/`  | The canvas engine                                                                            | `lib` only: no React, Next, `db` or other features      |
| `src/features/map/`    | The map screen, which ties the features together                                             | anything a feature may; only routes import it           |
| `src/components/`      | Shared UI that knows nothing about any feature (`brand`, `PageTop`, `article`)               | `lib`                                                   |
| `src/lib/`             | Shared, framework-free helpers; `lib/server/` for server-only ones (`env`, `security`)       | `lib`                                                   |
| `src/db/`              | Schema and connection                                                                        | `lib/server/env`                                        |
| `src/styles/`          | CSS by area, imported in order by `app/globals.css`                                          |                                                         |

ESLint enforces the "may import" column, including that components (`.tsx` in a feature) never import `@/db` or `@/lib/server`: they get data through props.

### Inside a feature

| File                                                                                 | Contents                                                                                                                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------- |
| `queries.ts`                                                                         | Reads. Starts with `import "server-only"`. Returns browser-safe shapes (`CaseItem`, `StoryItem`), never raw rows, unless the caller is admin-only |
| `actions.ts`, or a file named for what it does (`submit.ts`, `echoes.ts`, `auth.ts`) | `"use server"` writes. Each one validates input, checks permission and revalidates what it changes                                                |
| `validation.ts` and other pure `.ts`                                                 | Rules with no Next or database imports, so they're easy to test                                                                                   |
| `PascalCase.tsx`                                                                     | Components. A component shared by a page and a sheet takes a `variant` (see `CaseArticle`)                                                        |
| `useThing.ts`                                                                        | Hooks for that feature's client components                                                                                                        |

Start with those files in the feature folder. Add subfolders (like `map/sheets/`) only when a feature has more than about eight files of one kind.

### Where new code goes

- **A new domain** (regions, reports): a new folder in `src/features/`.
- **A new public page**: a thin route in `app/(site)/`, with the content as a feature component. A shared `(site)/layout.tsx` arrives with the footer and legal links (see `docs/TASKS.md`); until then each page renders `PageTop` itself.
- **A new admin page**: `app/admin/<name>/page.tsx`. It gets the shell from `admin/layout.tsx` and must check `isAdmin()` itself.
- **Tests** go next to the code they test: `validation.test.ts` beside `validation.ts`.

## Naming and layout

- Components: `PascalCase.tsx`, one exported component per file, with small private helpers allowed below it.
- Hooks: `useThing.ts`. Plain modules: `camelCase.ts`.
- Shared, framework-free helpers go in `src/lib/` (no directive). Anything used by both server and client lives there, never in a `"use client"` file.
- UI state types shared by several components sit beside them (`features/map/state.ts`).
- Comments explain _why_ or describe a unit's job; don't narrate what the code already says.
