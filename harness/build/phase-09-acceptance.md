# Phase 9 — Art-directed portal perspective acceptance

| ID | Category | Priority | Requirement/source | Observable behavior/oracle | Verification mechanism | Expected evidence | Stopping condition | Status |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| P9-1 | functional | must | Re-art-direct `PORTAL_FRAMES` and viewport composition | Near frame dominates, later frames contract aggressively, and far geometry darkens without changing primitive topology | Portal invariant tests plus renderer tests | `npm test`, normalized frame assertions, fixture renderer state | All frame bounds/nesting/order assertions pass and primitive depth/topology is unchanged | passed |
| P9-2 | compatibility | must | Preserve blocker/opening/side-cell interpretation | Straight corridor, side opening, terminating wall, and closed door expose the same depth/kind interpretation as before | Existing projection tests and browser fixture inspection | `art-directed-straight-1280.png`, `art-directed-left-1280.png`, `art-directed-wall-1280.png`, `art-directed-door-1280.png` | All four fixture states report expected visible depth and primitive kinds | passed |
| P9-3 | architectural | must | Keep deterministic pure projection and authoritative movement unchanged | Same state/seed produces same primitive signature; no simulation or renderer-boundary violation | Unit tests and source inspection | `primitiveSignature` tests; no simulation edits | Deterministic tests and boundary scans pass | passed |
| P9-4 | human | must | Materially improve apparent scale and claustrophobia | Reviewer sees large enclosing near walls, a dominant first portal, compressed readable depth, and distant darkness | Fresh Chromium screenshots at 1280×720 and 1920×1080 | Reproducible screenshot set and visual review record | Representative straight/turn/blocker/door states are spatially legible and composition is accepted | passed |
| P9-5 | non-functional | must | Complete repository checks | Required commands exit successfully | `npm run typecheck`, `npm run lint`, `npm test`, `npm run test:browser`, `npm run build` | Command output recorded in build log | All commands pass; known build-size warning separately recorded | passed |
| P9-6 | delivery | must | Commit, PR, required checks, and merge into `main` | Goal commit is present on `main` after PR merge | Git/remote inspection | PR #7, merged SHA `203802eaa9f2af871c1b89fd2daec62b5b9031eb`, local/remote `main` verification; no GitHub checks are configured | Verified merged commit on `main` | passed |

## Pre-implementation summary

Applicable: 6. Executable: 5. Human: 1. Blocked: 0. Contradictory: 0. Unresolved: 0.

## Post-implementation summary

Passed: 6. Failed: 0. Not-proven: 0. PR #7 is merged into `main`; no required GitHub checks were configured, and all repository-native commands passed locally.
