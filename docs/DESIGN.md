---
version: alpha
name: Project Tarmin
description: "A solitary first-person dungeon ritual — void-black stone, ember torchlight, and a single coveted gleam of gold in the dark."
colors:
  void: "#0B0A08"
  void-deep: "#050403"
  stone: "#4B4A3E"
  stone-dark: "#302F26"
  umber: "#3A2A1E"
  iron: "#5C5A52"
  bronze: "#8A6B3F"
  ember: "#B8672F"
  ember-dim: "#7A4620"
  bone: "#DDD3BE"
  bone-muted: "#9C9585"
  oxide: "#8B3A2E"
  gold: "#E8A317"
  gold-glow: "#FFC94A"
typography:
  headline-display:
    fontFamily: "Press Start 2P, monospace"
    fontSize: 32px
    fontWeight: 400
    lineHeight: 1.15
    letterSpacing: "0.02em"
  headline-section:
    fontFamily: "Press Start 2P, monospace"
    fontSize: 18px
    fontWeight: 400
    lineHeight: 1.3
    letterSpacing: "0.01em"
  body-narrative:
    fontFamily: "Silkscreen, monospace"
    fontSize: 14px
    fontWeight: 400
    lineHeight: 1.6
  body-hud:
    fontFamily: "Silkscreen, monospace"
    fontSize: 12px
    fontWeight: 400
    lineHeight: 1.2
    fontFeature: "'tnum' 1"
  stat-numeric:
    fontFamily: "Silkscreen, monospace"
    fontSize: 12px
    fontWeight: 700
    lineHeight: 1.2
    fontFeature: "'tnum' 1"
  label-caps:
    fontFamily: "Silkscreen, monospace"
    fontSize: 10px
    fontWeight: 700
    letterSpacing: "0.08em"
spacing:
  none: 0px
  xs: 4px
  sm: 8px
  md: 16px
  lg: 32px
  xl: 64px
  grid-columns: 12
rounded:
  none: 0px
  sm: 4px
  full: 9999px
components:
  hud-panel:
    backgroundColor: "{colors.stone-dark}"
    padding: "{spacing.md}"
    rounded: "{rounded.none}"

  dialog-box:
    backgroundColor: "{colors.umber}"
    padding: "{spacing.lg}"
    rounded: "{rounded.sm}"

  minimap-panel:
    backgroundColor: "{colors.void-deep}"
    padding: "{spacing.sm}"
    rounded: "{rounded.none}"

  button-primary:
    backgroundColor: "{colors.bronze}"
    textColor: "{colors.bone}"
    typography: "{typography.label-caps}"
    rounded: "{rounded.none}"
    padding: "{spacing.sm}"
    height: "40px"

  button-primary-hover:
    backgroundColor: "{colors.ember-dim}"
    textColor: "{colors.bone}"

  button-primary-disabled:
    backgroundColor: "{colors.stone-dark}"
    textColor: "{colors.bone-muted}"

  button-secondary:
    backgroundColor: "{colors.iron}"
    textColor: "{colors.bone}"
    typography: "{typography.label-caps}"
    rounded: "{rounded.none}"
    padding: "{spacing.sm}"
    height: "40px"

  button-secondary-hover:
    backgroundColor: "{colors.stone}"
    textColor: "{colors.bone}"

  button-secondary-disabled:
    backgroundColor: "{colors.stone-dark}"
    textColor: "{colors.bone-muted}"

  inventory-slot:
    backgroundColor: "{colors.stone-dark}"
    rounded: "{rounded.none}"
    padding: "{spacing.xs}"
    size: "48px"

  inventory-slot-hover:
    backgroundColor: "{colors.iron}"

  inventory-slot-selected:
    backgroundColor: "{colors.bronze}"
    textColor: "{colors.bone}"

  inventory-slot-treasure:
    textColor: "{colors.gold}"

  health-bar-track:
    backgroundColor: "{colors.stone-dark}"
    height: "12px"
    rounded: "{rounded.none}"

  health-bar-fill:
    backgroundColor: "{colors.oxide}"
    height: "12px"
    rounded: "{rounded.none}"

  loot-marker:
    backgroundColor: "{colors.gold}"
    rounded: "{rounded.full}"
    size: "8px"

  seal-marker:
    backgroundColor: "{colors.gold}"
    textColor: "{colors.void}"
    rounded: "{rounded.full}"
    size: "16px"

  pickup-flash:
    backgroundColor: "{colors.gold-glow}"
    rounded: "{rounded.full}"
    size: "24px"
---

## Overview

Project Tarmin exists to recreate a very specific memory: **the solitary D&D ritual** — the kid alone with a console, a torch, and a corridor that might hold a Warden or might hold nothing. No party, no DM, just first-person immersion, procedural unpredictability, and the quiet dread of not knowing what's ahead. The interface must never feel like a "video game menu" laid over the dungeon — it must feel like it was rendered *by* the dungeon: a low-resolution bitmap console readout bolted onto stone and shadow.

