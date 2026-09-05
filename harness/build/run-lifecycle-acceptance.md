# Run lifecycle acceptance

## Contract summary

Applicable: 14. Executable: 13. Human/browser: 1. Blocked: 0. Contradictory: 0.
Before implementation all rows were `planned`; completion requires every row to
be `passed` and no inconclusive lane.

| ID | Category | Priority | Requirement/source | Observable behavior/oracle | Verification | Status |
|---|---|---:|---|---|---|---|
| RL-01 | functional | must | Canonical playing/defeated/victorious lifecycle | State exposes exactly one run status and serializes it | `state.test.ts`, `combat-inventory.test.ts` | passed |
| RL-02 | negative | must | Death is authoritative and terminal | Zero health sets defeated, clears encounter, emits terminal event | `combat-inventory.test.ts` | passed |
| RL-03 | negative | must | Post-death commands cannot continue play | Command returns the same state and terminal-ignore event | `combat-inventory.test.ts` | passed |
| RL-04 | functional | must | Victory can be activated for the next MVP objective | `completeRun()` enters victorious and blocks later commands | `combat-inventory.test.ts` | passed |
| RL-05 | functional | must | Same-seed restart is deterministic | Restarted state equals fresh state for same seed | `combat-inventory.test.ts` | passed |
| RL-06 | functional | must | New-seed restart works | New seed creates a clean state with that seed | `combat-inventory.test.ts` | passed |
| RL-07 | compatibility | must | Pause and existing bindings remain compatible | Existing input tests pass; terminal mode does not emit gameplay commands | input tests and Chromium | passed |
| RL-08 | functional | must | Terminal presentation is clear | Defeat/victory mode shows outcome and same/new seed controls | Chromium fresh-page run | passed |
| RL-09 | functional | must | Important later events remain visible | Feedback prioritizes terminal, defeat, monster defeat, and loot over earlier events | `MainScene.ts` inspection plus Chromium defeat/loot run | passed |
| RL-10 | functional | must | Warden yields the Star-Forged Seal objective | Defeating and picking up the Warden loot sets objective possession | `run-objective.test.ts` | passed |
| RL-11 | negative | must | Exit is gated by objective possession | Entering `(2,4)` without the seal remains playing and emits `exitLocked` | `run-objective.test.ts` | passed |
| RL-12 | functional | must | Objective completion awards victory | Entering `(2,4)` with the seal sets objective complete and `victorious` | `run-objective.test.ts` | passed |
| RL-13 | negative | must | Victory is terminal | Commands after objective victory return the same state and terminal-ignore event | `combat-inventory.test.ts`, `run-objective.test.ts` | passed |
| RL-14 | human/browser | must | Complete floor is playable in the browser | Fresh Chromium route reaches victory and same-seed restart returns clean playing state | Chromium route in `docs/TESTING_STRATEGY.md` | passed |

## Verification record

- `npm test -- --run`: passed, 48 tests.
- `npm run typecheck`: passed.
- `npm run lint`: passed.
- `npm run build`: passed.
- `npm run test:browser`: documented status check only; not counted as Chromium evidence.
- Chromium evidence is recorded in `harness/build-log.md` under the run-lifecycle
  entry, including route, viewport, WebGL state, input sequence, terminal and
  restart observations, screenshots, and console errors.

## Complete-floor verification record

- `npm test -- --run`: passed, 48 tests.
- `npm run typecheck`: passed.
- `npm run lint`: passed.
- `npm run build`: passed.
- `npm run test:browser`: documented status check only; not counted as Chromium evidence.
- Chromium evidence: fresh 1280×720 Chromium pages on `http://127.0.0.1:5173/`.
  No-seal movement reached `(2,4)` with `runStatus=playing` and
  `objective.acquired=false`. The complete route defeated the Warden, picked up
  the Seal, reached `(2,4)`, and reported `mode=victorious` and
  `objective.complete=true`. Same-seed restart returned `mode=active`,
  `runStatus=playing`, turn 0, full health, and `objective.acquired=false`.
  Both browser runs had zero page errors. Screenshots:
  `harness/evidence/run-objective-locked.png` and
  `harness/evidence/run-objective-victorious.png`.
