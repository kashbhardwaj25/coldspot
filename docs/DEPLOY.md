# Deploying Coldspot

The recommended setup is **Railway** for the app and **Cloudflare** for the domain, DNS and caching. Railway builds the `Dockerfile`, runs the site, and redeploys it automatically on every push to `main`. There is no server to maintain. It costs about $5 a month (check Railway's current pricing).

You run these steps yourself, because they need your accounts. Allow about 30 minutes.

While People's stories are switched off (`STORIES_ENABLED` in `src/lib/features.ts`), the site never writes to its database: it's rebuilt from `src/data/seed-cases.ts` on every start. So you don't need backups yet. Set them up before switching stories on (see "Before switching on People's stories" below).

## 1. Buy the domain on Cloudflare

1. Create a free Cloudflare account at cloudflare.com.
2. Go to **Domain Registration → Register Domains**, search for your name, and buy it. Cloudflare sells domains at cost and sets up DNS for you.
   - If you buy the domain somewhere else, add it to Cloudflare instead (**Add a domain**, free plan) and change the nameservers at your registrar to the two Cloudflare shows you. This can take a few hours to take effect.

## 2. Create the Railway project

1. Sign up at railway.com with your GitHub account, and choose the Hobby plan.
2. Click **New Project → Deploy from GitHub repo**, allow Railway to see the `coldspot` repository, and select it.
3. Railway finds `railway.json` and the `Dockerfile` and starts a first build. It's fine if this first one fails or runs without settings; you'll redeploy after the next step.

## 3. Add the settings

In the service, open **Variables** and add:

| Name                   | Value                                                                                       |
| ---------------------- | ------------------------------------------------------------------------------------------- |
| `NEXT_PUBLIC_SITE_URL` | `https://yourdomain.com` (your real domain, with `https://` and no trailing slash)          |
| `SESSION_SECRET`       | a long random string. On a Mac, run `openssl rand -hex 32` in Terminal and paste the result |

Then, in **Settings**:

- **Region:** choose the one closest to India (Singapore, if it's offered).
- **Volume:** right-click the service (or use the command palette) and **Attach volume**, with mount path `/data`. It isn't needed while stories are off, but it keeps the database across deploys once they're on.
- **Source:** check that the branch is `main`.

Click **Deploy** (or push any commit) so the build runs with the new settings. In **Deployments**, open the build logs: you should see `Synced … famous cases`, then `Ready`. Railway checks `/robots.txt` before switching traffic to the new version.

## 4. Connect the domain

1. In Railway, open **Settings → Networking → Public Networking** and click **Custom Domain**. Enter `yourdomain.com`. Railway shows you a **CNAME** record and a **TXT** record.
2. In Cloudflare, open your domain, go to **DNS → Records**, and add both records exactly as Railway shows them. For the domain itself, use `@` as the name; Cloudflare allows a CNAME there.
3. Repeat for `www.yourdomain.com` if you want it. The site redirects `www` to the main domain automatically.
4. Leave the CNAME as **Proxied** (orange cloud).
5. In Cloudflare, go to **SSL/TLS → Overview** and choose **Full**. Not "Full (strict)": Railway's documentation warns that strict mode can break when its certificates renew.
6. Under **SSL/TLS → Edge Certificates**, make sure **Universal SSL** and **Always Use HTTPS** are on.

Wait until Railway shows the domain as active (usually a few minutes), then open `https://yourdomain.com`.

The Railway address (`*.up.railway.app`) also serves the site, but redirects permanently to your domain, so search engines only ever see one address.

## 5. After launch

1. **Search engines:** add the domain to [Google Search Console](https://search.google.com/search-console) and [Bing Webmaster Tools](https://www.bing.com/webmasters). Verify it with the DNS record they give you (add it in Cloudflare), then submit `https://yourdomain.com/sitemap.xml`.
2. **Check the preview cards:** paste a case link into WhatsApp or X and check that the preview image appears.
3. **Uptime alerts:** add a free check (for example UptimeRobot or Better Stack) on `https://yourdomain.com`.

## Updating the site

Push to `main`, including new or corrected cases in `src/data/seed-cases.ts`. Railway rebuilds and deploys automatically, and the new cases are synced into the database when it starts.

If you change `NEXT_PUBLIC_SITE_URL`, redeploy: it's baked into the build.

## Before switching on People's stories

Once stories are on, the database holds data that exists nowhere else (submissions and echoes), so:

- Keep the `/data` volume attached, and set up backups. Railway offers volume backups in its dashboard; alternatively, run Litestream to Cloudflare R2 (see `deploy/litestream.yml` and the server setup below).
- Set `ADMIN_PASSWORD` in Railway's variables.
- Set up Google sign-in, which sharing and echoing need:
  1. In [Google Cloud Console](https://console.cloud.google.com/), create a project, then **APIs & Services → OAuth consent screen**: app name "Coldspot", your support email, and only the basic scopes (`openid`, `email`). These don't need Google's review. Publish the app ("In production") so anyone can sign in.
  2. **Credentials → Create credentials → OAuth client ID**, type "Web application". Add the authorised redirect URIs `https://yourdomain.com/api/auth/callback/google` and, for local testing, `http://localhost:3000/api/auth/callback/google`.
  3. Add `GOOGLE_CLIENT_ID` and `GOOGLE_CLIENT_SECRET` to Railway's variables (and to `.env.local` for local testing). Never commit the secret.
- Read the pre-launch items for stories in `docs/TASKS.md` (Turnstile, moderation, privacy policy).

## Troubleshooting

- **Build fails:** open the build logs in Railway's **Deployments** tab. A failed `npm install` or build will show the error there.
- **Deploy never goes live:** the health check (`/robots.txt`) didn't pass. Check the deploy logs for `Ready`, and that you haven't set a custom `PORT` variable.
- **"Too many redirects" or SSL errors:** set Cloudflare **SSL/TLS** to **Full** (not Flexible, not Full (strict)).
- **Pages show `localhost` in links or previews:** `NEXT_PUBLIC_SITE_URL` was missing when it built. Set it and redeploy.

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
ssh-keygen -t ed25519 -f ~/.ssh/coldspot -N ""
cat ~/.ssh/coldspot.pub
```

In GitHub, open the repository, go to **Settings → Deploy keys → Add deploy key**, paste the key and leave "Allow write access" off. Then:

```bash
printf 'Host github.com\n  IdentityFile ~/.ssh/coldspot\n' >> ~/.ssh/config
git clone git@github.com:kashbhardwaj25/coldspot.git /opt/coldspot
cd /opt/coldspot && git checkout main
```

### 6. Configure

```bash
cd /opt/coldspot/deploy
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
cd /opt/coldspot && git pull && cd deploy && docker compose up -d --build
```

On every start, the app migrates the database and syncs the famous cases from the seed file.

### 9. Backups to Cloudflare R2

1. In Cloudflare, go to **R2**, create a bucket (for example `coldspot-backups`).
2. Under **R2 → Manage API tokens**, create a token with **Object Read & Write** on that bucket. Note the access key ID, secret and the S3 endpoint (`https://<account-id>.r2.cloudflarestorage.com`).
3. Fill in the four `LITESTREAM_*` values in `deploy/.env`.
4. Start the app with backups:

```bash
docker compose --profile backup up -d --build
docker compose logs litestream   # look for "replicating"
```

**Test a restore** (do this once, before relying on it):

```bash
docker compose --profile backup run --rm litestream restore -o /data/restore-test.db /data/coldspot.db
docker compose exec app ls -la /data   # restore-test.db should be there
docker compose exec app rm /data/restore-test.db
```

To recover after losing the server: set up a new one (steps 1–6), then before starting the app, run the restore with `-o /data/coldspot.db`, then `docker compose --profile backup up -d --build`.

### Add the domain

1. In Cloudflare, point an **A record** for the domain at the server IP, with the proxy **off** (grey cloud) for now.
2. In `deploy/.env`, set `SITE_ADDRESS=yourdomain.com` and `SITE_URL=https://yourdomain.com`.
3. Rebuild: `docker compose up -d --build`. Caddy fetches an HTTPS certificate automatically.
4. Once `https://yourdomain.com` works, turn the Cloudflare proxy **on** (orange cloud) and set **SSL/TLS → Full (strict)**. Caddy's certificate is publicly trusted, so strict works here.

While `SITE_URL` is a bare IP address, the site asks search engines not to index it, so it isn't indexed twice.

### Troubleshooting

- **Build stops with "Killed" or runs out of memory:** add swap (step 3) or use a 2 GB server.
- **Site doesn't load:** `docker compose ps` and `docker compose logs app caddy`. Check the firewall allows ports 80 and 443.
- **Changed `.env` but nothing happened:** run `docker compose up -d --build`, not just `restart`.
