---
name: Uncanny Map
description: Something happened here. A glow-in-the-dark globe of unexplained encounters.
colors:
  night: "#0d0b14"
  night-2: "#15121d"
  ink: "#e8e5dc"
  ink-2: "#aca8b6"
  muted: "#8a8597"
  phosphor: "#cdf3d4"
  phosphor-dim: "rgba(205, 243, 212, 0.42)"
  line: "rgba(232, 229, 220, 0.11)"
  line-strong: "rgba(232, 229, 220, 0.28)"
  field: "rgba(232, 229, 220, 0.035)"
  plate: "rgba(13, 11, 20, 0.86)"
  highlight: "rgba(232, 229, 220, 0.07)"
  status-open: "#c5a2ee"
  status-disputed: "#e9b45e"
  status-explained: "#92c99a"
  danger: "#e3836a"
  category-sky: "#86BCE8"
  category-visitors: "#C5A2EE"
  category-creatures: "#92C99A"
  category-voices: "#E9B45E"
  category-places: "#E3836A"
typography:
  display:
    fontFamily: "Newsreader, Iowan Old Style, Georgia, serif"
    fontSize: "clamp(29px, 3.4vw, 44px)"
    fontWeight: 400
    lineHeight: 1.08
    letterSpacing: "-0.01em"
  headline:
    fontFamily: "Newsreader, Iowan Old Style, Georgia, serif"
    fontSize: "clamp(34px, 6vw, 52px)"
    fontWeight: 400
    lineHeight: 1.08
    letterSpacing: "-0.01em"
  title:
    fontFamily: "Newsreader, Iowan Old Style, Georgia, serif"
    fontSize: "32px"
    fontWeight: 400
    lineHeight: 1.08
    letterSpacing: "-0.01em"
  quote:
    fontFamily: "Newsreader, Iowan Old Style, Georgia, serif"
    fontSize: "22px"
    fontWeight: 400
    lineHeight: 1.4
  body:
    fontFamily: "Newsreader, Iowan Old Style, Georgia, serif"
    fontSize: "17px"
    fontWeight: 400
    lineHeight: 1.6
  control:
    fontFamily: "IBM Plex Mono, ui-monospace, Menlo, monospace"
    fontSize: "12px"
    fontWeight: 400
    letterSpacing: "0.03em"
  label:
    fontFamily: "IBM Plex Mono, ui-monospace, Menlo, monospace"
    fontSize: "10.5px"
    fontWeight: 400
    letterSpacing: "0.14em"
  wordmark:
    fontFamily: "Newsreader, Iowan Old Style, Georgia, serif"
    fontSize: "20px"
    fontWeight: 500
    lineHeight: 1
    letterSpacing: "0.13em"
  wordmark-tagline:
    fontFamily: "Newsreader, Iowan Old Style, Georgia, serif"
    fontSize: "14px"
    fontWeight: 400
    lineHeight: 1
rounded:
  mark: "1px"
  pill: "4px"
  inner: "5px"
  base: "8px"
  sheet: "14px"
spacing:
  gutter-phone: "16px"
  gutter-wide: "28px"
  sheet-pad: "18px"
  stack: "22px"
