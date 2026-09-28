# Coldspot: task list

The work left before launch, in the order we plan to do it. Tick items off as they land. For product background, see `docs/CONTEXT.md`; for engineering rules, see `AGENTS.md`.

Narration and the season pass are deliberately left out for now (see [Later](#later)).

## 1. Fix what's already built

- [ ] Phone-number check rejects year ranges like "2003 - 2004". Tighten `PHONE_RE` in `src/features/stories/validation.ts`.
- [ ] Link check rejects typos like "night.In the morning" because `LINK_RE` is case-insensitive. Fix it in `src/features/stories/validation.ts`.
- [ ] Rate limit trusts `cf-connecting-ip` and `x-forwarded-for` as sent. Only read proxy headers when a `TRUST_PROXY` setting says to.
- [ ] Admin sessions: the cookie is a fixed HMAC, so logout and password changes don't revoke it. Add an expiry, tie the token to the password, and limit repeated login attempts.
- [ ] Echo copy says "within 50 km" and "echoes nearby", but echoes aren't location-based. Fix the wording in `features/map/sheets/StorySheet.tsx` and `features/map/TunerCard.tsx`.
- [ ] Admin can only see pending stories. Add a list of approved stories with an Unpublish action.
- [ ] Admin can edit place, region and opening line only. Also allow changing the category and fixing typos in the story text before approving.
- [ ] Sheets don't trap focus: Tab can leave an open sheet and reach the map behind it. Trap focus inside `Sheet`, or move to a native `<dialog>` with `showModal()`.
- [ ] No tests yet. Add Vitest for the pure logic first: `features/stories/validation.ts`, `lib/geo.ts` and `features/globe/tuning.ts`. Tests sit next to the file they test.

## 2. Safety and moderation

- [ ] Cloudflare Turnstile on the share form, verified on the server.
- [ ] Automatic moderation pass (violence, sexual content, hate) before a story reaches the queue. Flag stories; don't auto-reject.
- [ ] Report button on stories (new `src/features/reports/`): a `reports` table, automatic hiding after a set number of reports, and hidden stories shown in admin.
- [ ] Test the migration on a copy of the database before deploying.

## 3. Content

- [ ] Check all 19 famous cases against a primary source (`src/data/seed-cases.ts`). Consider a `sources` field shown on each case page.
- [ ] Collect 30–50 real stories with the writers' permission, and seed them.
- [ ] Remove the 30 sample stories (`is_sample = 1`) once real ones are in.

## 4. Product and user experience

### Regions

Jump to a region rather than filter the map: the globe already shows one region at a time, so the value is getting there fast. Regions are a list we write ourselves, with no border data, because country borders are politically sensitive in India.

- [ ] New feature folder `src/features/regions/`. `regions.ts`: Indian states and countries, each with a key, name, centre point and zoom level.
- [ ] Add a `regionKey` column to `stories` and `cases`, then run `npm run db:generate`. Keep the free-text `region` for display.
- [ ] Share form: a region dropdown, with "Other" as a fallback.
- [ ] Admin: confirm or correct the region when approving.
- [ ] Seed data: give every case and story a `regionKey`.
- [ ] "Go to region" picker: a searchable list behind a "Places" button (the chip row is full at 400px). Choosing a region flies the globe there, to the middle of its stories if it has any, and narrows the List view to that region.
- [ ] Region pages for search engines (`app/(site)/place/[region]`), such as "Strange encounters near Dehradun", added to the sitemap.

### Everything else

- [ ] Place the pin inside the share form, so people don't have to close it and drag the map.
- [ ] Share button and preview images for each story and case page.
- [ ] Search in the list view.
- [ ] Check every page at 400px wide and on a mid-range Android phone.

## 5. Legal

- [ ] Terms of use, including permission to use submitted stories and a revenue share if they're ever licensed.
- [ ] Privacy policy covering cookies, the IP hash, the blurred location, and how to ask for a story to be removed.
- [ ] Consent checkbox on the share form. Add `app/(site)/layout.tsx` with a footer linking to both documents, and pages at `app/(site)/terms` and `app/(site)/privacy`.

## 6. Launch setup

- [ ] Trademark and domain checks for "Coldspot" (India classes 9 and 41; .com, .app, .in; social handles).
- [ ] Deployment files: a Dockerfile or systemd service, a Caddyfile, and production environment variables.
- [ ] VPS near India, with the database on a persistent disk.
- [ ] Litestream backups to Cloudflare R2, with a restore that's actually been tested.
- [ ] Cloudflare proxy in front, with the server accepting only Cloudflare traffic (pairs with the `TRUST_PROXY` fix).
- [ ] Monitoring: an uptime monitor, error logging and privacy-friendly analytics (for example, self-hosted Umami).
- [ ] End-to-end check in production: submit a story, approve it, then see it on `/`, at `/story/<slug>` and in `/sitemap.xml`.

## 7. Launch

- [ ] Short screen recordings for Reels and Shorts: the static, a story tuning in, a flight across the globe.
- [ ] Posts in r/Paranormal, r/HighStrangeness, r/Thetruthishere and Indian city subreddits, and a Product Hunt launch.
- [ ] One-month check: if strangers aren't submitting stories on their own, focus on the famous cases and search pages.

## Later

- Narration player and season pass (Razorpay on the web)
- Trusted submitters who can publish without review after a few approved stories
- Android app (Capacitor)
