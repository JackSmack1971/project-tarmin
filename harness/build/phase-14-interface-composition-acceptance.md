# Phase 14 interface composition acceptance

| ID | Requirement | Verification | Status |
| --- | --- | --- | --- |
| UI-1 | First-person dungeon is the dominant experience | Browser screenshots at 1280×720 and 1920×1080; inspect central canvas bounds and unobstructed portal | passed: canvas 1229×691 at 1280; 1760×990 at 1920 |
| UI-2 | Menu, exploration, combat, and pause share one hierarchy | Fresh browser flow through each state; inspect screenshot and mode/state surface | passed: menu, active, encounter, paused |
| UI-3 | Vitality, left/right equipment, ring identity, and location/facing are immediately readable | `tarmin-state` DOM inspection plus browser screenshot | passed: all state surfaces visible at 1280 |
| UI-4 | Combat information supports the visible monster | Enter encounter, inspect billboard plus threat card, attack and defeat | passed: Warden billboard + 5/5 threat card |
| UI-5 | Existing keyboard controls, pause/resume, focus, live feedback, and reduced motion remain usable | Browser key sequence and active-element/renderer inspection | passed: ArrowUp, Escape, Resume focus, aria-live, reducedMotion=true |
| UI-6 | Layout remains usable at target and larger desktop resolutions | Browser viewport checks at 1280×720, 1600×900, and 1920×1080 | passed: 1280, 1600, 1920 snapshots |
| UI-7 | Authoritative gameplay remains outside DOM/Phaser presentation | Typecheck, simulation tests, and structural import/state inspection | passed local |
| UI-8 | Required project checks pass | typecheck, lint, test, test:browser, build | passed: local checks; test:browser manual notice |

Browser evidence: Chromium-compatible Playwright session on `http://127.0.0.1:5173/`,
fresh seed `7391`, 1280×720 and 1920×1080 screenshots
`phase-14-combat-1280.png`, `phase-14-pause-1280.png`, and
`phase-14-combat-1920.png` in the browser output. Console: 0 errors, 0 warnings.
