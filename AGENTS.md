# AGENTS.md

Instructions for AI coding agents (Claude Code and others) working in this repo. For what Coldspot is and why, read `docs/CONTEXT.md` first. Code style, tooling and React/Next/accessibility practices are in `docs/CODING.md`; the work left to do is in `docs/TASKS.md`.

## Project in one paragraph

Coldspot is a website with a Radio Garden-style globe of unexplained encounters. Drag the map, and whatever reaches the centre ring "tunes in". It has two modes: **Famous cases** (real, curated incidents) and **People's stories** (user submissions, reviewed before publishing). It's built by one developer alongside a day job, so prefer simple, low-maintenance solutions over clever ones.

## Stack

- **Next.js 16** (App Router, Server Components, Server Actions, Turbopack), React 19, TypeScript (strict)
- **SQLite** through `better-sqlite3` **v12** and **Drizzle ORM**
- **d3-geo** + `topojson-client` drawing an orthographic globe on `<canvas>`
- Plain CSS in `src/styles/`, imported in order by `src/app/globals.css` (no Tailwind, no CSS-in-JS); fonts through `next/font`
- **Base UI** (`@base-ui/react`): unstyled, accessible components (Drawer for sheets, Field, Select, Toggle, AlertDialog), styled with our own CSS and tokens
- ESLint 9 (flat config), Prettier, Husky + lint-staged pre-commit hook
- `zod` for validating input
- **Better Auth** for Google sign-in (sharing and echoing need an account; reading doesn't), stored in the same SQLite database
- Hosting: Railway (the `Dockerfile`, SQLite on a volume) behind the Cloudflare proxy; a VPS with Caddy and Litestream backups to R2 is the documented alternative (`docs/DEPLOY.md`)

## Commands

```bash
npm install
cp .env.example .env.local     # set ADMIN_PASSWORD and SESSION_SECRET (16+ characters)
npm run db:setup               # migrate and seed if empty (safe to rerun)
npm run dev                    # http://localhost:3000, admin at /admin
npm run check                  # typecheck + lint + format check + tests
npm test                       # Vitest (src/**/*.test.ts)
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
  (map)/page.tsx                 the globe at / (static, revalidate 300s; sends case summaries, renders ColdspotApp)
  api/cases/[slug]/route.ts      a case file's full text as JSON, pre-built per case; fetched when a case is opened on the map
  api/auth/[...all]/route.ts     Better Auth: Google sign-in, sign-out, session
  (site)/my-stories/page.tsx     your own stories and their review status; delete them or your account (dynamic, noindex)
  (site)/places/...              /places, /places/[country], /places/[country]/[state]: regions with 3+ items
  (site)/privacy, (site)/terms   the privacy policy and terms of use (content in features/legal)
  (site)/layout.tsx              the footer on every page outside the map
  (site)/case/[slug]/page.tsx    pre-rendered page per famous case (SEO)
  (site)/story/[slug]/page.tsx   pre-rendered page per approved story (SEO)
  admin/layout.tsx               admin shell (brand, sign out)
  admin/page.tsx                 stories by status (?tab=): waiting, published, hidden by reports, rejected; checks isAdmin() itself
  layout.tsx not-found.tsx sitemap.ts robots.ts globals.css (imports src/styles/*)
src/features/
  map/                           the map screen (client)
    ColdspotApp.tsx MapStage.tsx state and wiring between globe, header, card and sheets; the canvases and ring
    MapHeader.tsx TunerCard.tsx  header (actions, mode switch, chips); card under the ring
    parts.tsx                    ScrambleText, Freq, Ring, ZoomControls
    useGlobe.ts                  creates the GlobeEngine, deep links, ring layout, marker mapping
    useEchoes.ts useSound.ts     echo state; Radio and the sound toggle
    useCaseFile.ts search.ts     load a case file on open (prefetched on tune-in); list search
    towns.ts                     town search for the share form: loads public/towns.json on first use, ranks matches
    useMapActions.ts             switch modes, fly to items, open the share form (and reopen it after sign-in)
    state.ts                     SheetState, EchoState
    sheets/                      Sheet (Base UI Drawer: focus trap, Esc, swipe) + CaseSheet, StorySheet, ListSheet, ShareSheet, ShareFields, TownField (Base UI Autocomplete), PinPicker (a second GlobeEngine, famous cases as landmarks, no snapping)
  globe/                         framework-free canvas globe (no React, no Next)
    engine.ts                    GlobeEngine: public API, frame loop, input handling
    scene.ts                     the markers: items, declutter, visibility, tuning, drawing them each frame
    camera.ts input.ts motion.ts view and projection; pointer/keyboard; animations, momentum, snap
    draw.ts tuning.ts radio.ts   drawing; visibility, tune-in and hit testing; Web Audio
    declutter.ts labels.ts       hide crowded low-priority markers by zoom; non-overlapping labels
    land.ts                      loads the coastlines once for every globe on the page
  stories/
    submit.ts                    "use server": submitStory
    echoes.ts                    "use server": toggleEcho, myEchoes
    validation.ts                zod schema, link/phone checks, blur(), firstSentence() (pure)
    draft.ts                     keeps a half-written story in localStorage while the writer signs in
    spamCheck.ts Turnstile.tsx   Turnstile: server verification (server-only); the widget on the share form
    queries.ts                   approved stories (server-only)
    StoryArticle.tsx             story body shared by the page and the sheet
  accounts/
    auth.ts                      Better Auth instance (Google only), created lazily; strips everything but id and email
    session.ts                   currentUser() for server code (server-only)
    client.ts                    browser auth client, useSignedIn(), signInWithGoogle()
    actions.ts                   "use server": deleteMyStory, deleteMyAccount, signOut
    queries.ts                   the signed-in person's stories (server-only)
    AccountButton.tsx MyStories.tsx SignInButton.tsx
  regions/
    lookup.ts geometry.ts        regionFor(lat, lon) and regionLabel from src/data/regions.json (server and setup only)
    places.ts                    buildPlaces (pure): countries and busy states with counts; MIN_PER_PLACE = 3
    queries.ts metadata.ts       places for pages, the map and the sitemap (server-only)
    PlacesIndex.tsx PlaceArticle.tsx
  legal/
    PrivacyPolicy.tsx TermsOfUse.tsx Legal.tsx   the two policies, written to match what the code does
  cases/
    queries.ts CaseArticle.tsx   famous cases; case file shared by the page and the sheet
  moderation/
    actions.ts                   "use server": approve (with edits), reject, unpublish, restore, remove, requeue
    auth.ts                      "use server": login (rate limited), logout
    session.ts attempts.ts       isAdmin() and admin sessions (server-only); failed-login limiter (pure)
    validation.ts                review edits (zod) and slugify (pure)
    queries.ts                   AdminStory lists by status, counts (server-only, no IP hash or account id)
    ReviewCard.tsx StoryRows.tsx AdminTabs.tsx StoryMeta.tsx LoginForm.tsx
  reports/
    actions.ts                   "use server": reportStory (sign-in, one per account, 3 reports hide a story)
    ReportButton.tsx             report dialog (Base UI Dialog + RadioGroup), on the story page and sheet
src/components/                  shared UI with no feature knowledge: brand.tsx, PageTop.tsx, article.tsx, SiteFooter.tsx
  ui/                            Base UI wrappers: TextField/TextArea, SelectField, ConfirmButton, IconButton (SVG icons, never text glyphs), ShareButton
src/db/
  schema.ts                      cases, stories, echoes, reports, admin_sessions; users, sessions, accounts, verifications (Better Auth)
  client.ts                      SQLite connection (WAL, busy_timeout, foreign keys), dev-safe singleton
src/lib/                         shared, framework-free helpers
  categories.ts types.ts         category keys, labels, colours, status enums; CaseItem, StoryItem, MapItem
  features.ts                    STORIES_ENABLED: people's stories are off for the first release
  format.ts geo.ts signal.ts     labels; formatCoords, haversineKm; observable for per-frame values
  proxy.ts                       which proxy header to trust for the visitor's IP (TRUST_PROXY)
  server/env.ts                  environment variables, validated with zod
  server/security.ts             IP hash, keyed hashes, constant-time compare
src/styles/                      tokens, base, map, tuner, sheets, reading, forms, controls, article, account, admin
src/data/                        seed-cases.ts (real), seed-stories.ts (samples, is_sample = true), towns-extra.ts (hand-added towns)
scripts/setup.ts                 migrate and seed
scripts/build-towns.ts           rebuilds public/towns.json from Natural Earth (public domain) plus towns-extra.ts
scripts/build-regions.ts         rebuilds src/data/regions.json (country and state outlines, India's view) from Natural Earth
Dockerfile deploy/               production image; Docker Compose with Caddy and Litestream (see docs/DEPLOY.md)
drizzle/                         SQL migrations (generated, committed)
public/land-50m.json             coastlines only
public/towns.json                towns for the share form's search (generated; don't edit by hand)
```

## Rules

### Server and client boundary

- Files marked `"use client"` export components only. **Never export plain helper functions from a client file** and call them on the server. Server pages would get a client reference instead of the function. Put shared helpers in `src/lib/` or `src/components/brand.tsx`, which have no directive.
- Database access happens only in a feature's `queries.ts` (reads, `server-only`) and its `"use server"` files (writes). Routes and components get data through those, never from `@/db/*` directly.
- Pass plain, serialisable objects (`CaseSummary`, `CaseItem`, `StoryItem`) to client components. Never pass raw rows containing `Date` objects or `ipHash`.
- The map gets `CaseSummary` (no case text) from `getCaseSummaries()`, to keep the home page small. A case's full text (`CaseDetail`) is fetched from `/api/cases/[slug]` when it's opened. Don't send full case text to the map again.

### Next.js 16

- `params`, `cookies()` and `headers()` are async: `await` them.
- Anything that changes public data must call `revalidatePath` for every page affected: `/`, `/story/[slug]`, `/sitemap.xml`. Use `revalidateStory()` from `features/stories/revalidate.ts`.
- `/admin` is `force-dynamic`. Public pages are static or ISR. Don't make `/` dynamic, for example by reading cookies or `searchParams` there. Deep links (`/?case=`, `/?story=`) are read on the client.
- Check the Next 16 docs before adding middleware or other request interception; APIs have changed between versions.

### Database

- Change the schema only in `src/db/schema.ts`, then run `npm run db:generate` and commit the new file in `drizzle/`. Never hand-edit applied migrations.
- SQLite allows one writer at a time. Keep writes short and synchronous (better-sqlite3 is sync); don't hold transactions across `await`.
- Keep `better-sqlite3` on **v12**. It installs a prebuilt binary. v13 compiles from source during `npm ci`, which breaks on machines without a C++ toolchain.
- The site must keep working without Supabase or any hosted database service. That's a deliberate choice.

### People's stories switch

- `STORIES_ENABLED` in `src/lib/features.ts` is `true`. Set to `false`, story queries return nothing, story pages, `/my-stories`, `/admin` and `/api/auth` are 404, the story and account server actions refuse requests, and the map hides the mode switch, the sign-in button and the share and "stories near here" buttons. Keep all of these behind the flag when touching stories, so switching it off stays a one-line change.

### Privacy and safety (product rules, not style)

- **Never store exact locations** for people's stories. `submitStory` rounds to a ~5 km grid (`blur()`); keep it that way.
- IPs are stored only as a salted SHA-256 hash, and only for rate limiting. Read the IP only through `ipHash()`, which trusts just the header named by `TRUST_PROXY`; never read `x-forwarded-for` or similar directly, since visitors can forge them.
- Admin sessions are random tokens stored hashed in `admin_sessions` (`features/moderation/session.ts`). They expire after 7 days and end on sign-out or when `ADMIN_PASSWORD` changes. Sign-in allows 5 wrong passwords per 15 minutes.
- **Accounts keep only the Google account id and the email address.** Google sign-in requests only `openid email`; `features/accounts/auth.ts` drops OAuth tokens and stores no IP address or user agent on sessions. Don't add the `profile` scope or store more without a decision.
- Stories are anonymous in public: a pen name or "Anonymous". Never send an email address or `userId` to a public page or the map.
- Sharing a story and echoing need sign-in; reading never does. One echo per account per story.
- Deleting an account deletes its stories and echoes (`deleteMyAccount`). Keep that working; it's how people exercise their right to delete their data.
- Submissions always start as `pending`. Nothing user-written reaches the public site without admin approval. Story statuses: `pending`, `approved`, `rejected`, and `hidden` (published, then hidden automatically after 3 reports from different accounts until an admin restores or removes it).
- A story keeps the first slug it's given, so its URL never changes when it's edited or re-approved.
- Admin edits go through the same link and phone checks as submissions (`blockedContent`).
- Keep the existing submission checks: sign-in, the consent checkbox, Turnstile (when configured), honeypot field, 3 per account and 3 per IP per 24 hours, no links (also in the pen name), no phone numbers, length 80–6,000 characters. Add layers; don't remove them.
- Content rules shown to users: no real names, no exact addresses, nothing about crime, violence or anyone getting hurt, no selling remedies, rituals or charms.
- The town list leaves out places that Natural Earth files under another country in disputed areas (`DISPUTED_ADM1` in `scripts/build-towns.ts`), and Indian places show their Indian state.
- Regions are looked up from coordinates (`regionFor`), never typed: countries follow Natural Earth's India edition, so Kashmir, Ladakh and Arunachal Pradesh are in India. The outlines in `src/data/regions.json` are for server-side lookups only; never draw them or send them to the browser.
- The map shows **coastlines only, no country borders**. Borders in common world datasets are politically sensitive in India. Don't add a basemap with borders without an explicit decision.
- Famous cases must present what was reported **and** the explanations offered, without taking a side. Don't write that a case is proven.
- The privacy policy (`features/legal/PrivacyPolicy.tsx`) describes exactly what's collected. If you change what's stored, sent to a third party or kept in cookies, update it and its date in the same change.

### Globe engine

- `GlobeEngine` is framework-free on purpose. React talks to it only through `setItems`, `pin`, `flyTo`, `zoomBy`, `clearTune`, `center`, `resize` and its callbacks. The `snap` option (on by default) glides to a nearby marker at rest; the pin picker turns it off. Don't move per-frame state into React state; that re-renders at 60 fps.
- Coordinates in the tuner card go through a `Signal` and the `Freq` component, which writes to the DOM directly, so React doesn't re-render every frame.
- Where markers crowd, lower-priority ones are hidden until you zoom in (`declutter.ts`). Featured cases (`featured` in `seed-cases.ts`) show first. Call `pin(key)` before `flyTo` when jumping to a specific item, so it's never hidden.
- Respect `prefers-reduced-motion` for any new animation.
- Test dragging on a phone-width viewport (400px). The interaction has to feel instant on mid-range Android.

### UI and copy

- For form fields, dropdowns, toggles, dialogs and sheets, use Base UI (through `src/components/ui/` where a wrapper exists) rather than hand-rolling focus and keyboard handling. Style them with classes and the `data-*` state attributes Base UI sets. Don't add Material UI or another styled library: they bring CSS-in-JS and a lot of JavaScript to every page.
- Global class names collide easily (`.hint`, `.open` have both bitten us). Check `grep` before adding a short class name.
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
4. If you touched submissions, accounts or admin: sign in, submit a story, approve it at `/admin`, and confirm it shows on `/`, at `/story/<slug>` and in `/sitemap.xml`. Without Google keys locally, insert a test user and session row and sign the `better-auth.session_token` cookie with `SESSION_SECRET` (HMAC-SHA256, base64, `token.signature`).
5. Don't commit `.env.local`, `data/*.db*` or `.next/`.

## Environment variables

Read them through `env` from `src/lib/server/env.ts`, never `process.env` directly (`NODE_ENV` is the one exception).

| Name                             | Purpose                                                                                                        |
| -------------------------------- | -------------------------------------------------------------------------------------------------------------- |
| `DATABASE_PATH`                  | SQLite file path. Default `data/coldspot.db`. Must be on a persistent disk in production.                      |
| `ADMIN_PASSWORD`                 | Password for `/admin`. The value `change-me` is refused.                                                       |
| `SESSION_SECRET`                 | 16+ character secret. Signs sign-in sessions; salts IP and admin-session hashes.                               |
| `GOOGLE_CLIENT_ID`               | Google OAuth client for sign-in (Google Cloud Console)                                                         |
| `GOOGLE_CLIENT_SECRET`           | Its secret. Never commit it or paste it anywhere public.                                                       |
| `TRUST_PROXY`                    | `none` (default), `cloudflare` or `forwarded`: which proxy header the visitor IP is read from (`lib/proxy.ts`) |
| `NEXT_PUBLIC_TURNSTILE_SITE_KEY` | Turnstile site key (public, needed at build time). Without both keys the check is skipped                      |
| `TURNSTILE_SECRET_KEY`           | Turnstile secret, checked on the server in `submitStory`                                                       |
| `CONTACT_EMAIL`                  | Shown on the privacy and terms pages for questions and removal requests                                        |
| `CF_ANALYTICS_TOKEN`             | Cloudflare Web Analytics (no cookies). Without it, no analytics script loads                                   |
| `NEXT_PUBLIC_SITE_URL`           | Canonical site URL for the sitemap and metadata                                                                |
