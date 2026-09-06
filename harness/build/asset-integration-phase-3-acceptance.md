# Asset Integration Phase 3 — Interface Art Language

| ID | Requirement | Verification | Status |
| --- | --- | --- | --- |
| UI3-01 | Runtime uses transformed border, divider, and panel material assets; raw sources remain staging-only | Derivation script, output hashes, asset/source manifest, runtime asset listing | passed |
| UI3-02 | Menu, HUD, equipment, vitality, ring, combat, feedback, pause, and terminal states share one material/border language | Chromium screenshots at required states; shared CSS panel rule inspection | passed |
| UI3-03 | Dungeon remains dominant and central portal is unobstructed | Chromium screenshots at 1280×720, 1600×900, and 1920×1080; visual review | passed |
| UI3-04 | Existing state, controls, equipment semantics, ring behavior, and combat presentation remain intact | Existing Playwright MVP suite and DOM state assertions | passed |
| UI3-05 | Accessibility and reduced-motion behavior remain usable | Chromium pause focus, aria-live inspection, reduced-motion screenshot/state | passed |
| UI3-06 | Surface language follows Project Tarmin tokens and avoids gradients, blur, and shadows | CSS structural scan plus visual review | passed |
| UI3-07 | Required project checks pass | typecheck, lint, test, test:browser, build, diff check | passed |

Browser evidence: `harness/evidence/phase-3-menu-{1280,1600,1920}.png`,
`phase-3-active-{1280,1600,1920}.png`, `phase-3-combat-{1280,1600,1920}.png`,
`phase-3-pause-1280.png`, `phase-3-pause-reduced-1280.png`, and
`phase-3-terminal-1920.png`. Chromium ran with WebGL and zero application
console/page errors. The focused interface-art flow and the existing MVP flows
passed with one worker to avoid GPU contention during capture.
