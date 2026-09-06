# Asset Integration Phase 4 — Visible Torch Source

| ID | Requirement | Verification | Status |
| --- | --- | --- | --- |
| TORCH4-01 | Reviewed sconce and compact flame derivatives are generated from approved staged sources; raw packs remain staging-only | Derivation script, provenance record, runtime asset listing | passed |
| TORCH4-02 | Sconces are sparse, deterministic, and anchored only to visible side-wall geometry | Projection unit tests and renderer-neutral source inspection | passed |
| TORCH4-03 | Sconces/flames do not expand portal visibility, reveal hidden cells, modify state, or affect RNG | Occlusion tests, deterministic-state tests, structural inspection | passed |
| TORCH4-04 | Flame animation is presentation-time only and reduced motion holds a stable frame | Browser renderer snapshot and reduced-motion capture | passed |
| TORCH4-05 | Near torch-lit material, deep corridor, transition, encounter/post-defeat, and blocker readability remain acceptable | Chromium screenshots and visual review | passed |
| TORCH4-06 | Required project checks pass | typecheck, lint, test, test:browser, build | passed |
| TORCH4-07 | Docs, commit, PR, merge, and merged-main verification are complete | Git/remote inspection | pending |

Browser evidence must record route, viewport, input/state, WebGL context,
console/page errors, transition and reduced-motion observations, and screenshot
paths in `harness/build-log.md`.
