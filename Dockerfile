# Uncanny Map: one image that builds the site and serves it with `next start`.
# Pages are pre-rendered from the database at build time, so the build runs against a freshly seeded copy.
# At runtime the live database lives on a volume at /data and is migrated and synced on every start.
FROM node:22-bookworm-slim

WORKDIR /app
# Skip git hooks (Husky) inside the image.
ENV HUSKY=0 NEXT_TELEMETRY_DISABLED=1

COPY package.json package-lock.json ./
# `npm install` rather than `npm ci`: npm on macOS leaves out some Linux-only optional packages from the
# lockfile, which `npm ci` rejects. `npm install` keeps the locked versions and adds what Linux needs.
RUN npm install --no-audit --no-fund

COPY . .

# Baked into the client bundle, so it must be known at build time. Pass your real URL as a build arg.
ARG NEXT_PUBLIC_SITE_URL=http://localhost:3000
ENV NEXT_PUBLIC_SITE_URL=$NEXT_PUBLIC_SITE_URL
# The home page is pre-rendered, so the Turnstile site key (public) must be known at build time too.
ARG NEXT_PUBLIC_TURNSTILE_SITE_KEY=
ENV NEXT_PUBLIC_TURNSTILE_SITE_KEY=$NEXT_PUBLIC_TURNSTILE_SITE_KEY
# Also read by pre-rendered pages: the contact address on /privacy and /terms, and the analytics script.
# Neither is secret. Railway passes service variables to the build only when they're declared as ARGs.
ARG CONTACT_EMAIL=
ARG CF_ANALYTICS_TOKEN=
ENV CONTACT_EMAIL=$CONTACT_EMAIL CF_ANALYTICS_TOKEN=$CF_ANALYTICS_TOKEN

RUN DATABASE_PATH=/tmp/build.db npm run db:setup && DATABASE_PATH=/tmp/build.db npm run build && rm -f /tmp/build.db*

ENV NODE_ENV=production DATABASE_PATH=/data/uncanny-map.db PORT=3000
EXPOSE 3000
# Migrate and sync the famous cases into the live database, then serve.
CMD ["sh", "-c", "npm run db:setup && npm start"]
