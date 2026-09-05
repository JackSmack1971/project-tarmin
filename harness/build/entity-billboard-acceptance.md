# Entity billboard layer acceptance

| ID | Category | Priority | Requirement | Observable oracle | Verification | Status |
| --- | --- | --- | --- | --- | --- | --- |
| E1 | functional/architectural | must | Project canonical state-backed entities into discrete dungeon depth. | Encounter projection contains the canonical monster ID, grid position, depth, and billboard contract. | Pure entity projection tests. | passed — 4 entity projection tests |
| E2 | functional | must | Scale and place entities deterministically in perspective. | Same state gives identical normalized quad/ordering; depth changes size and placement predictably. | Pure projection tests. | passed — deterministic signature and far-to-near assertions |
| E3 | negative | must | Blocking geometry occludes entities behind it. | Entities behind nearest opaque visible cell are absent; entities at or before blocker remain eligible. | Projection tests with wall/door states. | passed — wall and closed-door cases |
| E4 | non-functional | must | Animation is presentation-only. | Frame selection depends only on explicit presentation time and does not change authoritative state/signature. | Unit test plus browser runtime inspection. | passed — state/signature unchanged; 260ms frame alternation |
| E5 | human/browser | must | Active Ashbound Warden visibly occupies encounter depth. | Browser first-person screenshot/runtime state shows a billboard, not only HUD text. | Chromium encounter capture and visual inspection. | passed — `entity-encounter-1280.png`, depth 1, WebGL |
| E6 | functional/browser | must | Entity disappears when canonical state no longer contains it. | Defeat/retreat changes renderer entity list to empty while combat/state remains coherent. | Browser flow plus renderer surface. | passed — seed 42 defeat: `encounter:null`, `entities:[]` |
| E7 | compatibility | must | Existing textured portal behavior remains intact. | Existing projection/render checks retain expected depth and blocker behavior. | Full repository checks and fixture inspection. | passed — 35 tests, typecheck/lint/build |
| E8 | delivery | must | Docs, commit, PR, checks, and merged main are verified. | Updated docs/build log and merged feature commit on `main`. | Git/remote inspection. | pending |

## Scope notes

The implementation may establish reusable presentation types for monsters, items, treasure, and environmental features, but it must not create unsupported gameplay state or rules merely to demonstrate them. Browser visual quality remains a human-evaluated criterion and cannot be proven by compilation alone.
