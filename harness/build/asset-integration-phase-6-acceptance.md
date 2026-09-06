# Asset Integration Phase 6 — Ashbound Warden acceptance

| ID | Requirement | Verification | Evidence |
| --- | --- | --- | --- |
| W1 | Warden is an original two-frame 64×48 sheet with 32×48 crops | `npm test` asset contract test and provenance inspection | `src/renderer/entities/entityAssets.test.ts`, `WARDEN_ASSET_DERIVATION.json` |
| W2 | Ash/bone/iron/ember palette and near-black outline remain readable | Chromium screenshots and visual review | `harness/evidence/phase-6-warden-*.png` |
| W3 | Projection, occlusion, and presentation-only animation remain unchanged | Entity/simulation tests and source inspection | `src/renderer/entities/entityProjection.test.ts`, `src/sim/*.test.ts` |
| W4 | Warden appears in approach/encounter and disappears after defeat | Chromium seed 7391 flow | `phase-6-warden-approach.png`, `phase-6-warden-encounter.png`, `phase-6-warden-defeated.png` |
| W5 | Attack states, loot, Star-Forged Seal, and one-floor victory remain unchanged | Chromium flow plus project checks | `phase-6-warden-attack.png`, `phase-6-warden-seal-victory.png` |
| W6 | 1280×720, 1600×900, and 1920×1080 views have no app/page errors | Fresh Chromium sessions | `phase-6-warden-1280.png`, `phase-6-warden-1600.png`, `phase-6-warden-1920.png` |
| W7 | Project checks and delivery gates pass | typecheck, lint, test, browser, build, diff check; Git inspection | build log and Git history |

Human visual review is required for W2 and W6; automated tests do not replace
silhouette, contrast, layering, or experiential review.

This matrix closes the Ashbound Warden art slice. The next slice is the
load-bearing procedural health cue described in `docs/AUDIO_DIRECTION.md`.
