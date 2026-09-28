# AGENTS.md

Instructions for AI coding agents (Claude Code and others) working in this repo. For what Coldspot is and why, read `docs/CONTEXT.md` first. Code style, tooling and React/Next/accessibility practices are in `docs/CODING.md`; the work left to do is in `docs/TASKS.md`.

## Project in one paragraph

Coldspot is a website with a Radio Garden-style globe of unexplained encounters. Drag the map, and whatever reaches the centre ring "tunes in". It has two modes: **Famous cases** (real, curated incidents) and **People's stories** (user submissions, reviewed before publishing). It's built by one developer alongside a day job, so prefer simple, low-maintenance solutions over clever ones.

## Stack

- **Next.js 16** (App Router, Server Components, Server Actions, Turbopack), React 19, TypeScript (strict)
- **SQLite** through `better-sqlite3` **v12** and **Drizzle ORM**
- **d3-geo** + `topojson-client` drawing an orthographic globe on `<canvas>`
- Plain CSS in `src/styles/`, imported in order by `src/app/globals.css` (no Tailwind, no CSS-in-JS); fonts through `next/font`
- ESLint 9 (flat config), Prettier, Husky + lint-staged pre-commit hook
- `zod` for validating input
- Hosting target: a single VPS (SQLite on a persistent disk), Caddy, Litestream backups to Cloudflare R2, Cloudflare proxy in front

## Commands

```bash
npm install
cp .env.example .env.local     # set ADMIN_PASSWORD and SESSION_SECRET (16+ characters)
npm run db:setup               # migrate and seed if empty (safe to rerun)
npm run dev                    # http://localhost:3000, admin at /admin
npm run check                  # typecheck + lint + format check
npm run lint:fix               # ESLint with autofix
npm run format                 # Prettier on everything
npm run build                  # needs the database: run db:setup first
npm run db:generate            # after editing src/db/schema.ts
npm run db:studio              # browse the database
```

Reset the database: delete `data/coldspot.db*`, then run `npm run db:setup`.

## Layout

Code is organised by feature. Routes in `src/app/` stay thin: they load data through a feature's `queries.ts` and render a feature's components. The layer rules and where new code goes are in "Folder structure" in `docs/CODING.md`, and ESLint enforces them.

```
src/app/                         routes only
  (map)/page.tsx                 the globe at / (static, revalidate 300s; reads data, renders ColdspotApp)
  (site)/case/[slug]/page.tsx    pre-rendered page per famous case (SEO)
  (site)/story/[slug]/page.tsx   pre-rendered page per approved story (SEO)
  admin/layout.tsx               admin shell (brand, sign out)
  admin/page.tsx                 review queue; checks isAdmin() itself
  layout.tsx not-found.tsx sitemap.ts robots.ts globals.css (imports src/styles/*)
src/features/
  map/                           the map screen (client)
    ColdspotApp.tsx              state and wiring between globe, header, card and sheets
    MapHeader.tsx TunerCard.tsx  header (actions, mode switch, chips); card under the ring
    parts.tsx                    ScrambleText, Freq, Ring, ZoomControls
    useGlobe.ts                  creates the GlobeEngine, deep links, ring layout, marker mapping
    useEchoes.ts useSound.ts     echo state; Radio and the sound toggle
    state.ts                     SheetState, EchoState
    sheets/                      Sheet (shell: focus, Esc) + CaseSheet, StorySheet, ListSheet, ShareSheet
  globe/                         framework-free canvas globe (no React, no Next)
    engine.ts                    GlobeEngine: public API, frame loop, input handling
    camera.ts input.ts motion.ts view and projection; pointer/keyboard; animations, momentum, snap
    draw.ts tuning.ts radio.ts   drawing; visibility, tune-in and hit testing; Web Audio
  stories/
    submit.ts                    "use server": submitStory
    echoes.ts                    "use server": toggleEcho, myEchoes
    validation.ts                zod schema, link/phone checks, blur(), firstSentence() (pure)
    queries.ts                   approved stories (server-only)
    StoryArticle.tsx             story body shared by the page and the sheet
  cases/
    queries.ts CaseArticle.tsx   famous cases; case file shared by the page and the sheet
  moderation/
    actions.ts                   "use server": approve, reject
    auth.ts                      "use server": login, logout
    queries.ts                   pending stories, counts (server-only)
    ReviewCard.tsx LoginForm.tsx
src/components/                  shared UI with no feature knowledge: brand.tsx, PageTop.tsx, article.tsx
src/db/
  schema.ts                      cases, stories, echoes
  client.ts                      SQLite connection (WAL, busy_timeout, foreign keys), dev-safe singleton
src/lib/                         shared, framework-free helpers
  categories.ts types.ts         category keys, labels, colours, status enums; CaseItem, StoryItem, MapItem
  format.ts geo.ts signal.ts     labels; formatCoords, haversineKm; observable for per-frame values
  server/env.ts                  environment variables, validated with zod
  server/security.ts             admin cookie (HMAC), IP hash, visitor id cookie
src/styles/                      tokens, base, map, tuner, sheets, reading, forms, article, admin
src/data/                        seed-cases.ts (real), seed-stories.ts (samples, is_sample = true)
scripts/setup.ts                 migrate and seed
drizzle/                         SQL migrations (generated, committed)
public/land-50m.json             coastlines only
```

