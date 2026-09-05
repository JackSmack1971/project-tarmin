# Phase 04 input and gameplay loop context

- Keyboard input is centralized in `src/input/input-controller.ts`; physical `KeyboardEvent.code` values map through `DEFAULT_KEY_BINDINGS` to explicit movement/turn commands. W/ArrowUp moves forward, S/ArrowDown backward, A/ArrowLeft turns left, D/ArrowRight turns right, and Escape pauses. Q/E remain reserved.
- Gameplay keys are ignored for form controls and browser repeat events; accepted arrow/gameplay keys call `preventDefault()` to prevent page scrolling. Input acceptance is presentation-owned with `menu`, `active`, `transitioning`, and `paused` modes. Commands are rejected outside active mode and there is no queue.
- `executeCommand` preserves authoritative outcomes while also returning `GameEvent[]`. Blocked movement is reported from the authoritative collision result; `applyCommand` remains as a compatibility state-only wrapper.
- Seed entry accepts decimal or deterministic textual seeds through `normalizeSeed`; generated seeds use browser crypto entropy outside the simulation and are displayed in the HUD. State generation remains deterministic from the normalized seed.
- Pause is presentation/application state: it stops command acceptance and does not mutate or advance `GameState`. Resume restores the same run. The HUD observes state via a small DOM view-model event and keeps equipment/ring slots explicitly empty until later phases.
- Reduced motion changes only the existing Phaser veil duration from 140 ms to 1 ms. Commands, coordinates, turns, visibility, RNG inputs, and dungeon state remain authoritative and unchanged.
- The read-only `window.__TARMIN_RENDERER__` surface now includes mode, seed, reduced-motion state, transition duration, turn, and last feedback in addition to renderer position/facing data.
- Deferred: combat/inventory/equipment behavior, save persistence, audio settings, remapping UI, multiple floors, final art/audio, and the absent canonical Phase 02 dungeon module layout.