components:
  button:
    backgroundColor: "{colors.plate}"
    textColor: "{colors.ink-2}"
    typography: "{typography.control}"
    rounded: "{rounded.base}"
    padding: "0 12px"
    height: "34px"
  button-hover:
    textColor: "{colors.ink}"
  button-pressed:
    textColor: "{colors.phosphor}"
  button-primary:
    backgroundColor: "{colors.night-2}"
    textColor: "{colors.phosphor}"
    typography: "{typography.control}"
    rounded: "{rounded.base}"
    padding: "0 12px"
    height: "34px"
  icon-button:
    backgroundColor: "{colors.plate}"
    textColor: "{colors.ink-2}"
    rounded: "{rounded.base}"
    size: "34px"
  input:
    backgroundColor: "{colors.field}"
    textColor: "{colors.ink}"
    typography: "{typography.body}"
    rounded: "{rounded.base}"
    padding: "10px 12px"
  status-pill:
    textColor: "{colors.status-open}"
    typography: "{typography.label}"
    rounded: "{rounded.pill}"
    padding: "0 8px"
    height: "22px"
  sheet:
    backgroundColor: "{colors.night-2}"
    textColor: "{colors.ink}"
    rounded: "{rounded.sheet}"
    padding: "{spacing.sheet-pad}"
  tuned-title:
    textColor: "{colors.phosphor}"
    typography: "{typography.display}"
  wordmark:
    textColor: "{colors.phosphor}"
    typography: "{typography.wordmark}"
  wordmark-tagline:
    textColor: "{colors.ink-2}"
    typography: "{typography.wordmark-tagline}"
  mode-switch:
    backgroundColor: "{colors.plate}"
    rounded: "{rounded.base}"
    padding: "3px"
  mode-switch-segment:
    textColor: "{colors.muted}"
    typography: "{typography.control}"
    rounded: "{rounded.inner}"
    padding: "0 14px"
    height: "32px"
  mode-switch-segment-active:
    backgroundColor: "{colors.highlight}"
    textColor: "{colors.phosphor}"
  chip:
    backgroundColor: "{colors.plate}"
    textColor: "{colors.ink}"
    typography: "{typography.control}"
    rounded: "{rounded.base}"
    padding: "0 12px 0 11px"
    height: "30px"
  chip-hidden:
    textColor: "{colors.muted}"
---

# Design System: Uncanny Map

## Overview

**Creative North Star: "Glow Ceiling"**

The globe is a glow-in-the-dark ceiling after lights-out. The room is matte night; the stories are phosphor marks on it. The one in the ring is fully charged, the ones you swept past keep a fading afterglow, so the globe remembers where you have looked. Everything a hand touches (buttons, sheets, fields) is unlit plastic: a flat dark fill and a hairline, never blurred, never glowing.

Light is the scarce resource and the whole hierarchy is built on it. Emitters are few and named: the tuned title, the ring, charged markers, keyboard focus, and two small lamps on the header's controls (the chosen mode's indicator light and the category chips' pigment dots, which are the markers' own pigment). Everything else is lit only by contrast with the dark. The reading surfaces (case and story pages, sheets) are the same room with the lamp off: Newsreader on night, mono labels on one scale, status shown by the form of a rule as well as its colour.

The world refuses two neighbours by construction: the Radio Garden clone (frosted panels, pill buttons, a boxed tuner card) and the neon HUD (glowing edges, scanlines, coloured shadows on chrome). It is calm and even-handed, campfire rather than jump scare.

**Key Characteristics:**

- One emitted light, phosphor, plus the pinned category pigments on the globe.
- Only emitters glow: tuned title, ring, charged markers, focus, the mode indicator light and the chip dots.
- Controls are unlit plastic: flat plate, 1px hairline, no blur, no lit fill.
- Newsreader for anything read; IBM Plex Mono for interface, on one label scale and one control size.
- Case status by form and colour: solid, dashed, dotted.
- The pointer-following eyeball is the logo, spanning a two-line lockup: the name in phosphor serif capitals without glow, an italic line beneath.

## Colors

A matte violet-black room, warm off-white ink, and a single pale green-white phosphor; colour pigments appear only where they mean something (category, status).

### Primary