## Rules

### Server and client boundary

- Files marked `"use client"` export components only. **Never export plain helper functions from a client file** and call them on the server. Server pages would get a client reference instead of the function. Put shared helpers in `src/lib/` or `src/components/brand.tsx`, which have no directive.
- Database access happens only in a feature's `queries.ts` (reads, `server-only`) and its `"use server"` files (writes). Routes and components get data through those, never from `@/db/*` directly.
- Pass plain, serialisable objects (`CaseItem`, `StoryItem`) to client components. Never pass raw rows containing `Date` objects or `ipHash`.

### Next.js 16

- `params`, `cookies()` and `headers()` are async: `await` them.
- Anything that changes public data must call `revalidatePath` for every page affected: `/`, `/story/[slug]`, `/sitemap.xml`. See `approve()` in `src/features/moderation/actions.ts`.
- `/admin` is `force-dynamic`. Public pages are static or ISR. Don't make `/` dynamic, for example by reading cookies or `searchParams` there. Deep links (`/?case=`, `/?story=`) are read on the client.
- Check the Next 16 docs before adding middleware or other request interception; APIs have changed between versions.

### Database

- Change the schema only in `src/db/schema.ts`, then run `npm run db:generate` and commit the new file in `drizzle/`. Never hand-edit applied migrations.
- SQLite allows one writer at a time. Keep writes short and synchronous (better-sqlite3 is sync); don't hold transactions across `await`.
- Keep `better-sqlite3` on **v12**. It installs a prebuilt binary. v13 compiles from source during `npm ci`, which breaks on machines without a C++ toolchain.
- The site must keep working without Supabase or any hosted database service. That's a deliberate choice.

### Privacy and safety (product rules, not style)

- **Never store exact locations** for people's stories. `submitStory` rounds to a ~5 km grid (`blur()`); keep it that way.
- IPs are stored only as a salted SHA-256 hash, and only for rate limiting.
- Submissions always start as `pending`. Nothing user-written reaches the public site without admin approval.
- Keep the existing submission checks: honeypot field, 3 per IP per 24 hours, no links, no phone numbers, length 80–6,000 characters. Add layers; don't remove them.
- Content rules shown to users: no real names, no exact addresses, nothing about crime, violence or anyone getting hurt, no selling remedies, rituals or charms.
- The map shows **coastlines only, no country borders**. Borders in common world datasets are politically sensitive in India. Don't add a basemap with borders without an explicit decision.
- Famous cases must present what was reported **and** the explanations offered, without taking a side. Don't write that a case is proven.

### Globe engine

- `GlobeEngine` is framework-free on purpose. React talks to it only through `setItems`, `flyTo`, `zoomBy`, `clearTune`, `center`, `resize` and its callbacks. Don't move per-frame state into React state; that re-renders at 60 fps.
- Coordinates in the tuner card go through a `Signal` and the `Freq` component, which writes to the DOM directly, so React doesn't re-render every frame.
- Respect `prefers-reduced-motion` for any new animation.
- Test dragging on a phone-width viewport (400px). The interaction has to feel instant on mid-range Android.

### UI and copy

- Colours and fonts come from the CSS variables in `src/styles/tokens.css`. Categories and their colours come from `src/lib/categories.ts`; don't hard-code them elsewhere.
- Fonts: Newsreader (serif, story text and titles) and IBM Plex Mono (UI labels).
- Write in plain English. The radio metaphor appears only in moments: "Between stations", tuning in, **echoes**. Everything else uses plain words: stories, cases, categories (Sky, Visitors, Creatures, Voices & sounds, Places).
- The tone is campfire, not jump scare: no gore, no horror clichés, no "ghost" or "haunted" branding.
- Every page must work at 400px wide with no horizontal scroll.
- Sample stories must stay visibly labelled "Sample story" until they're replaced.

## Before you finish a task

1. `npm run check` passes (typecheck, lint, format). No file over 150 lines (see `docs/CODING.md`).
2. `npm run build` passes (after `npm run db:setup`).
3. If you touched the map, sheets or forms: run `npm run dev` and check the flow at 400px and at desktop width. Check that famous and people modes switch, a story tunes in, a sheet opens and closes, and Esc closes it.
4. If you touched submissions or admin: submit a story, approve it at `/admin`, and confirm it shows on `/`, at `/story/<slug>` and in `/sitemap.xml`.
5. Don't commit `.env.local`, `data/*.db*` or `.next/`.

## Environment variables

Read them through `env` from `src/lib/server/env.ts`, never `process.env` directly (`NODE_ENV` is the one exception).

| Name                   | Purpose                                                                                   |
| ---------------------- | ----------------------------------------------------------------------------------------- |
| `DATABASE_PATH`        | SQLite file path. Default `data/coldspot.db`. Must be on a persistent disk in production. |
| `ADMIN_PASSWORD`       | Password for `/admin`. The value `change-me` is refused.                                  |
| `SESSION_SECRET`       | 16+ character secret. Signs the admin cookie and salts IP hashes.                         |
| `NEXT_PUBLIC_SITE_URL` | Canonical site URL for the sitemap and metadata                                           |
