# Coldspot: task list

The work left, in the order we plan to do it. Tick items off as they land. For product background, see `docs/CONTEXT.md`; for engineering rules, see `AGENTS.md`.

**Goal:** every feature below is built before the deploy on Sunday 2026-10-25, with People's stories switched on (`STORIES_ENABLED` in `src/lib/features.ts`). If time runs short, regions (section 5) can slip; sections 1–3 can't. Narration was removed from the product; it and the season pass may come back later (see [Later](#later)).

Decisions behind this list:

- Every story is still reviewed by hand before it's published. Automatic approval was considered and rejected: the risky stories (real names, accusations) still need a human.
- Reading needs no account. Sharing a story needs Google sign-in. Stories stay anonymous in public: a pen name or "Anonymous", never the Google name or photo.

## 1. Accounts (Google sign-in)

- [x] Google Cloud OAuth client (yours, steps in `docs/DEPLOY.md`): consent screen with basic scopes, redirect URIs for `localhost:3000` and the domain. Client ID and secret go in `.env.local` and Railway, never in chat or git.
- [x] Better Auth with the Drizzle SQLite adapter, Google as the only provider. New `src/features/accounts/`. Add the auth variables to `lib/server/env.ts` and `.env.example`.
- [x] Store only the Google account ID and email. Add a `userId` to `stories` (and `echoes`), then run `npm run db:generate`.
- [x] Share flow: write first, sign in when submitting, and keep the draft through the sign-in redirect.
- [x] Pen name on the share form (optional, defaults to "Anonymous"), checked like the story text (no links, no phone numbers).
- [x] Submission limit per account (3 per 24 hours), keeping the IP limit as an extra layer.
- [x] "My stories" page: each story's status (pending, approved, rejected), and delete your own story or your whole account.
- [x] Echoes require sign-in: one echo per account.
- [x] Sign in in the map header (My stories once signed in), sign out on My stories, all behind `STORIES_ENABLED`.

## 2. Stories: security

- [x] Phone-number and link checks no longer reject year ranges and missing spaces.
- [x] IPs are read only from the header `TRUST_PROXY` names (`none`, `cloudflare`, `forwarded`); with `none`, IP limits are skipped.
- [x] Admin sessions are random tokens stored hashed, expiring after 7 days and ending on sign-out or a password change; 5 wrong passwords per 15 minutes.
- [x] Cloudflare Turnstile on the share form, verified on the server; skipped when the keys aren't set. (Yours: create the widget, steps in `docs/DEPLOY.md`.)

## 3. Admin

- [x] A list of approved stories with an Unpublish action (also needed for removal requests).
- [x] Edit the category and fix typos in the story text before approving, as well as place, region and opening line.
- [x] `approve()` in `features/moderation/actions.ts` reads form fields by hand. Validate with zod, with length limits, and run the link and phone checks on edits.
- [x] Keep a story's first slug, so re-approving with a different place doesn't change its URL.
- [x] Report button on stories (new `src/features/reports/`): a `reports` table, automatic hiding after a set number of reports, and hidden stories shown in admin.

## 4. Stories: polish

- [x] Echo copy says "within 50 km", "echoes nearby" and "people nearby can echo it", but echoes aren't location-based. Fix the wording in `features/map/sheets/StorySheet.tsx`, `features/map/TunerCard.tsx` and `features/map/sheets/ShareSheet.tsx`.
- [x] `toggleEcho` doesn't revalidate, so echo counts lag by up to 5 minutes on `/` and an hour on story pages. Revalidate the story page.
- [x] Place the pin inside the share form with a small map picker, so people don't have to close it and drag the globe.
- [x] Consent checkbox on the share form, linking to the terms.
- [x] The pin picker is blank inland (coastlines only, no borders). Done: famous cases as landmarks, a town search on "Town or area" (1,252 towns from Natural Earth plus hand-added ones) and "Use my location".

## 5. Regions

Coldspot is global: famous cases span 165 countries, and stories can come from anywhere. Regions are worked out from coordinates, not typed: one consistent system for every case and story, with no hand-tagging. The free-text `region` stays for display. The map still shows no borders; outlines are used only on the server to look regions up.

Decisions (2026-10-18):

- Two levels: every country, plus a state/province level where a state has 3+ items (today the US and India; others appear as content grows). The UK uses England, Scotland, Wales and Northern Ireland as its states. Cases at sea go under "At sea".
- Lookups follow India's point of view for disputed areas (Natural Earth's India edition), so Kashmir, Ladakh and Arunachal Pradesh are in India.
- On the map: a Places view inside the List sheet, not a new header button.
- Pages exist only for regions with 3+ items, so search engines never see near-empty pages.

Tasks:

- [x] `scripts/build-regions.ts`: download Natural Earth countries (India edition) and states, simplify them, and write a compact lookup file with each region's name, slug, centre and zoom.
- [x] `src/features/regions/`: `regionFor(lat, lon)` (server-only), region names and slugs, counts.
- [x] `countryKey` and `stateKey` columns on `cases` and `stories`; filled when cases are synced and when a story is submitted; backfilled by `db:setup`.
- [x] Pages: `/places` (every country with its count), `/places/[country]` and `/places/[country]/[state]`, with titles like "Unexplained encounters in Japan", in the sitemap and linked from case and story pages.
- [x] Places view in the List sheet: regions with counts for the current mode; tap to fly the globe there and narrow the list.
- [x] Share form: fill in "State and country" from the pin; admin sees the looked-up region when reviewing.

## 6. Site-wide

- [x] Privacy policy at `app/(site)/privacy`: Google sign-in (account ID and email only), cookies, the IP hash, the blurred location, analytics, and how to delete stories or your account.
- [x] Terms of use at `app/(site)/terms`, including permission to use submitted stories and a revenue share if they're ever licensed. Have them read by a lawyer if possible.
- [x] `app/(site)/layout.tsx` with a footer linking to both.
- [x] Share button on case and story pages.
- [x] Sheets don't trap focus: Tab can leave an open sheet and reach the map behind it. Trap focus inside `Sheet`, or move to a native `<dialog>` with `showModal()`.
- [x] Analytics: Cloudflare Web Analytics (no cookies), loaded only when `CF_ANALYTICS_TOKEN` is set.
- [ ] Have the privacy policy and terms read by a lawyer, and set `CONTACT_EMAIL` (shown on both pages).

### Done

- [x] SEO: a page per case, the `/cases` index, related cases, JSON-LD, Open Graph images, sitemap.
- [x] Search in the list view.
- [x] Lighter home page: the map gets case summaries; case text loads when opened.

## 7. Code upkeep

- [x] Split the two biggest files: `engine.ts` (markers moved to `scene.ts`) and `ColdspotApp.tsx` (`MapStage`, `MapData`, place actions in `useMapActions`).
- [x] Tests for `lib/geo.ts`, `features/globe/tuning.ts` and the admin login limiter.
- [ ] Tests for the story, echo and report limits: they touch the database, so they need a test database setup (checked end to end in the browser so far).

## 8. Content (yours)

- [ ] Collect 30–50 real stories with the writers' permission, and seed them.
- [ ] Remove the 30 sample stories (`is_sample = 1`) once real ones are in.
- [ ] Check every famous case against a primary source (`src/data/seed-cases.ts`), featured cases first. Consider a `sources` field shown on each case page.

## 9. Deploy on Sunday (guide in `docs/DEPLOY.md`)

- [x] Dockerfile, `railway.json`, and redirects from the Railway address and `www` to the domain.
- [ ] Buy the domain on Cloudflare.
- [ ] Railway project from GitHub, in a region near India, with a volume at `/data`.
- [ ] Variables: `NEXT_PUBLIC_SITE_URL`, `SESSION_SECRET`, `ADMIN_PASSWORD` and the Google sign-in keys. Connect the domain; Cloudflare SSL/TLS set to **Full**. Add the domain's redirect URI to the Google OAuth client.
- [ ] Backups of the `/data` volume (Railway backups, or Litestream to R2), with a restore that's actually been tested.
- [ ] Test migrations on a copy of the database before deploying.
- [ ] End-to-end check in production: sign in, submit a story, approve it, then see it on `/`, at `/story/<slug>` and in `/sitemap.xml`.
- [ ] Check every page at 400px wide and on a mid-range Android phone.
- [ ] Submit the sitemap to Google Search Console and Bing Webmaster Tools; add an uptime monitor.

## 10. After launch

- [ ] Trademark and domain checks for "Coldspot" (India classes 9 and 41; .com, .app, .in; social handles).
- [ ] Short screen recordings for Reels and Shorts: the static, a story tuning in, a flight across the globe.
- [ ] Posts in r/Paranormal, r/HighStrangeness, r/Thetruthishere and Indian city subreddits, and a Product Hunt launch.
- [ ] One-month check: if strangers aren't submitting stories on their own, focus on the famous cases and search pages.

## Later

- Emailed sign-in link, if people ask for a way in without Google
- Optional AI pre-check that flags pending stories for the reviewer (never publishes on its own)
- Narration player and season pass (Razorpay on the web)
- Trusted submitters who can publish without review after a few approved stories
- Android app (Capacitor)
