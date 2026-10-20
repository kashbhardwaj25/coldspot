# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

People who love unexplained stories: readers of r/Paranormal and r/HighStrangeness and listeners of story podcasts, mostly 18–34. India first, English only, reachable globally from day one. Mostly on mid-range Android phones, often browsing at night, arriving from search ("Chir Batti", "Jatinga birds"), short videos or community posts.

Secondary: people who have had an encounter and want to share it (signed in with Google, anonymous in public), and one admin who reviews every submission by hand.

## Product Purpose

Uncanny Map is a globe of unexplained encounters (UFOs and strange lights, visitors and figures, cryptids, voices, places where something repeats), each placed where it happened. Tagline: "Something happened here." Success: visitors linger, read, come back from search, and eventually strangers share their own stories without prompting.

## Positioning

Radio Garden for the unexplained. You drag the globe and whatever reaches the centre ring "tunes in" with a burst of static. No competitor (Enigma Labs, HauntMap and the like) combines every category, stories rather than database rows, the tuning interface, and an India-first focus.

## Operating Context

Two modes:

- **Famous cases**: real, widely reported incidents curated by the team. Each case file presents what was reported **and** the explanations offered, without taking a side; statuses are Unexplained, Disputed and Explained.
- **People's stories**: user submissions, reviewed by hand before publishing, shown under a pen name or "Anonymous", with echoes ("I've seen something similar").

Each case links to "People's stories near here", so the two halves send people to each other. Every case and story also has its own page for search traffic, plus place pages (/places) for regions with 3+ items.

## Capabilities and Constraints

- Next.js 16, React 19 with the React Compiler, plain CSS in `src/styles/` (no Tailwind, no CSS-in-JS), Base UI for accessible primitives, fonts through `next/font`. Canvas globe through d3-geo, framework-free.
- The map shows **coastlines only, no country borders** (politically sensitive in India).
- Must feel instant when dragging on mid-range Android; every page works at 400px with no horizontal scroll.
- Respect `prefers-reduced-motion` everywhere, canvas included.
- Vocabulary: tune in, between stations, echo, case file, sample story. Categories: Sky, Visitors, Creatures, Voices & sounds, Places. Everything else in plain English.
- Sample stories stay visibly labelled "Sample story" until replaced.
- Launch deploy planned for 2026-10-25.

## Brand Commitments

- Name: Uncanny Map; wordmark UNCANNY MAP; domain uncannymap.com; tagline "Something happened here."
- Logo: an eyeball that turns to follow the pointer (holds still with reduced motion).
- Tone: campfire, not jump scare. Eerie, calm, literate. No gore, no horror clichés, no red-and-black horror styling, no "ghost" or "haunted" branding.
- The radio metaphor appears only in moments (tuning in, between stations, echoes).

## Evidence on Hand

- ~500 famous cases in `src/data/seed-cases.ts`, across 165 countries, with real sources and Wikipedia links.
- Sample stories in `src/data/seed-stories.ts` (placeholders, labelled).
- No testimonials, press, user counts or partnerships exist; never invent them.

## Product Principles

1. Even-handed: show what was reported and what explains it; trust comes from not taking a side.
2. Wonder over fear: invite people to linger, not startle them.
3. The globe is the product; everything else serves getting into and out of a story.
4. Privacy by default: blurred locations, anonymous in public, minimal account data.
5. Simple to run: one developer, low maintenance, no hosted services the site depends on.

## Accessibility & Inclusion

`jsx-a11y` recommended rules enforced; everything on the globe works from the keyboard; focus-trapped sheets; reduced motion respected; contrast checked on the dark background.
