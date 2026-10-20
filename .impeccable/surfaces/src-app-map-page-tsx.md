---
version: 1
slug: "src-app-map-page-tsx"
primary_target: "src/app/(map)/page.tsx"
related_targets: ["src/app/(site)/case/[slug]/page.tsx","src/app/admin/page.tsx"]
---

# Map screen (/) and the site it sets the world for

Mode: Experience (the globe is the work). Reading pages (/case, /story, /places, legal) are Read; /admin and /my-stories are Operate; all three inherit this world in a quieter way.

Audience and job: night-time readers on mid-range Android phones who drag, tune in and read. Constraints: the user pinned the eyeball logo, the category colours, Newsreader + IBM Plex Mono and a dark ground. Ruled out: sci-fi HUD, generic app, precious/literary. Product rules in PRODUCT.md and AGENTS.md (coastlines only, 400px, reduced motion, React Compiler, 150-line files).

## Direction contract

THESIS: The globe is a glow-in-the-dark ceiling after lights-out. Stories are phosphor marks: the one in the ring is fully charged, and the ones you swept past keep a fading afterglow, so the globe remembers where you've looked. It refuses the Radio Garden clone (frosted glass panels, pill buttons, a boxed card) and the neon HUD (glowing edges, scanlines, coloured shadows on chrome).

OWN-WORLD: Matte night (#0d0b14), like a dark bedroom; unlit controls are flat dark plastic (a flat fill, a 1px hairline, no blur, no drop-shadow glow). One emitted light, phosphor (#cdf3d4, pale green-white), plus the pinned category pigments, which are dim when uncharged and bright when charged. Only emitters glow: markers, the ring, the tuned title and focus. Panels, buttons and body text never glow. Newsreader for titles and reading; Plex Mono labels on one scale (one size, one tracking, case by role). Status is shown by form as well as colour (solid, dashed, struck).

STORY: Visitors understand within seconds that dragging tunes in stories, believe the map is calm and even-handed rather than a scare site, and read: tap the glowing title, and the case file opens on a matte sheet.

FIRST VIEWPORT: Top-left, the eyeball and UNCANNY MAP, faintly phosphor; beneath it the mode switch and category chips as unlit text controls. Top-right, Sign in / Sound / Random / List as unlit mono buttons. The globe fills about 88% of the height, centred slightly high, with a thin phosphor ring at its centre. Below the ring there's no card box: the tuned title in Newsreader (44px desktop, 30px phone) glows phosphor, with a mono meta line (place · coordinates · category · year) and a "Read" action. Between stations, the title area goes unlit.

FORM: Glow Ceiling (glow stars on a childhood ceiling, radium dials), my top-ranked grounded candidate (#1 of 7), chosen by the user as the pick card. seed:40c21dbe95b411aa. Signature interaction: phosphor charge and afterglow decay on markers and the title; with reduced motion, static charged and uncharged states.

FINISH: unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, DESIGN.md, and every shipping raster carrying its provenance

## Unresolved

- Whether the afterglow trail survives a mode switch (default: cleared).
