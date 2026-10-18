# Deploying Coldspot

Coldspot runs on one small server: the Next.js app in Docker, Caddy in front of it (HTTPS once there's a domain) and, optionally, Litestream streaming the SQLite database to Cloudflare R2. The files are in `Dockerfile` and `deploy/`.

You run these steps yourself; they need access to your server and accounts. Allow about an hour the first time.

## 1. Create the server

- **Provider and region:** anywhere close to India. Good options are DigitalOcean (Bangalore) or Hetzner Cloud (Singapore).
- **Size:** 2 GB RAM, 1 vCPU, 25 GB disk or more. Building the site needs more memory than running it. With 1 GB, add swap (step 3).
- **Image:** Ubuntu 24.04 LTS.
- **Access:** add your SSH key when creating it.

Note the server's public IP address. The examples below use `203.0.113.10`.

## 2. Log in and lock it down

```bash
ssh root@203.0.113.10
apt update && apt upgrade -y
ufw allow OpenSSH && ufw allow 80 && ufw allow 443 && ufw --force enable
```

## 3. Add swap (recommended on 1–2 GB servers)

```bash
fallocate -l 2G /swapfile && chmod 600 /swapfile && mkswap /swapfile && swapon /swapfile
echo '/swapfile none swap sw 0 0' >> /etc/fstab
```

## 4. Install Docker

```bash
curl -fsSL https://get.docker.com | sh
docker compose version   # should print a version
```

## 5. Get the code

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

## 6. Configure

```bash
cd /opt/coldspot/deploy
cp .env.example .env
sed -i "s|^SESSION_SECRET=.*|SESSION_SECRET=$(openssl rand -hex 32)|" .env
nano .env
```

Set `SITE_URL=http://203.0.113.10` (your IP) and leave `SITE_ADDRESS=:80` for now.

## 7. Start it

```bash
docker compose up -d --build
docker compose logs -f app   # wait for "Ready", then Ctrl+C
```

Open `http://203.0.113.10` in a browser. The first build takes a few minutes.

## 8. Update the site

After pushing changes to `main` (including new or corrected cases in `src/data/seed-cases.ts`):

```bash
cd /opt/coldspot && git pull && cd deploy && docker compose up -d --build
```

On every start, the app migrates the database and syncs the famous cases from the seed file.

## 9. Backups to Cloudflare R2

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

## 10. Add a domain later

1. Buy the domain and add it to Cloudflare (free plan). Point an **A record** for the domain at the server IP, with the proxy **off** (grey cloud) for now.
2. In `deploy/.env`, set `SITE_ADDRESS=yourdomain.com` and `SITE_URL=https://yourdomain.com`.
3. Rebuild: `docker compose up -d --build`. Caddy fetches an HTTPS certificate automatically.
4. Once `https://yourdomain.com` works, turn the Cloudflare proxy **on** (orange cloud) and set **SSL/TLS → Full (strict)**.

`SITE_URL` is baked into the build, so always rebuild after changing it.

## 11. Monitoring

Add a free uptime check (for example UptimeRobot or Better Stack) on the site's address, so you hear about outages.

## Troubleshooting

- **Build stops with "Killed" or runs out of memory:** add swap (step 3) or use a 2 GB server.
- **Site doesn't load:** `docker compose ps` and `docker compose logs app caddy`. Check the firewall allows ports 80 and 443.
- **Changed `.env` but nothing happened:** run `docker compose up -d --build`, not just `restart`.
