# Coldspot: product context

_Something happened here._

This is the background for anyone, human or AI, working on Coldspot. It covers what the product is, who it's for, the decisions made so far and why. For engineering rules, see `AGENTS.md`.

## What it is

Coldspot is a website with a globe of unexplained encounters: UFOs and strange lights, visitors and figures, cryptids, voices, and places where something repeats. The interface borrows from **Radio Garden**. You drag the globe, and whatever lands inside the centre ring "tunes in" with a burst of static. The story's first line appears, and you tap it to read the rest.

The name comes from the paranormal term _cold spot_, a patch of air where something is supposed to be present. It works as a map too: "find the cold spots near you."

## Two modes

|               | Famous cases                                                                  | People's stories                                           |
| ------------- | ----------------------------------------------------------------------------- | ---------------------------------------------------------- |
| Content       | Real, widely reported incidents, curated by us                                | Encounters submitted by people, reviewed before publishing |
| Opens on      | A zoomed-out globe centred on Kutch                                           | India, zoomed in                                           |
| Markers       | Diamonds, with labels when zoomed in                                          | Round dots; narrated stories have an outer ring            |
| Card          | Title, place, date, status (Unexplained, Disputed, Explained)                 | Place, year, time, witnesses, echoes                       |
| Detail        | Case file: what was reported, explanations offered, fields, link to Wikipedia | Story, fields, echo button, narration slot                 |
| Accent colour | Bone (#E6DCC6)                                                                | Ice (#A9DCEB)                                              |

Each case file has a "People's stories near here" button that switches modes and flies to that spot. That's how the two halves send people to each other.

**Famous cases rule:** present what witnesses reported **and** the explanations offered, without taking a side. Some cases are marked Explained (Magnetic Hill, for example). Being even-handed like this is what makes people trust the unexplained ones.

## Who it's for

- People who love unexplained stories: readers of r/Paranormal and r/HighStrangeness, and listeners of story podcasts. Mostly 18–34.
- India first, but English-only, so it can reach a global audience from day one.
- Built for mobile first. Most Indian users are on mid-range Android phones.

## Vocabulary

| Term             | Meaning                                                                         |
| ---------------- | ------------------------------------------------------------------------------- |
| Tune in          | A story reaches the ring and appears in the card                                |
| Between stations | Nothing in the ring                                                             |
| Echo             | "I've seen something similar." A per-story count and a signal of engagement     |
| Case file        | The detail view of a famous case                                                |
| Sample story     | A placeholder story written for the prototype. Must be labelled until replaced. |

Categories: **Sky, Visitors, Creatures, Voices & sounds, Places.**

Everything outside those moments uses plain English, so first-time users never have to decode clever labels.

## Brand

- **Name:** Coldspot. Wordmark in capitals: COLDSPOT.
- **Tagline:** Something happened here.
- **Logo:** concentric rings, like a cold patch on a thermal camera.
- **Tone:** campfire, not jump scare. It's eerie, calm and literate, with no gore and no red-and-black horror styling. That's what sets it apart from ghost-detector apps.
- **Palette:** deep violet night (#110E18), ink (#ECE5D6), ice (#A9DCEB) for the brand, bone (#E6DCC6) for famous cases, ember (#E9B45E) for narration. Category colours are sky #86BCE8, visitors #C5A2EE, creatures #92C99A, voices #E9B45E and places #E3836A.
- **Type:** Newsreader for story text and titles, IBM Plex Mono for interface labels.

## Content and safety rules

For people's stories:

- No real names of living people and no exact addresses. Pins are blurred to about 5 km.
- Nothing about crime, murder, violence or anyone getting hurt.
- No selling remedies, rituals, charms or stones.
- No witchcraft accusations against real people. In India these can cause real harm.
- Every submission is reviewed before it's published.

Spam protection, in layers:

- **Built:** honeypot field, 3 posts per IP per day, and link and phone-number blocking.
- **Planned:** Cloudflare Turnstile, an automatic moderation API, a report button with automatic hiding, and trusted submitters who can publish directly after a few approved stories.

## Competition

- **Enigma Labs:** a UFO sighting map with user reports. US-focused, around 59K sightings.
- **HauntMap:** haunted places in the UK and US. Free, with user submissions.
- Smaller apps: Haunted Places Near Me, Cryptid Coordinates, The Haunted Map Project.

None of them combine all categories, stories rather than database entries, the tuning interface, an India-first focus and audio narration. Their existence shows there's demand for this kind of product.

## Making money (realistic)

In order of how likely it is to work:

1. **Season pass for narrated stories.** A one-time ₹99–199 in India, about $3.99 abroad. Sell it on the web through Razorpay (about 2% fee) rather than the Play Store (about 15%).
2. **Display ads** on story and case pages that come from search. Never on the map screen.
3. **Sponsorships** from horror film and OTT releases, once usage is worth showing.
4. **Licensing stories** to podcasts or productions, only with the submitter's consent and a revenue share. This needs a clause in the terms of use.

Honest expectation for year one: most likely ₹0–2,000 a month; a good outcome is ₹15,000–40,000 a month. Distribution is the hard part.

## Growth plan

1. **Search traffic:** every case and story is its own page. People already search for "Chir Batti", "Jatinga birds" and "Magnetic Hill Ladakh", and pages for places ("strange encounters near Dehradun") add up over time.
2. **Short screen recordings** of the app for Reels and Shorts: the static, a story tuning in, a flight across the globe.
3. **Communities:** r/Paranormal, r/HighStrangeness, r/Glitch_in_the_Matrix, r/Thetruthishere and Indian city subreddits. The framing is "I built a map for these, add yours", not an ad.
4. **Launch coverage:** the pitch is "Radio Garden for the unexplained", aimed at Product Hunt, tech blogs and design newsletters.

**First test:** launch with the famous cases plus 30–50 seeded stories, and share it in a few places. If strangers aren't submitting stories on their own after a month, focus on the famous cases and search pages.

## Technical direction

- Website first; the Android app (Capacitor) comes later.
- Next.js with SQLite, our own backend under our control, and the admin panel inside the Next.js app. Supabase was considered and rejected in favour of full control.
- Hosting: a small VPS (about $5–7 a month) near India, with Caddy, Litestream backups to R2, and the Cloudflare proxy in front. Narration audio will live on R2 later.
- Coastlines only on the map, no country borders.

## Decisions log

| Date       | Decision                                                                                       |
| ---------- | ---------------------------------------------------------------------------------------------- |
| 2026-09-27 | Build a crowd-sourced map of unexplained encounters (UFOs, visitors, cryptids, voices, places) |
| 2026-09-27 | Radio Garden-style interface: drag the globe, tune in at the ring                              |
| 2026-09-27 | English only (no Hinglish)                                                                     |
| 2026-09-27 | Two modes: Famous cases and People's stories                                                   |
| 2026-09-27 | Echoes replace "I've heard this too"                                                           |
| 2026-09-27 | No YouTube channel tie-in; the product stands on its own                                       |
| 2026-09-28 | Name: Coldspot (was Otherwave). Tagline: "Something happened here."                            |
| 2026-09-28 | Website first, app later                                                                       |
| 2026-09-28 | Stack: Next.js + SQLite, own backend, admin inside the app                                     |

## Open questions

- How narration gets made: recorded ourselves, voice artists paid per story, or AI voices
- Pricing and exactly what the season pass includes
- Trademark and domain checks for "Coldspot" (India classes 9 and 41; .com, .app, .in and social handles)
- A way to place the pin inside the share form, instead of closing it and dragging the map
- When to replace the sample stories with real seeded ones

## Before launch

- [ ] Replace sample stories, or seed real ones with permission
- [ ] Check every famous case against a primary source
- [ ] Turnstile and automatic moderation on submissions
- [ ] Report button
- [ ] Terms of use (including story licensing) and a privacy policy
- [ ] Domain, deploy, Litestream backups and an uptime monitor
- [ ] Narration player and season pass
