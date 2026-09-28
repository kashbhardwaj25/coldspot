# Coldspot

_Something happened here._ A globe of famous unexplained cases and people's own strange encounters. Drag the map, and whatever reaches the ring tunes in.

**Stack:** Next.js 16 (App Router) · SQLite (better-sqlite3 + Drizzle ORM) · d3-geo on canvas. The admin panel lives inside the same app.

## Run it locally

You need **Node.js 22 LTS** (20.9 or newer works). Use `npm`; the SQLite driver downloads a prebuilt binary, so you don't need a C++ compiler.

```bash
npm install
cp .env.example .env.local      # then set ADMIN_PASSWORD and SESSION_SECRET
npm run db:setup                # creates data/coldspot.db and loads the seed data
npm run dev                     # http://localhost:3000
```

- Map: http://localhost:3000
- Review queue: http://localhost:3000/admin (password from `.env.local`)
- A case page: http://localhost:3000/case/roswell
- Deep link into the map: http://localhost:3000/?case=hessdalen or `/?story=<slug>`

To start from a clean database, delete `data/coldspot.db*` and run `npm run db:setup` again.

> If `npm install` fails while building `better-sqlite3`, you're probably on a Node version without a prebuilt binary. Switch to Node 22 or 24 LTS and run it again.

## Scripts

| Command                               | What it does                                                                                          |
| ------------------------------------- | ----------------------------------------------------------------------------------------------------- |
| `npm run dev`                         | Development server                                                                                    |
| `npm run build` / `npm start`         | Production build and server. Run `db:setup` first, because pages are pre-rendered from the database.  |
| `npm run db:setup`                    | Applies migrations and seeds empty tables. Safe to run repeatedly.                                    |
| `npm run db:generate`                 | After editing `src/db/schema.ts`, creates a new migration in `drizzle/`                               |
| `npm run db:studio`                   | Browse the database in Drizzle Studio                                                                 |
| `npm run typecheck`                   | TypeScript check                                                                                      |
| `npm run check`                       | Typecheck, lint and format check (run before committing; the pre-commit hook runs lint and typecheck) |
| `npm run lint:fix` / `npm run format` | ESLint autofix / Prettier                                                                             |

## How it fits together

Organised by feature. Routes stay thin; each feature owns its queries, server actions and components. The full map is in `AGENTS.md`, and the rules for where code goes are in `docs/CODING.md`.

```
src/
  app/                    Routes only
    (map)/page.tsx        The globe (cached, rebuilt every 5 min or on approval)
    (site)/case/[slug]/   Pre-rendered page per famous case (for search engines)
    (site)/story/[slug]/  Pre-rendered page per approved story
    admin/                Password-protected review queue
  features/
    map/                  The map screen: ColdspotApp, header, tuner card, sheets
    globe/                Framework-free canvas globe and Web Audio
    stories/              Submitting, echoes, queries, story article
    cases/                Queries and the case file
    moderation/           Review queue: approve, reject, sign in
  components/             Shared UI: logo, page header, article pieces
  db/                     Schema and SQLite connection (WAL mode)
  lib/                    Shared helpers; lib/server for env and security
  styles/                 CSS by area
  data/                   Seed data: 19 famous cases, 30 sample stories
drizzle/                  SQL migrations
public/land-50m.json      Coastlines (Natural Earth via world-atlas; no country borders)
```

### Submissions and moderation

1. People switch to **People's stories**, drag the ring to where it happened and tap **Share a story**.
2. `submitStory` validates the form and rejects links and phone numbers. It limits each IP (stored only as a salted hash) to 3 stories a day, ignores bots that fill a hidden honeypot field, and rounds the location to a ~5 km grid.
3. The story is saved as `pending`. You review it at `/admin`, where you can edit the place, region and opening line, then approve or reject it.
4. Approving it gives the story a slug, publishes it on the map, creates its page and adds it to the sitemap.

### Echoes

"Echo this" is stored once per visitor per story, using an anonymous cookie. Seeded samples start from `echo_seed`.

## Before launch

- [ ] Replace the 30 sample stories (`is_sample = 1`) with real seeded stories, or delete them.
- [ ] Check every famous case against a primary source (`src/data/seed-cases.ts`).
- [ ] Add Cloudflare Turnstile to the share form.
- [ ] Add an automatic moderation pass for violence, sexual content and hate (for example OpenAI's free moderation endpoint) before stories reach the queue.
- [ ] Add a report button and hide a story automatically after a set number of reports.
- [ ] Narration player and season pass (Razorpay on the web).
- [ ] Terms of use: story licensing with the submitter's consent, and a privacy policy.

## Deploying (when you're ready)

SQLite needs a persistent disk, so use a small VPS rather than serverless hosting:

- Any 1–2 GB VPS near India (for example Singapore or Bangalore), running Node or Docker.
- **Caddy** in front for automatic HTTPS.
- **Litestream** streaming the database to Cloudflare R2, for backups you can restore to the last few seconds.
- **Cloudflare** proxy in front, for caching the story pages and absorbing attacks.
- Set `DATABASE_PATH` to a path on the persistent disk, and `NEXT_PUBLIC_SITE_URL` to your domain.