- **Phosphor** (#cdf3d4): the one emitted light. The tuned title, the ring, the wordmark and eyeball, the chosen mode, pressed and primary control text, checked states, focus outlines, links in prose. Its faded form (**Phosphor Dim**, 42%) underlines the Read action, rings pressed buttons and colours the drag hint; at 14% it traces the globe rim and the focus halo.

### Secondary

- **Category pigments** (pinned, from `src/lib/categories.ts`): Sky (#86BCE8), Visitors (#C5A2EE), Creatures (#92C99A), Voices & sounds (#E9B45E), Places (#E3836A). They mark markers, chip dots (lit, as emitters), chip rims (at 40%, full on hover), list-row dots and the category tag. On the globe they are dim (42% alpha) uncharged and full with a radial halo when charged.

### Tertiary

- **Status colours**: Unexplained in violet (#c5a2ee), Disputed in ember (#e9b45e), Explained in green (#92c99a). Always paired with a border form (see Shapes). **Danger** (#e3836a) is reserved for destructive buttons, with a 38% rule.

### Neutral

- **Night** (#0d0b14): the room. Page ground, the globe's surroundings, the picker well.
- **Night 2** (#15121d): unlit plastic. Sheets, dialogs, select popups, the primary button, field-grid cells.
- **Plate** (night at 86%): controls floating over the globe. Flat, never blurred.
- **Ink** (#e8e5dc): primary text and hovered control text.
- **Ink 2** (#aca8b6): body prose, resting control text, the idle title.
- **Muted** (#8a8597): labels, meta lines, counts, placeholders.
- **Line** (ink at 11%) and **Line Strong** (ink at 28%): every hairline; Line Strong is the hover state and the dashed rim of a hidden chip. **Field** (ink at 3.5%) fills inputs.
- **Highlight** (ink at 7%): the raised segment of the mode switch and the highlighted option in select popups. A faint wash, not a light.

On the canvas, the globe is matte: ocean #16131f to #0b0a10, land #1c1926, a 3.5% ink grid, and coastlines in 20% phosphor like glow paint. Coastlines only; no borders.

### Named Rules

**The Single Emitter Rule.** Phosphor is the only light the interface emits. New accents are pigments (category, status), never a second glow colour.

**The Pinned Pigments Rule.** Category colours come only from `src/lib/categories.ts` and canvas/preview copies of the palette only from `src/lib/tokens.ts`, kept in sync with `tokens.css` by `tokens.test.ts`. No hex or `rgba()` outside `tokens.css` in CSS.

## Typography

**Display Font:** Newsreader (with Iowan Old Style, Georgia)
**Body Font:** Newsreader
**Label/Mono Font:** IBM Plex Mono (with ui-monospace, SF Mono, Menlo)

**Character:** A literate serif for everything a person reads, set against a quiet monospace for everything a person operates. The serif carries the story; the mono never competes with it.

### Hierarchy

- **Display** (400, clamp(29px, 3.4vw, 44px), 1.08): the tuned title under the ring, phosphor with emission, two lines at most, balanced.
- **Headline** (400, clamp(34px, 6vw, 52px), 1.08): case and story page titles, phosphor, no glow.
- **Title** (400, 32px, 1.08): sheet titles; dialog titles drop to 21px weight 500.
- **Quote** (400 italic, 22px, 1.4): the opening line of a case or story, the moment it first speaks.
- **Body** (400, 17px, 1.6, max 62ch): case and story prose in Ink 2. The tuned first line is 16-19px at 1.4, max 52ch. Fields and list-row titles use the serif at 16px.
- **Control** (400, 12px, 0.03em): button text, chips, meta lines, hints, footers, field values in the case grid.
- **Label** (400-500, 10.5px, 0.14em, uppercase): field labels, section headings in case files, status pills, the Sample story tag, the drag hint.

The mode switch and the List/Places switch are controls like any other: mono at control size.

**The Lockup Sizes Rule.** The wordmark's sizes belong to the logo, not to the text ramp: the name (Wordmark, 20px) and the tagline (Wordmark Tagline, italic 14px), dropping to a 16px name (0.11em) on phones and a 13.5px name (0.06em) with the tagline hidden when the header carries five buttons. Never reuse them for headings or body text.

### Named Rules

**The One Label Scale Rule.** Every small-capital label uses `--label-size` and `--label-track`; every control uses `--control-size`. No third size, no per-component tracking.

**The No Eyebrow Rule.** Nothing sits above a title. A page or sheet opens with its title; category, place, date and status follow beneath it in the meta line. Mono label headings ("What was reported") are the section heading itself, never a kicker over a serif heading.

## Layout

The map is a full-bleed fixed stage: the globe fills the viewport, centred slightly high, with the ring at 45% from the top. The header (wordmark, actions, mode switch, chips) floats over a top fade from night; the tuned title sits under a bottom fade with no card box. Gutters are 16px on phones and 28px from 760px. Zoom controls ride the right gutter at ring height.

Reading pages are a single column of 720px with 16px gutters, 22px between blocks and an extra 14px before each section. Sheets rise from the bottom, at most 640px wide and 90dvh tall, with 18px padding and 18px block gaps.

Breakpoints: 520px (header buttons collapse to icons, the wordmark lockup shrinks and drops its tagline when five buttons share the bar, the mode switch spans the width, the tuned line clamps to three lines) and 760px (wider gutters, larger tuned line). Every surface works at 400px without horizontal scroll; the chip strip scrolls with an edge mask instead of wrapping.

## Elevation & Depth

Depth is darkness, not colour. Raised surfaces (sheets, popups, dialogs) cast black shadows that fall away from them; nothing casts a coloured shadow. Light is a separate axis from elevation: it belongs only to emitters.

### Shadow Vocabulary

- **Sheet** (`box-shadow: 0 -24px 48px rgba(0, 0, 0, 0.55)`): bottom sheets.
- **Pop** (`box-shadow: 0 14px 32px rgba(0, 0, 0, 0.55)`): select and autocomplete popups.
- **Dialog** (`box-shadow: 0 20px 48px rgba(0, 0, 0, 0.6)`): confirm and report dialogs.
- **Emit text** (`text-shadow: 0 0 14px rgba(205,243,212,0.5), 0 0 2px rgba(205,243,212,0.6)`): the tuned title only.
- **Focus** (1px phosphor outline, 3px offset, `0 0 12px` faint phosphor halo).
- **Ring** (`drop-shadow(0 0 5px phosphor-dim)`): only while something is in it.
- **Indicator** (`0 0 6px phosphor-dim` on a 6px phosphor dot): the chosen segment of the mode switch.
- **Pigment dot** (`0 0 8px` in the category colour on the 7px chip dot): a shown category chip, the same pigment as its markers. Off when the chip is hidden.

### Named Rules

**The Only Emitters Glow Rule.** The tuned title, the ring, charged markers, focus, the mode switch's indicator light and the chip pigment dots are the only things that give off light. Panels, buttons, chip and segment containers, body text and borders never glow.

**The Unlit Plastic Rule.** Controls are a flat fill and a 1px hairline. No backdrop blur, no lit fills, no glowing borders. A pressed or primary control is set apart by phosphor text and a phosphor-dim rule; the chosen segment of a switch is raised with the Highlight wash, phosphor text and its lit indicator.

**The Charge Rule.** A marker's light is its charge: the tuned marker charges fully in about 0.14s, markers passing within 90px pick up at most 60%, and all charge decays as afterglow (to a third in about 4s). With reduced motion, the tuned marker is simply lit and the rest are not; the title shows its charged state without the charge animation.

## Shapes

Moulded plastic with gently rounded corners (8px) on buttons, icon buttons, category chips, the mode switch's track, fields, popups, dialogs and the field grid. A part nested inside a control (a switch segment) takes the tighter inner radius (5px), so it sits concentric with its 3px-padded track. Sheets round only their top corners (14px). Status pills and the Sample story tag are smaller (4px). Marks are geometric: famous cases are diamonds (a square rotated 45deg, 1px corners, with a faint phosphor outline square on canvas), people's stories are round dots, and that form carries into chips, tags and list rows by mode. The ring is a thin 1.2px phosphor circle with tick marks.

**The Form Carries Status Rule.** Case status is shown by the border form as well as colour: solid for Unexplained, dashed for Disputed, dotted for Explained. Finer labels (Confirmed, Mostly explained) take the form of the status they belong to. A hidden category chip goes dashed (Line Strong), transparent and muted, with a hollow dot: the same form language as the pills.

## Components

### Buttons

Unlit plastic, quiet until touched.

- **Shape:** gently rounded (8px), 34px tall, 12px side padding; icon buttons 34px square (32px small) with 14px SVG icons.
- **Default:** Plate fill, Line hairline, Ink 2 mono text at control size.
- **Hover / Focus:** text to Ink, hairline to Line Strong (hover only on hover-capable devices); focus is the phosphor outline.
- **Pressed (aria-pressed):** phosphor text, phosphor-dim rule.
- **Primary:** Night 2 fill, phosphor text, weight 500, phosphor-dim rule; hover brightens the rule to phosphor. Never a lit fill.
- **Danger:** danger text and 38% danger rule.
- **Read:** the way into a story is lit underlined text with an arrow icon, not a box.

### Chips

Real toggles in a scrolling strip, built from the same plastic as buttons.

- **Style:** 30px tall, Plate fill, 8px radius, a 1px rim tinted with the category colour at 40% (`color-mix`); a 7px pigment mark (diamond in famous mode, dot in people mode), an Ink mono name and a muted tabular count.
- **Hover:** the rim takes the full category colour (hover-capable devices only).
- **Shown:** the mark is filled and lit with its pigment glow (an emitter, see Elevation).
- **Hidden:** dashed Line Strong rim, transparent fill, muted text, hollow outlined mark, no glow.

### Cards / Containers

- **Corner Style:** 8px; sheets 14px top corners.
- **Background:** Night 2 for sheets and dialogs; the case fields grid is Night 2 cells over a Line-coloured 1px gap.
- **Shadow Strategy:** black fall-away shadows only (see Elevation).
- **Border:** 1px Line.
- **Internal Padding:** 18px in sheets, 20px in dialogs, 10px 12px in field cells.
- There is no tuner card: the tuned title sits directly on the dark.

### Inputs / Fields

- **Style:** Field fill, Line hairline, 8px radius, 10px 12px padding, Newsreader at 16px (keeps iOS from zooming).
- **Labels:** mono label scale, muted, above the field.
- **Focus:** 1px phosphor outline, 1px offset.
- **Checkbox and radio:** muted outline at rest; checked fills or dots in phosphor.
- **Error:** ember text at control size.

### Navigation

- **Mode switch:** a recessed track (Plate fill, Line hairline, 8px radius, 3px padding) holding equal segments 32px tall with the 5px inner radius, mono at control size. Each segment carries a 6px indicator light, a Line Strong outline when off. The chosen segment is raised with the Highlight wash and phosphor text, and its indicator is lit phosphor with a small glow. Resting segments are muted, Ink on hover. Under 520px it spans the header width. The List / Places switch in the list sheet is the same component.
- **Header actions:** unlit mono buttons with icons; under 520px they collapse to icon-only.
- **Reading pages:** a top bar with the wordmark and an "Open on the map" button, a hairline beneath; a mono footer with links in Ink 2.

### Tuned Title (signature)

The tuned story or case under the ring: a phosphor Newsreader title with emission that charges up from phosphor-dim over 1.1s, a serif first line, a mono meta line (category tag, status pill, place, coordinates via the Freq signal) and the Read action. Between stations it goes unlit: Ink 2 title, no shadow, muted line.

### Status Pill

22px tall (20px in rows), 4px radius, 1px current-colour border in the status form, label scale, uppercase.

### Logo

One lockup everywhere (map header, reading pages, admin): the phosphor eyeball (34px) spans two lines, 11px from the text. Beside it, UNCANNY MAP in the Wordmark style (phosphor, no glow) over the Wordmark Tagline in Ink 2 italic ("Something happened here", or "Admin"), 5px apart. On phones the eye is 30px and the name 16px; with five header buttons the eye is 26px, the name 13.5px and the tagline hidden. The iris follows the pointer and holds still with reduced motion.

## Do's and Don'ts

### Do:

- **Do** reserve light for emitters: the tuned title (`--emit-text`), the ring, charged markers and focus.
- **Do** build controls from `--plate` or `--night-2`, a `--line` hairline and `--radius` (8px); mark pressed or primary with phosphor text and `--phosphor-dim` rule.
- **Do** use `--label-size` / `--label-track` for every small-capital label and `--control-size` for every control.
- **Do** show case status by border form as well as colour: solid unexplained, dashed disputed, dotted explained.
- **Do** draw icons from the SVG `Icon` set in `src/components/brand.tsx`, with `aria-hidden` and `currentColor`.
- **Do** keep static charged and uncharged states under reduced motion, on canvas and in CSS.
- **Do** set reading in Newsreader and interface in IBM Plex Mono.

### Don't:

- **Don't** glow panels, buttons, chip or switch containers, borders or body text, and don't use coloured shadows on chrome.
- **Don't** use backdrop blur, frosted glass, pill-shaped buttons or a boxed tuner card.
- **Don't** fill a control with phosphor or a pigment to show it is on.
- **Don't** put an eyebrow or kicker above a title.
- **Don't** use text glyphs (arrows, crosses, ticks) as icons.
- **Don't** add a third label size or per-component letter-spacing.
- **Don't** write hex or `rgba()` outside `tokens.css`, or hard-code category colours outside `categories.ts`.
- **Don't** draw country borders on any globe.
