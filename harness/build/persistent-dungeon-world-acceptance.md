# Persistent dungeon-world acceptance matrix

## Pre-implementation contract

Applicable: 12; executable: 11; human: 1; blocked: 0; contradictory: 0; unresolved: 0.

| ID | Category | Priority | Requirement/source | Applicable when | Observable behavior/oracle | Verification mechanism | Expected evidence | Stopping condition | Status |
|---|---|---|---|---|---|---|---|---|---|
| DW-01 | functional | must | Explicit monster instances carry stable identity, definition, position, current health, defeated state | always | Initial state contains the persistent monster instance with all fields | focused simulation test + type inspection | test assertions and source | instance fields are present and serializable | planned |
| DW-02 | functional | must | Movement queries authoritative world state instead of recreating monsters from coordinates | movement onto monster cell | Encounter starts from the matching world instance; no coordinate factory is used | focused simulation test + source inspection | test and diff | movement lookup reads world collection | planned |
| DW-03 | functional | must | Defeated monster remains defeated for the run | defeat then revisit | Re-entry does not create an encounter | focused simulation test | passing revisit regression | revisit has no encounter | planned |
| DW-04 | functional | must | Surviving monster state persists across disengagement/re-entry | damage, retreat, re-enter | Same stable ID and reduced health are restored to active combat | focused simulation test | passing continuation regression | health and identity match | planned |
| DW-05 | functional | must | World loot stays associated with dungeon location until collected | defeat/drop/pickup | Loot records retain the monster cell or item world position and pickup removes only collected item | focused simulation test | location assertions | uncollected item has location; pickup updates ownership | planned |
| DW-06 | compatibility | must | Existing combat behavior remains intact | attack flow | Accuracy, damage, retaliation, defeat, retreat, and inventory interactions preserve current outcomes | existing + focused simulation tests | `npm test` output | all relevant tests pass | planned |
| DW-07 | architectural | must | Simulation remains deterministic, canonical, serializable, and renderer-neutral | state transitions | Same seed/commands and JSON round-trip produce equal future state; no Phaser/Math.random in sim | focused tests + structural scan + typecheck | test/output/source scan | all checks pass | planned |
| DW-08 | compatibility | must | Current rendering/input architecture remains usable | browser active flow | Encounter billboard, combat HUD, defeat disappearance, movement/input continue | fresh Chromium flow | route, inputs, state surface, screenshot, console | affected flow works with zero app errors | planned |
| DW-09 | non-functional | must | Project checks remain green | after implementation | Required commands exit successfully, with documented manual browser status | commands | exact outputs in build log | typecheck/lint/test/test:browser/build pass | planned |
| DW-10 | architectural | must | Relevant architecture/decision/testing documentation is current | behavior/contract changed | Docs describe persistent world ownership and verification | source/doc inspection | updated docs and build log | docs agree with implementation | planned |
| DW-11 | non-functional | must | Complete goal is committed on focused branch and PR opened to main | local work complete | Focused commit and PR exist | git/GitHub inspection | branch, commit, PR URL/state | PR targets main | planned |
| DW-12 | non-functional | must | PR merges only after checks and merged result is on main | PR ready | Remote merge and local main verification show the complete change | GitHub/git inspection + checks | merge SHA, checks, clean main | main and origin/main contain verified commit | planned |

Human row: DW-08 includes experiential readability review; automated/browser evidence can prove runtime state and errors, but a reviewer must inspect that the existing encounter/combat presentation remains readable.

## Post-implementation summary

Passed: DW-01 through DW-12. DW-08 is supported by fresh 1280×720 Chromium evidence covering encounter, defeat, entity disappearance, loot pickup, revisit, and zero page/application errors. DW-11 is supported by focused branch commit `6a8db8a` plus browser-evidence commit `78dcddf` and PR #19. DW-12 is supported by squash merge commit `91ace85`, local `main`/`origin/main` equality, merged-main checks, and merged-main Chromium verification. Failed: 0; blocked: 0; contradictory: 0; inconclusive: 0.