The palette is **void-black, ember-ochre, and desaturated olive stone** — deliberately not the CRT phosphor-green of a terminal, and not the bright torch-lit sandstone of a heroic fantasy epic. This is close, dim, and enclosed. Light is scarce and warm but never clean. Everything reads as old, tarnished, and half-swallowed by the dark, so that the one thing that *isn't* — a coin of saturated gold down the corridor — hits like a jolt of temptation.

**Design ethos: "Sparse aesthetic, loud consequence."** The hardware (browser/WebGL) can render far more than the original Intellivision ever could, but the emotional contract stays the same — let restraint and darkness do the work that a kid's imagination once did.

## Colors

The system runs on a tight, desaturated stone-and-ember register with exactly **one saturated color in the entire game.**

* **Void (`#0B0A08`)** and **Void Deep (`#050403`)** — the base canvas. Void Deep is reserved for recessed spaces (minimap panel, unlit corridor edges) one step darker than the primary background.
* **Stone (`#4B4A3E`)** and **Stone Dark (`#302F26`)** — muted olive-gray dungeon stone. Stone Dark is the default surface for HUD panels and inactive UI.
* **Umber (`#3A2A1E`)** — soot-brown, used for elevated surfaces like dialog boxes that need to sit visibly above the HUD panel layer.
* **Iron (`#5C5A52`)** and **Bronze (`#8A6B3F`)** — tarnished metal tones for interactive chrome: buttons, borders, selected states. Bronze reads as "this is active/selected," Iron reads as "this is available."
* **Ember (`#B8672F`)** and **Ember Dim (`#7A4620`)** — desaturated torchlight. This is illumination, not accent — it never signals value or reward, only that a light source is present.
* **Bone (`#DDD3BE`)** and **Bone Muted (`#9C9585`)** — dirty ivory text. Never pure white; Bone Muted is used for disabled or de-emphasized labels.
* **Oxide (`#8B3A2E`)** — rare ember red-orange, reserved for bar-fills and iconography signaling depleting vitality or danger (e.g. `health-bar-fill`). Oxide falls below AA contrast against Void at small text sizes and **must never be used as small text color** — only as a fill, bar, or large iconographic element, per the WCAG 1.4.3 non-text exemption.
* **Gold (`#E8A317`)** and **Gold Glow (`#FFC94A`)** — the singular saturated accent in the entire system.

### The Accent Contract

**Saturated gold communicates desirable value. If it isn't something the player should covet, it doesn't get the gold.**

Gold is used exclusively for:
- Dropped loot and ground treasure (`loot-marker`)
- The Star-Forged Seal, which is simultaneously treasure and objective (`seal-marker`)
- Inventory labels on slots holding valuable items (`inventory-slot-treasure`)
- The momentary pickup-acquisition flash (`pickup-flash`, using Gold Glow)

Gold is **never** used for health, danger, combat, ordinary monsters, buttons, borders, or navigation. Danger and urgency are communicated entirely through Oxide, brightness shifts, depletion, and flashing — never through the accent. This keeps the screen visually quiet everywhere except the one place it should be loud: a glint of treasure down a dark corridor.

## Typography

All type renders as low-resolution bitmap glyphs with **crisp nearest-neighbor rendering — no anti-aliasing, no smoothing, no sub-pixel blur.** Two bitmap faces carry the entire system:

* **Display face (`Press Start 2P`)** — used only for `headline-display` and `headline-section`: floor names, encounter titles, victory/defeat states, and other major state changes. This is the "fantasy-leaning" face; it should feel iconic and a little ceremonial.
* **Body face (`Silkscreen`)** — used for everything else: HUD readouts, narrative text, buttons, and stats. Compact, high-legibility, and unmistakably a rendered console font rather than a web font.

Rules:
- **Tabular numerals are mandatory** on `body-hud` and `stat-numeric` (`fontFeature: "'tnum' 1"`) so HP, gold counts, and floor numbers never shift width as digits change.
- UI labels and buttons (`label-caps`) are short, uppercase, and widely tracked (`0.08em`) for legibility at small bitmap sizes.
- Narrative text (`body-narrative`) is mixed-case with generous line-height (`1.6`) — this is the one place the UI is allowed to breathe and read like prose rather than a readout.
- **Do not** substitute a monospace-terminal aesthetic as the dominant visual language — that pulls the identity toward a CRT terminal, which is a different project's territory.
- **Do not** use blackletter or ornate fantasy display fonts. At bitmap scale they collapse into illegibility and read as generic-fantasy rather than intentional.

## Layout

