# Deploying Uncanny Map

Uncanny Map runs on **Railway** (the app, built from the `Dockerfile`, with SQLite on a volume), behind **Cloudflare** (domain, DNS, HTTPS, caching and spam checks). **GitHub Actions** checks every change, and Railway deploys `main` only after those checks pass, so merging a pull request into `main` is how you release.

It costs about $5 a month for Railway plus the domain (about $10 a year for a `.com`). Allow about an hour the first time. You run these steps yourself because they need your accounts.

## Checklist

The short version. Each step links to the details below.

1. **Buy `uncannymap.com`** in Cloudflare: Domain Registration → Register Domains. ([1](#1-buy-the-domain))
2. **Get the keys** ([2](#2-get-the-keys-ready)):
   - `SESSION_SECRET` (`openssl rand -hex 32`) and `ADMIN_PASSWORD` (a long password of your own).
   - **Google:** add the redirect URI `https://uncannymap.com/api/auth/callback/google`, create a new client secret, and click **Publish app**.
   - **Turnstile:** add a widget for `uncannymap.com` in **Managed** mode.
   - Optional: a Cloudflare Web Analytics token. Also `CONTACT_EMAIL`, the address for removal requests.
3. **Merge to `main`:** open a pull request into `main`, wait for **check** to go green, merge. Then protect `main` (Settings → Branches): require a pull request and the **check** status. ([3](#3-turn-on-the-checks-in-github), [7](#7-release-now-and-from-now-on))
4. **Railway** ([4](#4-create-the-railway-service)):
   - New Project → Deploy from GitHub repo → `coldspot`.
   - In Settings: branch `main`, **Wait for CI** on, and the region nearest India.
   - **Attach a volume at `/data`.** Without it, every deploy wipes the stories and accounts.
   - In Variables: everything from step 2, plus `NEXT_PUBLIC_SITE_URL=https://uncannymap.com` and `TRUST_PROXY=cloudflare`.
5. **Domain** ([5](#5-connect-the-domain)):
   - Railway: Custom Domain → `uncannymap.com`.
   - Cloudflare DNS: add the CNAME and TXT records Railway shows, with the proxy on.
   - SSL/TLS: **Full**, and **Always Use HTTPS** on.
6. **Backups:** turn on the volume's scheduled backups, make one by hand, and practise a restore once. ([6](#6-backups))
7. **First run in production** ([8](#8-after-the-first-deploy)):
   - Sign in, share a story, approve it at `/admin`, and see it on the map, its story page, its `/places` page and the sitemap.
   - Submit `https://uncannymap.com/sitemap.xml` to Google Search Console and Bing.
   - Add an uptime check on `/robots.txt`.

From then on, every merge into `main` deploys automatically once CI passes.

## 1. Buy the domain

1. Create a free account at cloudflare.com.
2. Go to **Domain Registration → Register Domains**, search for the name, and buy it. Cloudflare sells domains at cost, renews at the same price, and sets up DNS for you.
   - Bought it elsewhere? In Cloudflare choose **Add a domain** (free plan) and change the nameservers at your registrar to the two Cloudflare gives you. That can take a few hours.

## 2. Get the keys ready

Have these values to hand; step 4 puts them into Railway.

| Setting                                                  | Where it comes from                                                                                                                                                                                                                                                   |
| -------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `NEXT_PUBLIC_SITE_URL`                                   | `https://uncannymap.com`, no trailing slash                                                                                                                                                                                                                           |
| `SESSION_SECRET`                                         | run `openssl rand -hex 32`                                                                                                                                                                                                                                            |
| `ADMIN_PASSWORD`                                         | a long password of your own for `/admin`                                                                                                                                                                                                                              |
| `GOOGLE_CLIENT_ID`, `GOOGLE_CLIENT_SECRET`               | Google Cloud Console → Google Auth Platform → Clients → Uncanny Map web. Add the redirect URI `https://uncannymap.com/api/auth/callback/google`. Create a new secret if the old one was ever shared. Under **Audience**, click **Publish app** so anyone can sign in. |
| `NEXT_PUBLIC_TURNSTILE_SITE_KEY`, `TURNSTILE_SECRET_KEY` | Cloudflare → **Turnstile → Add widget**: name "Uncanny Map", hostname `uncannymap.com`, mode **Managed**                                                                                                                                                              |
| `CF_ANALYTICS_TOKEN` (optional)                          | Cloudflare → **Analytics & Logs → Web Analytics → Add a site**; copy the token from the snippet                                                                                                                                                                       |
| `CONTACT_EMAIL`                                          | the address for questions and removal requests, shown on `/privacy` and `/terms`                                                                                                                                                                                      |
| `TRUST_PROXY`                                            | `cloudflare`                                                                                                                                                                                                                                                          |

## 3. Turn on the checks in GitHub

The workflow is already in `.github/workflows/ci.yml`. It runs the typecheck, lint, formatting, tests and a production build on every pull request and every push to `main`.

1. Merge the current work into `main` (step 7 shows how), so the workflow runs once and GitHub knows its name.
2. In the repository, go to **Settings → Branches → Add branch ruleset** (or **Add rule**) for `main`:
   - **Require a pull request before merging**.
   - **Require status checks to pass**, and pick **check** (the CI job).
   - Optional: **Block force pushes**.

From then on, nothing reaches `main` unless the checks pass.

## 4. Create the Railway service

1. Sign up at railway.com with GitHub and choose the Hobby plan.
2. **New Project → Deploy from GitHub repo** → pick `coldspot`. Railway finds `railway.json` and the `Dockerfile`.
3. In the service, open **Settings**:
   - **Source → Branch:** `main`.
   - **Source → Wait for CI:** on. Railway then deploys a commit only after GitHub's checks pass on it.
   - **Region:** the one closest to India (Singapore, if offered).
4. **Add a volume:** right-click the service (or ⌘K → "Volume") → **Attach volume**, mount path **`/data`**. This holds the database: stories, accounts, echoes. Without it, every deploy starts empty.
5. Open **Variables** and add every setting from step 2. Railway passes them to the build too, which matters for `NEXT_PUBLIC_SITE_URL`, `NEXT_PUBLIC_TURNSTILE_SITE_KEY`, `CONTACT_EMAIL` and `CF_ANALYTICS_TOKEN`, because some pages are built ahead of time.
6. **Deploy.** In **Deployments → View logs**, look for `Synced 500 famous cases`, then `Ready`. Railway checks `/robots.txt` before sending traffic to the new version.

## 5. Connect the domain

1. Railway: **Settings → Networking → Custom Domain** → enter `uncannymap.com`. It shows a **CNAME** and a **TXT** record.
2. Cloudflare: **DNS → Records** → add both exactly as shown (name `@` for the root domain). Keep the CNAME **Proxied** (orange cloud).
3. Optional: repeat for `www.uncannymap.com`; the app redirects `www` to the main domain.
4. Cloudflare: **SSL/TLS → Overview → Full** (not Flexible, not Full (strict)). Then **SSL/TLS → Edge Certificates**: turn on **Always Use HTTPS**.

When Railway shows the domain as active (usually a few minutes), open `https://uncannymap.com`. The `*.up.railway.app` address redirects to your domain, so search engines only ever see one address.

## 6. Backups

1. Railway: open the volume → **Backups** → turn on scheduled backups (daily is plenty).
2. Make one manual backup, then practise a restore once so you know it works.

Once real stories arrive, the database holds things that exist nowhere else. Litestream to Cloudflare R2 (see the server setup below) is a sturdier off-site option to add later.

## 7. Release, now and from now on

1. Open a pull request from your branch into `main` on GitHub (**Pull requests → New pull request**).
2. Wait for the **check** to go green, then **Merge**.
3. Railway sees the new commit on `main`, waits for CI, builds and deploys. Watch it under **Deployments**. If a build or the health check fails, the previous version keeps running.

Changing a setting in Railway redeploys too. Settings used by pre-built pages (`NEXT_PUBLIC_*`, `CONTACT_EMAIL`, `CF_ANALYTICS_TOKEN`) only take effect after a rebuild, which a redeploy does.

## 8. After the first deploy

1. **Check it end to end:** sign in with Google, share a story, approve it at `/admin`, and see it on the map, at `/story/<slug>`, on its `/places` page and in `/sitemap.xml`. Then delete it from My stories.
2. **Search engines:** add the domain to [Google Search Console](https://search.google.com/search-console) and [Bing Webmaster Tools](https://www.bing.com/webmasters) (verify with the DNS record they give you, added in Cloudflare), then submit `https://uncannymap.com/sitemap.xml`.
3. **Uptime alerts:** a free check (UptimeRobot or Better Stack) on `https://uncannymap.com/robots.txt`.
4. **Previews:** paste a case link into WhatsApp and check the image shows.

## Troubleshooting

- **CI fails:** open the failed run under the repository's **Actions** tab; it runs the same `npm run check` and `npm run build` as your machine.
- **Railway doesn't deploy after a merge:** check **Wait for CI** found the checks (they must have run on that commit) and that the branch is `main`.
- **Deploy never goes live:** the health check (`/robots.txt`) failed. Read the deploy logs for an error before `Ready`. Don't set `PORT` yourself.
- **"Too many redirects" or SSL errors:** Cloudflare **SSL/TLS** must be **Full**.
- **Google sign-in says redirect_uri_mismatch:** the redirect URI in Google Cloud must be exactly `https://uncannymap.com/api/auth/callback/google`.
- **Links or previews show `localhost`:** `NEXT_PUBLIC_SITE_URL` was missing at build time. Set it and redeploy.
- **Stories vanished after a deploy:** the volume isn't mounted at `/data`.

---

## Alternative: your own server

If you'd rather run a small server yourself (about $4–6 a month, more upkeep), use Docker Compose with Caddy and Litestream. The files are in `deploy/`.

### 1. Create the server

- **Provider and region:** anywhere close to India. Good options are DigitalOcean (Bangalore) or Hetzner Cloud (Singapore).
- **Size:** 2 GB RAM, 1 vCPU, 25 GB disk or more. Building the site needs more memory than running it. With 1 GB, add swap (step 3).
- **Image:** Ubuntu 24.04 LTS.
- **Access:** add your SSH key when creating it.

Note the server's public IP address. The examples below use `203.0.113.10`.

### 2. Log in and lock it down

```bash
ssh root@203.0.113.10
apt update && apt upgrade -y
ufw allow OpenSSH && ufw allow 80 && ufw allow 443 && ufw --force enable
```

### 3. Add swap (recommended on 1–2 GB servers)

```bash
fallocate -l 2G /swapfile && chmod 600 /swapfile && mkswap /swapfile && swapon /swapfile
echo '/swapfile none swap sw 0 0' >> /etc/fstab
```

### 4. Install Docker

```bash
curl -fsSL https://get.docker.com | sh
docker compose version   # should print a version
```

### 5. Get the code

The repository is private, so give the server a read-only deploy key:

```bash
ssh-keygen -t ed25519 -f ~/.ssh/uncanny-map -N ""
cat ~/.ssh/uncanny-map.pub
```

In GitHub, open the repository, go to **Settings → Deploy keys → Add deploy key**, paste the key and leave "Allow write access" off. Then:

```bash
printf 'Host github.com\n  IdentityFile ~/.ssh/uncanny-map\n' >> ~/.ssh/config
git clone git@github.com:kashbhardwaj25/coldspot.git /opt/uncanny-map
cd /opt/uncanny-map && git checkout main
```

### 6. Configure

```bash
cd /opt/uncanny-map/deploy
cp .env.example .env
sed -i "s|^SESSION_SECRET=.*|SESSION_SECRET=$(openssl rand -hex 32)|" .env
nano .env
```

Set `SITE_URL=http://203.0.113.10` (your IP) and leave `SITE_ADDRESS=:80` for now.

### 7. Start it

```bash
docker compose up -d --build
docker compose logs -f app   # wait for "Ready", then Ctrl+C
```

Open `http://203.0.113.10` in a browser. The first build takes a few minutes.

### 8. Update the site

After pushing changes to `main` (including new or corrected cases in `src/data/seed-cases.ts`):

```bash
cd /opt/uncanny-map && git pull && cd deploy && docker compose up -d --build
```

On every start, the app migrates the database and syncs the famous cases from the seed file.

### 9. Backups to Cloudflare R2

1. In Cloudflare, go to **R2**, create a bucket (for example `uncanny-map-backups`).
2. Under **R2 → Manage API tokens**, create a token with **Object Read & Write** on that bucket. Note the access key ID, secret and the S3 endpoint (`https://<account-id>.r2.cloudflarestorage.com`).
3. Fill in the four `LITESTREAM_*` values in `deploy/.env`.
4. Start the app with backups:

```bash
docker compose --profile backup up -d --build
docker compose logs litestream   # look for "replicating"
```

**Test a restore** (do this once, before relying on it):

```bash
docker compose --profile backup run --rm litestream restore -o /data/restore-test.db /data/uncanny-map.db
docker compose exec app ls -la /data   # restore-test.db should be there
docker compose exec app rm /data/restore-test.db
```

To recover after losing the server: set up a new one (steps 1–6), then before starting the app, run the restore with `-o /data/uncanny-map.db`, then `docker compose --profile backup up -d --build`.

### Add the domain

1. In Cloudflare, point an **A record** for the domain at the server IP, with the proxy **off** (grey cloud) for now.
2. In `deploy/.env`, set `SITE_ADDRESS=uncannymap.com` and `SITE_URL=https://uncannymap.com`.
3. Rebuild: `docker compose up -d --build`. Caddy fetches an HTTPS certificate automatically.
4. Once `https://uncannymap.com` works, turn the Cloudflare proxy **on** (orange cloud) and set **SSL/TLS → Full (strict)**. Caddy's certificate is publicly trusted, so strict works here.

While `SITE_URL` is a bare IP address, the site asks search engines not to index it, so it isn't indexed twice.

### Troubleshooting

- **Build stops with "Killed" or runs out of memory:** add swap (step 3) or use a 2 GB server.
- **Site doesn't load:** `docker compose ps` and `docker compose logs app caddy`. Check the firewall allows ports 80 and 443.
- **Changed `.env` but nothing happened:** run `docker compose up -d --build`, not just `restart`.
