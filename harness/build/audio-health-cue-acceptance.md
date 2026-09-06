# Audio health cue acceptance

| ID | Requirement | Verification | Status |
| --- | --- | --- | --- |
| H1 | Full vitality does not emit a health cue. | `healthCueProfile` unit test and browser diagnostics | passed |
| H2 | Reduced vitality produces a quieter-to-louder, slower-to-faster procedural cue without changing simulation state. | profile unit tests and seeded Chromium combat flow | passed |
| H3 | Pause suspends the cue and terminal states stop/dispose it. | browser mode/audio diagnostics | passed |
| H4 | Audio remains presentation-only and uses no new dependency or authoritative RNG/state. | source inspection, typecheck, simulation tests | passed |
| H5 | Required project checks pass. | typecheck, lint, test, browser, build, acceptance/control-plane, diff check | passed |

The cue is generated with native Web Audio after a user-initiated run action;
unsupported browser audio contexts degrade silently without affecting gameplay.