* Base structural rhythm runs on an **8px grid** (`{spacing.sm}`), matching the pixel-art tile scale used throughout the renderer.
* The HUD is docked and compact — health, inventory, and minimap live in fixed-position `hud-panel` blocks that never obscure more than the outer edges of the viewport; the dungeon view itself is the dominant visual element at all times.
* Validated desktop breakpoints are **1280×720, 1600×900, and 1920×1080** — HUD panel proportions scale with viewport but never reflow into a different arrangement between these sizes.
* Dialog boxes (victory, defeat, restart prompts) are centered overlays using `{spacing.lg}` padding and sit on the `umber` surface tier, one step above the HUD panel's `stone-dark`.
* As dungeon depth increases, the ambient background may shift marginally darker (biased toward `{colors.void-deep}`) to reinforce descent as an escalating risk, without ever fully obscuring geometry.

## Elevation & Depth

Depth is communicated **exclusively through background color shifts and hairline borders** — never through CSS box-shadow, drop-shadow, or blur of any kind. This keeps the interface flat and graphic, consistent with the bitmap rendering philosophy.

* **Layer 0 (Void):** `{colors.void}` — the base dungeon canvas.
* **Layer 1 (Panel):** `{colors.stone-dark}` — HUD panels, inventory slots, minimap sit one tone lighter than Void.
* **Layer 2 (Elevated):** `{colors.umber}` — dialog boxes and modal overlays sit one tone above Layer 1, using a warmer hue shift rather than a lightness jump alone, so the elevation reads as "closer to torchlight" rather than "glowing."
* Where a boundary needs more separation than a color shift provides, use a **1px hairline border** in `{colors.iron}` — never a shadow.

## Shapes

The shape language is **brutalist and sharp by default**, consistent with the pixel-art tile grid — rounding is the exception, not the rule.

* All primary interactive chrome (buttons, HUD panels, inventory slots, minimap) uses `{rounded.none}` — zero border-radius.
* Rounding is permitted only for two categories: **dialog/modal boxes** (`{rounded.sm}`, a small softening to distinguish "this is a UI overlay, not dungeon geometry") and **circular world/UI markers** (`{rounded.full}`) — loot pips, the seal marker, and the pickup flash — where a perfect circle reads instantly as "object of interest" against the rectilinear dungeon grid.
* Never apply rounding to health bars, buttons, or panel containers. A rounded HUD would soften the "old, tarnished, half-broken" feeling the palette is built around.

## Components

* **Buttons:** `button-primary` (bronze) is reserved for the dominant contextual action (interact, confirm, attack). `button-secondary` (iron) is for navigation and lower-priority actions. Neither ever uses gold — hover states shift to `ember-dim` or `stone`, communicating warmth/availability without borrowing the loot signal.
* **Inventory slots:** Default slots are `stone-dark`. A slot lights to `iron` on hover and `bronze` when selected. If — and only if — the held item is genuinely valuable, its label renders in `inventory-slot-treasure` gold; the slot background itself never changes for this.
* **Health:** `health-bar-track` (stone-dark) and `health-bar-fill` (oxide) communicate vitality through fill length and the oxide hue alone — no numeric-only readout should be the sole vitality signal, since audio and visual depletion together are the survival mechanic this game is built around.
* **World markers:** `loot-marker` and `seal-marker` are the only circular gold elements that appear inside the dungeon view itself. They should be small and singular — never a cluster of gold pips filling a room, which would cheapen the signal.
* **Pickup feedback:** `pickup-flash` is a brief, single-frame gold-glow pulse on acquisition — the only animated accent moment in the system, deliberately rare so it stays rewarding.

## Do's and Don'ts

* **Do** keep gold to loot, the Seal, and pickup feedback only — nowhere else, ever.
* **Do** render all bitmap type with nearest-neighbor / pixelated image-rendering; never allow the browser to anti-alias or smooth the fonts.
* **Do** use tabular numerals (`'tnum' 1`) on every numeric HUD value — HP, gold count, floor number — so digits never cause layout shift.
* **Do** communicate depth and elevation through background color and hairline borders only.
* **Don't** use CSS box-shadow, drop-shadow, or blur anywhere in the interface.
* **Don't** use gradients on any surface; if a lighting effect is needed, document it in prose using tokenized primitive colors rather than a raw gradient string.
* **Don't** use pure white or pure black — text is always `{colors.bone}` or `{colors.bone-muted}`, backgrounds are always `{colors.void}` or a stone/umber tier.
* **Don't** apply border-radius to buttons, HUD panels, inventory slots, or health bars.
* **Don't** use blackletter, ornate fantasy fonts, or a dominant monospace-terminal treatment — the identity is bitmap-console, not CRT-terminal and not illuminated-manuscript.
* **Don't** let Oxide appear as small body text color — it is a fill/icon tone only, documented here as a WCAG 1.4.3 non-text exemption.
