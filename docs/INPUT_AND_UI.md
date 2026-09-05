# Input and interface

Project Tarmin presents one readable hierarchy: the first-person dungeon is the
dominant surface, while the shell supplies compact state-derived information at
the edges. HTML/CSS is presentation only. It observes `tarmin-state` and
`tarmin-mode` events and emits existing commands; authoritative state remains in
`src/sim/`.

Run modes include `defeated` and `victorious` in addition to menu, active,
transitioning, and paused. Gameplay keyboard input is disabled in both terminal
modes. The terminal panel presents the outcome and offers restart with the
current seed or generation of a new seed. The shell prioritizes terminal,
defeat, monster-defeat, and loot events when one command produces multiple events.

## Interface composition

- The canvas fills the largest available 16:9 region. The header identifies the
  floor, turn, seed, location, and facing without covering the central view.
- Left and right hand cards sit in the side margins and show the equipped item
  plus its relevant strike, guard, restore, or treasure role.
- Vitality is a compact numeric value with a visual bar. The ring dock shows the
  selected item, capacity, and a small selection rail; it does not duplicate the
  inventory as a separate model.
- Encounter status is a bounded threat card near the lower center. It reports
  the visible monster's name, health, and keyboard actions; the monster billboard
  remains the primary encounter representation.
- Feedback is a short live message. It must remain concise and never replace a
  visible door, corridor, entity, or combat result.
- The header shows objective status and exit coordinate. Before the seal is
  collected it says `FIND SEAL`; after pickup it says `SEAL FOUND`; the exit
  reports a locked message without awarding victory until the objective is held.

Menu and pause use the same dark panel, border, type, and focus treatment as the
HUD. Pause owns focus through its Resume control, keeps the run unchanged, and
offers reduced motion. Escape and all existing keyboard bindings remain valid;
form controls are excluded from gameplay key handling.

## Responsive and accessibility rules

The composition is tested at 1280×720 and larger desktop sizes. At narrower
widths side cards contract, nonessential helper text disappears, and the ring
remains centered. Text uses high-contrast warm parchment and muted olive against
near-black panels. Interactive controls retain visible focus outlines, live
feedback uses `aria-live`, modal pause uses `role="dialog"` and
`aria-modal="true"`, and reduced-motion preferences shorten presentation
transitions without changing simulation state.

The renderer rebuilds presentation only after a command or mode/state change;
its frame loop updates cosmetic billboard crops only. This keeps turning,
blocked movement, combat, pause, and reduced-motion feedback independent of
presentation frame rate.
