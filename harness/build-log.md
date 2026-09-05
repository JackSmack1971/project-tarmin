# Build log

## Asset Integration Phase 2

- Scope: promote transformed Old School Dungeon Crawler Pack architectural art while preserving the Phase 1 environment-atlas contract; add presentation-only archway projection for visible openings.
- Change: `derive_dungeon_atlas.ps1` now remaps the approved brick-door source into the existing semantic `iron-door` swatch and emits a transparent 64×64 `archway-stone.png`. Added renderer-neutral `ProjectedFeature` values to `SceneDescription`; features reuse visible portal frames and inherit the nearest opaque cutoff. Phaser renders the archway asset between surfaces and entities; blockers retain their semantic geometry and outline.
- Tests/checks: focused projection tests passed (5); full `npm test` passed (12 files, 54 tests); `npm run typecheck`, `npm run lint`, `npm run build`, and `git diff --check` passed. Build retains the existing Phaser chunk-size warning.
- Browser: Chromium acceptance passed (3 tests, 56.6s) with zero application console/page errors. Captures: `harness/evidence/phase-2-open-passage.png`, `phase-2-closed-iron-door.png`, `phase-2-turn-opening.png`, and `phase-2-deep-corridor.png`. The full suite initially hit a transient Playwright web-server shutdown (`ERR_CONNECTION_REFUSED`); rerun against a clean 4173 server passed all three tests.
- Provenance: source archive SHA-256 `9235E70894E8ED15D979F1A50B840D86CFD544DEB946F7BE52A7ECF3DD8F670F`; atlas output SHA-256 `F42608BA729A1193D4C8A6E76FEE83F5E103B9BDC05129C2D91211CA7A1B1720`; archway output SHA-256 `87A4D9BA8A5E0E982F9F9ED02CB4B4F3F27EB58931A496A396A03DDF70FBCB76`.

## Phase 1

- Baseline: empty worktree except `AGENTS.md`; no existing commands or implementation.
- Decision: use a minimal Vite + Phaser shell with pure TypeScript state transitions.
- Risk/autonomy: local reversible implementation only (A2); no external writes.
- Dependency note: initial npm cache extraction was incomplete; `npm cache clean --force` followed by `npm install --force --no-audit --no-fund` restored the runnable toolchain.
- Verification: typecheck and production build passed; focused tests passed after correcting one fixture expectation; static simulation boundary scan passed.
- Browser: local Vite app loaded at `http://127.0.0.1:5173/`; title was `Project Tarmin`, Phaser canvas measured `929x619.3`, screenshot `phase-1-initial.png` captured, and ArrowRight then ArrowUp were accepted. Initial favicon 404 was corrected.
- Final checks: `npm test` (4 passed), `npm run typecheck` (passed), `npm run lint` (passed), `npm run build` (passed with Vite chunk-size warning), `npm run test:browser` (manual-phase notice; browser check performed separately), and architecture scan (passed). Browser reload after favicon fix reported zero console errors and a `960x640` canvas.

## Phase 2

- Scope: deterministic turn-based Ashbound Warden encounter triggered by forward movement, with attack and retreat commands.
- Composition: acceptance matrix first; uncertainty-first vertical slice across src/sim/ and Phaser adapter; browser verification after focused checks.
- Baseline: 4 tests passed; typecheck and build passed before edits.
- Verification: 7 tests passed, typecheck passed, production build passed with existing Phaser chunk-size warning, and simulation boundary scan found no Phaser import or Math.random usage.
- Browser: local Vite app loaded at http://127.0.0.1:5173/; ArrowUp entered the guarded encounter, Space resolved three attacks and defeated it, screenshots phase-2-combat.png and phase-2-defeated.png captured by browser automation, and console error check returned 0 errors.

## Phase 3

- Scope: recompose the first-person presentation without changing simulation rules or state.
- Change: moved to a 1280x720 logical canvas, responsive 16:9 shell capped at 80vw, bounded first-person viewport, stable horizon, and separate header/footer UI lanes; corrected polygon geometry to use world-space graphics coordinates.
- Browser: captured composition-1280.png, composition-1600.png, composition-1920.png, and composition-combat-1920.png through Playwright. The requested sizes preserved the same horizon and readable UI; combat entry with ArrowUp showed no overlap; browser console errors: 0.
- Checks: `npm test` passed (7 tests); `npm run typecheck` passed; `npm run build` passed with the existing Phaser chunk-size warning; fidelity ledger validation passed.

## Fresh browser verification

- Runtime: navigated to `http://127.0.0.1:5174/` in a fresh page context and resized to 1280×720, 1600×900, and 1920×1080.
- Canvas bounds: 1024×576, 1280×720, and 1536×864 respectively, confirming centered 16:9 FIT scaling without perspective stretching.
- Captures: `fresh-1280.png`, `fresh-1600.png`, `fresh-1920.png`, and `fresh-combat-1920.png`.
- Combat: `ArrowUp` entered the guarded encounter; the combat panel remained below the dungeon frame with no overlap.
- Browser console: 0 errors and 0 warnings.

## Phase 4

- Scope: replace the blue-gray/purple prototype palette with a centrally configured constrained dungeon palette while preserving the deterministic render state.
- Change: added semantic palette tokens in `src/game/palette.ts`; routed Phaser fills, strokes, text, canvas background, and shell CSS through those tokens; added depth-specific near/middle/far wall tones and a black visibility terminus.
- Browser: captured `palette-before.png` and `palette-after.png` at 1280x720 from the identical initial state (seed 7391, floor 1, turn 0, position 1,1, facing east); captured `palette-after-combat.png` after ArrowUp from that state. Console errors and warnings: 0.
- Checks: `npm test` passed (7 tests); `npm run typecheck` passed; `npm run build` passed with the existing Phaser chunk-size warning; fidelity ledger recorded in `harness/fidelity/phase-4-palette.json`.

## Phase 5

- Scope: make darkness a compositional first-person visibility feature without changing deterministic visibility or occlusion rules.
- Change: replaced the full-frame lit floor/ceiling and terminal rectangle with distance-indexed nested visibility planes. Near, middle, and far planes use discrete attenuation; open terminal cells become black apertures; unmodeled space remains background void; tapered side planes frame black side-passage space.
- Browser: captured `visibility-depth-1.png`, `visibility-depth-2.png`, `visibility-depth-3.png`, and `visibility-depth-max.png` at 1280x720 from fresh tabs using deterministic input sequences; captured `darkness-combat.png` after entering combat. Console errors: 0.
- Checks: `npm test` passed (7 tests); `npm run typecheck` passed; `npm run build` passed with the existing Phaser chunk-size warning; fidelity ledger recorded in `harness/fidelity/phase-5-darkness.json`.

## Surface treatment

- Scope: add restrained, deterministic 2D dungeon surface variation to the first-person Phaser renderer without changing simulation or projection geometry.
- Change: added perspective-quad surface marks for near and middle-depth ceiling, floor, side, and blocked-wall planes. Mark density drops to zero at far depth; no image textures, particles, or simulation changes were introduced.
- Browser: fresh initial-state capture `surface-before.png` and after-state capture `surface-after.png` at 1280×720; blocked-wall capture `surface-after-blocked.png` after ArrowLeft. The large planes remain dominant and the marks remain readable but subordinate at thumbnail scale.
- Checks: `npm test` passed (7 tests); `npm run typecheck` passed; `npm run build` passed with the existing Phaser chunk-size warning; browser console reported 0 errors and 0 warnings.

## Phase 6

- Scope: structural reset of the first-person dungeon projection to an explicit nested portal-frame model; no new art, textures, props, particles, lighting, UI, monsters, or animation.
- Change: added pure normalized portal frames D0–D4 and interval quad construction in `src/game/portalProjection.ts`; renderer now draws far-to-near ceiling, floor, and side-wall/opening quads for each cell and places blocked front planes at the exact portal depth; derived forward visibility now exposes four cells.
- Fixtures: added deterministic URL-selected render fixtures for wall depth 1/2/3, straight corridor, left opening depth 1/2, right opening depth 1, T intersection, four-way intersection, and corridor darkness.
- Browser: Chromium Playwright at 1280×720 captured `portal-wall-1.png`, `portal-wall-2.png`, `portal-wall-3.png`, `portal-straight-corridor.png`, `portal-left-opening-1.png`, `portal-left-opening-2.png`, `portal-right-opening-1.png`, `portal-t-intersection.png`, `portal-four-way-intersection.png`, `portal-corridor-darkness.png`, and `portal-gameplay-combat.png`; visual inspection confirmed nested contraction, exact wall depth, floor/ceiling bands, and dark apertures. Console errors: 0.
- Checks: `npm test -- --run` passed (9 tests); `npm run typecheck` passed; `npm run build` passed with the existing Phaser chunk-size warning.

## Perspective debug overlay

- Scope: developer-only visual inspection aid; normal play remains unchanged unless `perspectiveDebug=1` is explicitly present in the URL.
- Change: `MainScene` now outlines D1–D4 and labels the portal surfaces (`LEFT WALL`, `RIGHT WALL`, `FLOOR`, `CEILING`) plus the active termination (`FRONT WALL` or `OPENING`).
- Browser: maximum-depth fixture captured at 1280×720 as `perspective-debug-corridor.png`; visual inspection confirmed all D1–D4 outlines and expected labels. Browser console errors: 0.
- Checks: `npm test -- --run` passed (9 tests); `npm run typecheck` passed; production build pending final rerun.

## Phase 03 renderer implementation

- Change: extracted deterministic framework-independent primitive generation to `src/renderer/perspective/perspectiveRenderer.ts`; Phaser now consumes normalized render primitives instead of calculating side topology itself.
- Change: added serializable open/closed door entries to the compact simulation model, including closed-door movement/occlusion behavior and renderer fixtures. Added a centralized 140 ms presentation-only transition with bounded input rejection.
- Tests: projection/simulation test suite passes (11 tests); typecheck passes. Projection tests cover deterministic signatures, far-to-near ordering, nearest opaque termination, and open/closed doors.
- Browser: Chromium local runtime loaded `?fixture=straight-corridor` and `?fixture=closed-door&perspectiveDebug=1`; canvas measured 1536×864 at the responsive desktop viewport, debug screenshot `phase-03-closed-door-debug.png` captured, ArrowLeft/ArrowRight interaction exercised, and console errors were 0.
- Build: production build passes with the existing Phaser chunk-size warning. Git status/diff verification remains unavailable because the workspace has no `.git` directory.
- Additional browser evidence: `?fixture=open-door` exposed visible depth 4 and an `open-door` depth-1 primitive; ArrowUp advanced the authoritative position from `(0,0)` to `(1,0)` with cardinal east facing and no fractional coordinates. Responsive canvas bounds were 1024×576 at 1280×720, 1280×720 at 1600×900, and 1536×864 at 1920×1080.

## Phase 04 input and gameplay loop

- Scope: playable seeded exploration shell around the existing deterministic simulation and perspective renderer.
- Change: added explicit `moveBackward` and `executeCommand` event results; blocked movement now emits an authoritative `movementBlocked` event. Added centralized keyboard bindings/controller with active/transitioning/paused/menu acceptance states, repeat suppression, focus protection, and arrow-key scroll prevention.
- Change: added seed-entry/generated-seed start UI, compact state-derived HUD (vitality, floor/turn/seed, empty hand/ring slots, feedback), pause/resume panel, and reduced-motion setting. Reduced motion reuses the existing presentation veil at 1 ms instead of 140 ms and does not enter simulation state.
- Tests: `npm test -- --run` passed (18 tests); coverage includes bindings, emission without direct state mutation, active/paused/form/repeat handling, blocked events, backward movement, and deterministic seed flow.
- Browser: Chromium at `http://127.0.0.1:5173/` loaded with no fatal errors; `phase04` entered in the seed textbox without movement; Begin Descent produced reproducible active seed `1960696452`; A then W produced facing `north`, unchanged integer position `(1,1)`, turn `2`, and UI feedback `The way is sealed.`. Escape opened pause; Resume restored the run; Reduced Motion reported `reducedMotion:true` and `transitionDuration:1` through the read-only renderer surface. Console inspection returned 0 errors and 0 warnings.
- Responsive browser sizing: Chromium viewport set to 1280×720, 1600×900, and 1920×1080; the shell remained usable at each representative size.
- Checks: `npm run typecheck` passed; `npm run lint` passed; `npm test -- --run` passed (19 tests); `npm run test:browser` completed its repository-provided manual-phase notice; `npm run build` passed with the existing Phaser chunk-size warning. Static scans found no `Math.random()` in `src/sim` or `src/renderer`, and no Phaser imports there. Git status/diff remains unavailable because this workspace has no `.git` directory.

## Phase 7 renderer-neutral scene/material contract

- Scope: separate portal geometry/topology from renderer-neutral material and presentation metadata; no simulation rules or gameplay mechanics changed.
- Change: `projectDungeon()` now returns a `SceneDescription` of primitives with independent normalized geometry, source cell, material ID, light level, and seed/floor/cell/surface-derived variation. Added material registry and original 8×8 surface atlas metadata/source for crypt stone, burial masonry, basalt, timber/iron doors, floor, ceiling, and darkness.
- Tests: `npm test -- --run` passed (29 tests); projection tests cover deterministic signatures, far-to-near ordering, opaque termination, and geometry equality across different seeds while metadata varies. Material tests cover atlas-region completeness and role selection.
- Checks: `npm run typecheck` passed; `npm run lint` passed; `npm run build` passed with the existing Phaser chunk-size warning. Static scan found no `Math.random()` or Phaser imports in `src/sim` or `src/renderer`.
- Browser: fallback Playwright inspection at `http://127.0.0.1:5173/?fixture=straight-corridor` confirmed WebGL context, 1280×720 canvas, visible depth 4, and 0 console errors/warnings; `?fixture=closed-door&perspectiveDebug=1` confirmed depth-1 front closed-door termination and 0 console errors/warnings. Fresh base-route inspection clicked Begin Descent, pressed ArrowUp, and observed integer position `(1,1)`, turn `1`, and the existing Ashbound Warden encounter. Captures: `phase-07-straight-corridor.png`, `phase-07-closed-door.png`.

## Phase 05 combat, inventory, and content

- Change: added typed item/monster definitions, deterministic weighted loot tables, registry validation, serializable xorshift32 state, runtime item IDs, monster IDs, left/right equipment references, bounded ring inventory, consumable use, pickup/drop, and authoritative combat events.
- Tests: `npm test -- --run` passed (25 tests); `npm run typecheck` and `npm run lint` passed. New tests cover content duplicates/references/ranges/loot shape, hand attacks, retaliation, invalid actions, ring wrap/use, and JSON encounter continuation.
- Browser: local Chromium flow at `http://127.0.0.1:5174/?v=5` started the seeded run, entered the Ashbound Warden after `ArrowUp`, resolved deterministic combat after waiting for the movement transition, reduced vitality to 9, defeated the monster, exposed deterministic loot `item-loot-5`, picked it up with P, and rotated the ring with E. Read-only inspection showed integer coordinates, null encounter, ring length 3, empty loot, and 0 console errors. Encounter silhouette and combat HUD were visible in the running canvas.
- Build: `npm run build` passed with the pre-existing Phaser chunk-size warning. `npm run test:browser` remains a repository-provided manual notice rather than an automated suite. Git verification unavailable because no `.git` directory exists.

## Harness learning

- Evidence: `npm run test:browser` retained stale Phase 1 wording across later
  phases and was repeatedly accompanied by separately performed Chromium checks.
- Change: added `docs/TESTING_STRATEGY.md` with the browser-verification contract
  and changed the script message to state explicitly that it is not automated.
- Verification: `npm run test:browser`, a package-script assertion, and
  `git diff --check` passed. Existing application tests/typecheck/build had
  already passed before this docs/script-only change.

## Phaser 4.2.1 WebGL migration

- Scope: migrate the presentation foundation from Phaser 3.90.0 forced Canvas to Phaser 4.2.1 with explicit WebGL, without changing the authoritative simulation model or pseudo-3D portal projection.
- Change: pinned `phaser` and the lockfile to `4.2.1`; set `src/main.ts` to `Phaser.WEBGL`; adapted Phaser 4 graphics point inputs to `Phaser.Math.Vector2` at the scene boundary. No `src/sim/` imports or rules changed for the migration.
- Documentation: updated `docs/ARCHITECTURE.md`, added `docs/RENDERING_SPEC.md`, and recorded the approved migration in `docs/DECISIONS.md`.
- Baseline: before migration, typecheck, lint, and 26 tests passed on the existing Phaser 3 worktree.
- Checks: `npm run typecheck` passed; `npm run lint` passed; `npm test` passed (7 files, 26 tests); `npm run build` passed with the existing Vite chunk-size warning; `npm run test:browser` passed as the documented manual-phase notice; structural scan confirmed no Phaser import or `Math.random()` in `src/sim/` and no `Phaser.CANVAS` production config.
- Browser: isolated Chromium run against `http://127.0.0.1:5173/` at 1280×720 confirmed the canvas context is `webgl` (1280×720), menu start works with seed `7391`, ArrowUp enters the Ashbound Warden encounter with integer position `(1,1)`, Space combat input is accepted, Escape opens pause, Resume restores active mode, Reduced Motion reports transition duration `1`, and console/page errors are empty.

## Phase 8 textured portal surfaces

- Scope: replace production dungeon surface fills with Phaser 4 Mesh2D textured triangles while preserving renderer-neutral portal topology, canonical simulation state, door treatment, and perspective debug inspection.
- Change: `MainScene` preloads the original 64×8 dungeon atlas and creates one Mesh2D per projected primitive using two indexed triangles, four inset atlas UV corners, nearest-neighbor pixel-art configuration, and presentation-only depth tinting. Graphics remains only for boundary/debug strokes. The atlas swatches received restrained contrasting pixel marks so the original low-resolution material identities remain visibly textured when projected.
- Tests/checks: `npm run typecheck` passed; `npm run lint` passed; `npm test` passed (9 files, 31 tests); `npm run build` passed with the existing Vite Phaser chunk-size warning; `npm run test:browser` truthfully reported that no automated browser suite is configured; `git diff --check` passed. Mesh UV tests cover atlas-region inset coordinates, projected-corner preservation, and indexed quad triangles. Source scan found no `fillPoints`, `Phaser.CANVAS`, or Phaser imports in simulation/renderer-neutral code.
- Browser: Chromium at 1280×720 loaded `?fixture=straight-corridor`, `?fixture=wall-2`, `?fixture=left-opening-1`, and `?fixture=closed-door&perspectiveDebug=1`; each reported a WebGL canvas. Renderer inspection confirmed visible depth 4 for the open corridor, depth 2 with a front wall for the terminating-wall fixture, side-opening topology for the side-wall fixture, and depth 1 with `front:closed-door` for the door fixture. Screenshots: `phase-08-straight-corridor-final.png`, `phase-08-terminating-wall-final.png`, `phase-08-side-opening-final.png`, and `phase-08-closed-door-debug-v3.png`. Console inspection on the final door/debug route reported 0 errors and 0 warnings. Visual inspection showed contrasting atlas marks on floor, ceiling, side walls, and the timber/iron door while nested portal frames and blockers remained readable.

## Phase 9 art-directed portal perspective

- Scope: re-art-direct normalized portal frames, logical viewport composition, and depth attenuation without changing authoritative simulation, visibility rules, or primitive topology.
- Change: `PORTAL_FRAMES` now uses a large near frame, aggressive D1–D4 contraction, restrained lateral/horizon irregularity, and strict normalized nesting. `MainScene` uses a larger logical viewport (`72px` horizontal/vertical inset, `140px` lower shell lane). Renderer-neutral light levels are `[1.00, 0.68, 0.36, 0.14]` so distant geometry falls toward silhouette.
- Acceptance/context: `harness/build/phase-09-acceptance.md` and `harness/context/phase-09-art-directed-perspective-context.md`; fidelity ledger: `harness/fidelity/phase-09-art-directed-perspective.json`.
- Browser: local Vite at `http://127.0.0.1:5175/`; fresh Chromium fixture captures at 1280×720: `art-directed-straight-1280.png`, `art-directed-wall-1280.png`, `art-directed-left-1280.png`, `art-directed-door-1280.png`; straight corridor also at 1920×1080: `art-directed-straight-1920.png`. All reported WebGL canvas and 0 application errors. Headless screenshot capture emitted GPU `ReadPixels` performance warnings on one straight-corridor capture; no app warning was observed. Fixture state remained deterministic: straight depth 4, wall depth 2/front wall, side opening depth 1, closed door depth 1/front closed door. Visual review confirmed larger enclosing near walls, dominant first portal, compressed readable depth, dark far aperture, and readable blocker/door/debug geometry.
- Checks: `npm test -- --run` passed (9 files, 31 tests); `npm run typecheck` passed; `npm run lint` passed; `npm run build` passed with the existing Vite Phaser chunk-size warning; `npm run test:browser` remains the documented manual-phase notice; `git diff --check` passed.

## Phase 10 perspective-aware entity billboards

- Scope: render canonical state-backed encounters as perspective-scaled first-person billboards while preserving portal topology, deterministic simulation, and the no-unsupported-gameplay constraint.
- Change: added pure `projectEntities()` and `EntityBillboard` contracts with integer depth/lateral projection, portal-frame scaling, stable far-to-near ordering, nearest opaque wall/closed-door filtering, and presentation-only two-frame selection. `MainScene` adapts the active encounter and renders the original low-resolution Ashbound Warden spritesheet; absent encounter state produces no entity sprite.
- Tests: `npm test -- --run` passed (10 files, 35 tests); entity tests cover canonical depth, deterministic order/scale, wall and closed-door occlusion, and animation/state isolation. `npm run typecheck`, `npm run lint`, and `npm run build` passed. Build retains the existing Vite chunk-size warning.
- Browser: standalone Chromium at `http://127.0.0.1:5176/`, 1280×720, seed `42`; Begin Descent then ArrowUp produced `encounter.id=monster-warden-1`, `entities=[{definitionId:ashbound-warden,depth:1,lightLevel:1}]`, and a visible pixel-art Warden billboard. Three Space attacks deterministically defeated it and produced `encounter:null`, `entities:[]`, and loot `item-loot-4`; ArrowRight then changed facing to south with no entity. Encounter and defeated captures: `entity-encounter-1280.png`, `entity-defeated-1280.png`. Page/console errors: 0.
- Documentation: updated `docs/RENDERING_SPEC.md`, `docs/ART_DIRECTION.md`, `docs/ARCHITECTURE.md`, `harness/build/entity-billboard-acceptance.md`, and added `harness/context/phase-10-entity-billboards-context.md`.

- Delivery: committed as `7aa916d` on `feature/entity-billboards`, pushed, opened PR #9 targeting `main`, and squash-merged. GitHub reports merge commit `9413b59c1b3ff6391ca5bc3128ca4d075125dccc`; local `main` and `origin/main` both resolve to that SHA. No GitHub Actions workflows or required remote checks are configured.

## Asset source downloader

- Added `project-tarmin-asset-source-downloader/` as the durable source-gathering tool. Its PowerShell workflow was run for the current CC0/public-domain source set; downloaded archives, copied manifests, and the generated source bundle are present as local staging material.
- Kept scripts, manifests, expected files, README, and license notes versionable while ignoring generated `downloads/` and `project-tarmin-source-packs.zip`. Added `docs/ASSET_SOURCE_WORKFLOW.md` and harness context so future asset needs can extend both download scripts with synchronized provenance records.

## Phase 11 WebGL atmosphere and lighting

- Scope: add a presentation-only atmosphere stack after textured portal materials: deterministic depth tint remains in the scene projection, a low-alpha warm torch pool is drawn before entities, localized edge fog follows entities, and Phaser 4 external camera filters provide restrained color grading and vignette. No authoritative simulation, visibility, RNG, movement, encounter, or save behavior changed.
- Compatibility fix: Phaser 4.2.1 did not process the existing SVG as a spritesheet in Chromium. The billboard adapter now loads the same two-frame SVG as an image and crops the selected 32×48 frame, preserving presentation-only timing and asset content.
- Browser evidence: Chromium at 1280×720 on `http://127.0.0.1:5173/?fixture=wall-1` showed near textured material with torch center and readable blocker; `?fixture=straight-corridor` showed the compressed dark corridor; the seeded base flow (`7391`, Begin Descent, ArrowUp) showed the Ashbound Warden at depth 1 during the 140 ms transition; four Space strikes produced `encounter:null`, `entities:[]`, and loot `item-loot-5`; Escape plus Reduced Motion reported `reducedMotion:true`, `transitionDuration:1`, and the atmosphere metadata remained enabled. Screenshots: `harness/evidence/phase-11-atmosphere-near.png`, `phase-11-atmosphere-straight.png`, `phase-11-atmosphere-encounter.png`, and `phase-11-atmosphere-defeated.png`. WebGL context was confirmed; the final encounter/reduced-motion browser session had 0 errors and 0 warnings.
- Checks: `npm run typecheck` passed; `npm run lint` passed; `npm test` passed (10 files, 35 tests); `npm run test:browser` truthfully reported no automated browser suite; `npm run build` passed with the existing Vite chunk-size warning. Deterministic simulation and entity projection tests remained green. The uncommitted deletion of `public/assets/entities/ashbound-warden.svg` was preserved and is not part of this phase.
- Acceptance: `harness/build/phase-11-atmosphere-acceptance.md` records A1–A9 as passed. PRs #12, #13, and #14 were squash-merged; local `main` and `origin/main` matched at final verification.

## Phase 12 Phaser bundle chunking

- Scope: remove Vite's production chunk-size warning without changing gameplay or Phaser runtime behavior.
- Change: added `vite.config.ts` with a dedicated `phaser` vendor chunk and an 1800 kB warning threshold matching Phaser 4.2.1's intentional monolithic browser distribution. Application code is now independently cacheable at approximately 29 kB; the Phaser vendor chunk is approximately 1.68 MB.
- Checks: `npm run typecheck`, `npm run lint`, `npm test`, and `npm run build` passed. Production build completed with no chunk-size warning. `npm run test:browser` remains the documented manual-browser-verification notice; no browser-visible behavior was changed.

## Phase 13 Warden asset restoration

- Restored the tracked, project-authored `public/assets/entities/ashbound-warden.svg` that the worktree had deleted while `MainScene` continued to load it. The two-frame 64×48 sheet matches the existing 32×48 billboard crop contract; no renderer fallback or gameplay change was introduced.
- Checks: `npm run typecheck`, `npm test` (10 files, 35 tests), and `npm run build` passed. Local Vite served `/` with HTTP 200 and served the Warden SVG with HTTP 200, `image/svg+xml`, and two animation frames. In-app browser connection was unavailable because its endpoint refused connection, so no new browser-visible/console-error claim is made here.

## Phase 14 interface composition

- Scope: redesign the shell so the textured first-person dungeon is the dominant experience, with compact state-derived vitality, hand equipment, ring, location/facing, feedback, and encounter information across menu, exploration, combat, and pause.
- Change: moved status and combat presentation out of sparse Phaser text into a responsive HTML/CSS instrument panel; retained authoritative state in `src/sim/` and existing event/command boundaries. Added shared visual language for menu/pause, explicit accessible labels/live feedback, focus-preserving pause, reduced-motion preference handling, and target/larger desktop layout rules. Removed non-debug in-world HUD labels from `MainScene`; added a guarded presentation transition timeout fallback.
- Documentation: added `docs/INPUT_AND_UI.md`, extended `docs/ART_DIRECTION.md`, and added `harness/build/phase-14-interface-composition-acceptance.md`.
- Browser: fresh Chromium-compatible Playwright session at `http://127.0.0.1:5173/`; 1280×720 menu and active HUD, seeded `7391` ArrowUp encounter, pause/resume focus, reduced motion, and 1600×900/1920×1080 responsive snapshots exercised. Canvas measured 1229×691 at 1280 and 1760×990 at 1920. Encounter showed the visible Ashbound Warden with a compact 5/5 threat card. Console had 0 errors and 0 warnings. Browser output screenshots: `phase-14-combat-1280.png`, `phase-14-pause-1280.png`, `phase-14-combat-1920.png`.

## Phase 15 visual pipeline hardening

- Branch: `feature/phase-15-visual-pipeline`; baseline `main` was clean at `b5ae662`.
- Change: atlas UV lookup now resolves the material registry's `atlasRegion`; torch warmth is a semantic palette token; state-change rendering destroys transient display objects and clears entity references; billboard crop frames are passed from the update-time presentation clock; explicit display depth keeps near billboards above far ones.
- Checks: baseline and post-change `npm run typecheck`, `npm run lint`, `npm test` (35 tests), and `npm run build` passed. `npm run test:browser` exited 0 with its documented manual-browser notice. Structural scan found explicit `Phaser.WEBGL`, Mesh2D production surfaces, no `fillPoints`, no `Phaser.CANVAS`, no `performance.now()`, no Phaser imports in simulation/renderer-neutral code, and no `Math.random()` in authoritative code.
- Browser: fresh Chromium at `http://127.0.0.1:5174/`, device scale 1, seed 7391. At 1280×720, straight corridor reported WebGL and visible depth 4; wall/door/opening fixtures reported correct front termination; fresh Begin + ArrowUp showed the Warden at depth 1; paced Space combat ended with `encounter:null`, `entities:[]`, and loot; Escape and reduced-motion reported paused mode, checked reduced motion, and 1 ms transition duration. At 1600×900 and 1920×1080, the internal canvas remained 1280×720 with WebGL and corridor depth 4. Reviewed sessions had no application console errors.
- Evidence: `harness/build/phase-15-visual-pipeline-acceptance.md`, `harness/fidelity/phase-15-visual-pipeline.json`, and browser captures named in the acceptance record.

- Delivery: PR #17 targeting `main` was squash-merged at `b9bb4ef7f13ba797ec0ac42f2cfa4ef7ea3b9e41`; local `main` was fast-forwarded and matched `origin/main`. No remote checks are configured.

## Persistent dungeon-world model

- Scope: replace coordinate-triggered fixture spawning with explicit persistent monster instances and location-bearing world items, while retaining the current active-encounter presentation/input projection.
- Baseline: clean `main`; `npm test -- --run` passed with 35 tests; typecheck, lint, browser-status, and build passed. The browser-status command remains a manual verification notice. The routed `GAME_DESIGN.md`, `CONTENT_MODEL.md`, and `DETERMINISM_AND_SAVE.md` documents were absent at baseline.
- Change: `GameState.monsters` now stores stable monster ID, definition ID, integer position, health, and defeated state. Movement queries undefeated instances. Combat synchronizes health/defeat to the world record before clearing active combat. Uncollected loot item instances carry a dungeon position until pickup; dropped items use the player's current position.
- Focused verification: `npx vitest run src/sim/dungeon-world.test.ts src/sim/state.test.ts src/sim/combat-inventory.test.ts` passed (3 files, 19 tests). Full `npm test -- --run` passed (11 files, 39 tests). Typecheck, lint, `npm run test:browser`, and build passed.
- Structural verification: `git diff --check` passed; simulation source has no Phaser imports, no `Math.random()`, and no coordinate encounter factory. State JSON round-trip and deterministic combat tests passed.
- Browser: `npm run dev -- --host 127.0.0.1` served `http://127.0.0.1:5173/`. Disposable Playwright Chromium at 1280×720 exercised a fresh seed-7391 flow: Begin Descent, ArrowUp entered `monster-warden-1` with one visible entity, four Space attacks produced `encounter:null`, `entities:[]`, and `loot:["item-loot-5"]`; `p` moved the item into the ring; ArrowUp/ArrowDown/ArrowUp revisited `(2,1)` with no encounter and no entity. Browser captures: `harness/evidence/persistent-world-browser-menu.png`, `persistent-world-browser-corridor.png`, `persistent-world-browser-exploration.png`, `persistent-world-browser-encounter.png`, `persistent-world-browser-defeated.png`, and `persistent-world-browser-revisit.png`. Both browser runs reported zero application console errors and zero page errors.
- Documentation: updated `docs/ARCHITECTURE.md`, `docs/DECISIONS.md`, `docs/TESTING_STRATEGY.md`; added `docs/CONTENT_MODEL.md` and `docs/DETERMINISM_AND_SAVE.md`; added `harness/build/persistent-dungeon-world-acceptance.md`.
- Delivery: not started. The goal remains active until the browser lane passes, focused branch/PR/merge are completed, and merged-main is independently verified.

- Final delivery: PR #19 was squash-merged to `main` at `91ace85`; local `main` and `origin/main` match and the worktree is clean. Merged-main rerun passed `npm run typecheck`, `npm run lint`, `npm test` (39 tests), `npm run test:browser` (documented manual status), and `npm run build`. Fresh merged-main Chromium verification reported encounter `monster-warden-1` with one entity, post-defeat `encounter:null`/zero entities/loot, revisit at `(2,1)` with no encounter/entity, and zero page/application errors.

- Run lifecycle goal (2026-09-05): added canonical `GameState.runStatus` with
  `playing`, `defeated`, and `victorious`; defeat now clears combat, emits
  `runDefeated`, and rejects all later commands without changing state. Added
  `completeRun()` as the future dungeon-objective victory hook and `restartRun()`
  for clean seeded restarts. MainScene now maps terminal state to disabled input
  modes and prioritizes terminal/defeat/monster-defeat/loot feedback. The shell
  presents clear defeat/victory panels with same-seed and new-seed restart paths.
  Added reproducible `?fixture=defeated` and `?fixture=victorious` presentation
  fixtures only; they do not alter authoritative transitions.
- Focused verification: `npm test -- --run` passed (11 files, 44 tests);
  `npm run typecheck` passed; `npm run lint` passed; `npm run build` passed;
  `npm run test:browser` passed as the documented no-automated-suite status
  notice. The production build emitted no chunk warning.
- Chromium evidence (Playwright Chromium, fresh pages, 1280x720, WebGL):
  `?fixture=defeated` reported `mode=defeated`, `runStatus=defeated`, health 0,
  visible terminal title `THE TORCH GUTTERS`, both restart buttons, and no
  console/page errors. Pressing W left turn 0 unchanged. Same-seed restart
  returned seed 7391, `mode=active`, `runStatus=playing`, health 10, turn 0;
  new-seed restart returned a distinct generated seed and the same clean active
  state. `?fixture=victorious` reported `mode=victorious`,
  `runStatus=victorious`, title `THE UNDERCRYPT YIELDS`, and no errors.
  Normal flow (Begin Descent, ArrowUp, four Space attacks) showed the Warden
  encounter, then `encounter=null`, loot `item-loot-5`, and feedback
  `The guardian falls. Loot waits nearby.` with no errors. Screenshots:
  `harness/evidence/run-lifecycle-defeated.png`,
  `harness/evidence/run-lifecycle-victorious.png`, and
  `harness/evidence/run-lifecycle-loot.png`.

- Complete one-floor run (2026-09-05): replaced the unconditional victory hook
  with canonical objective state. The Ashbound Warden now deterministically
  yields the Star-Forged Seal; pickup records possession; exit `(2,4)` emits a
  locked-exit event and remains `playing` without the seal; entering it with
  the seal records objective completion and `victorious`. Terminal input stays
  disabled and the existing same-seed/new-seed restart paths remain authoritative.
- Focused verification: `npm test -- --run` passed (12 files, 48 tests),
  including objective gating, successful completion, seal pickup, terminal
  blocking, and restart coverage. `npm run typecheck`, `npm run lint`,
  `npm run test:browser` (documented manual status), `npm run build`, and
  `git diff --check` passed.
- Chromium evidence: fresh Playwright Chromium at `http://127.0.0.1:5173/`,
  1280×720, WebGL, zero page errors. No-seal route
  `Begin Descent → Right/Up/Up/Left/Up/Right/Up` reached `(2,4)` with
  `runStatus=playing`, `objective.acquired=false`, and feedback
  `The exit rejects you. Find the Star-Forged Seal.`. Complete route
  `Begin Descent → ArrowUp → four Space attacks → P → Right/Up/Up/Left/Up/Right/Up`
  reached `(2,4)` with `mode=victorious`, `objective.complete=true`, visible
  `RUN COMPLETE` panel, and victory feedback. Same-seed restart returned
  `mode=active`, `runStatus=playing`, turn 0, health 10, and no objective.
  Screenshots: `harness/evidence/run-objective-locked.png` and
  `harness/evidence/run-objective-victorious.png`.

## MVP content population

- Branch: `feature/mvp-content-population`; baseline `main` was clean at
  `f2465e2`.
- Change: integrated the existing Glass Mireling into live content, added the
  original Gloam Scavenger definition, seven fixed persistent monster records,
  six useful item definitions across four roles, weighted seeded loot tables,
  and a fixed two-cell east branch so added encounters are reachable. Warden
  Seal loot and the existing `(2,4)` objective route remain unchanged.
- Focused verification: content/world tests passed; the complete suite passed
  50 tests. `npm run typecheck`, `npm run lint`, `npm run test:browser`,
  `npm run build`, and `git diff --check` passed. `test:browser` emitted its
  documented no-automated-suite notice. Structural scans found no
  `Math.random()` or Phaser imports in `src/sim`/`src/renderer`.
- Browser: fresh Chromium at `http://127.0.0.1:5174/`, 1280×720, WebGL,
  zero console errors/warnings. The populated east branch showed
  `monster-mireling-3` and `monster-scavenger-2`; Mireling defeat produced
  world loot at `(4,3)`, pickup moved it to the ring, and revisit showed no
  encounter/entity. Fresh Warden route defeated the guardian, picked up the
  Seal, and reached `(2,4)` with `runStatus=victorious` and
  `objective.complete=true`.
- Evidence: `harness/evidence/mvp-population-mireling.png`,
  `mvp-population-scavenger.png`, and `mvp-population-victorious.png`.
- Delivery: local acceptance rows CP-01 through CP-10 passed. CP-11 and CP-12
  remain pending until focused branch delivery and merged-main verification.

## MVP content population delivery closeout

- Commit `5196795` was pushed on `feature/mvp-content-population` and PR #22
  was opened against `main`.
- PR #22 reported no configured remote checks and was squash-merged as
  `e8622b9`. Local `main` was fast-forwarded and matches `origin/main`; the
  worktree is clean.
- Merged-main verification repeated typecheck, lint, 50-test suite,
  `test:browser`, build, and diff checks successfully. Fresh Chromium at
  1280×720/WebGL completed seed `7391` through Warden defeat, Seal pickup, and
  exit victory at `(2,4)` with `objective.complete=true` and zero console
  errors/warnings.
- Acceptance rows CP-01 through CP-12 pass.

## MVP browser acceptance gate

- Branch: `feature/mvp-browser-acceptance`; baseline `main` was clean.
- Change: replaced the informational `test:browser` echo with Playwright
  Chromium automation, added a focused Playwright config and Vitest browser-test
  exclusion, and added the deterministic `combat-defeat` acceptance fixture.
- Browser coverage: seed `7391` completed the Warden defeat/revisit, Seal loot
  pickup, Moss Tonic use, right-hand equipment, Glass Mireling encounter and
  defeat, exit victory, terminal input blocking, and same-seed restart. The
  defeat flow entered the Warden from 1 vitality, reached `runStatus=defeated`,
  verified terminal input blocking, and restarted to a clean playing state.
  Both flows collected zero application console errors and zero page errors.
- Clean-install verification: `npm ci` passed after stopping a stale project
  Vite process that held esbuild on the first attempt; `npx playwright install
  chromium` passed.
- Final checks from the clean install: `npm run typecheck` passed, `npm run lint`
  passed, `npm test` passed (12 files, 50 tests), `npm run test:browser` passed
  (2 tests), `npm run build` passed, and `git diff --check` passed. Build output
  retained the existing Phaser vendor chunk behavior; npm reported five audit
  findings (3 moderate, 1 high, 1 critical), not introduced by the browser
  suite.
- Manual visual review remains separate and is still required for atmosphere,
  supported resolutions, reduced motion, and other experiential claims.
- The repository references `docs/engineering/version-control.md`, but that
  file is absent; delivery follows the explicit root AGENTS.md PR policy.

## Asset Integration Phase 1 — Environment Atlas

- Change: replaced the placeholder 8×8 SVG surface strip with
  `public/assets/dungeon/dungeon-surfaces.png`: a 136×68 production atlas with
  eight padded canonical 32×32 regions. Semantic material IDs, UV architecture,
  Mesh2D projection, geometry, depth lighting, fog, grading, visibility, and
  simulation remain unchanged. `MainScene` now loads the PNG image; the obsolete
  SVG was removed.
- Provenance: `derive_dungeon_atlas.ps1` samples the approved staged CC0 Tiny
  Texture Pack 2 archive into a 16px logical texture, applies Project Tarmin
  palette/contrast/tiling treatment, scales it 2× nearest-neighbor, and copies
  a one-pixel gutter. `DUNGEON_ATLAS_DERIVATION.json` records source inputs and
  hashes. Source SHA-256:
  `036589D7D59F72445C0B0AC54403B9DAD36F915CB7039576BBE78F98E772B8A6`;
  repeatable output SHA-256:
  `56D6319879F32373B91E149ED29CAFADC95C892222BF68D27A543BCC8856A7B8`.
  Raw source remains staging-only and outside the browser build.
- Verification: focused material/UV tests passed (2 files, 6 tests); full
  `npm run typecheck`, `npm run lint`, `npm test` (12 files, 52 tests),
  `npm run test:browser` (2 tests), `npm run build`, and `git diff --check`
  passed.
- Chromium review: WebGL fixtures at 1280×720, 1600×900, and 1920×1080 kept
  the 1280×720 logical canvas and showed readable near masonry, compressed
  middle/far frames, a near blocker, a closed door, and a side opening. Captures:
  `harness/evidence/asset-atlas-corridor-1280.png`,
  `asset-atlas-blocker-1280.png`, `asset-atlas-door-1600.png`,
  `asset-atlas-opening-1600.png`, and `asset-atlas-deep-view-1920.png`.
  There were no application console errors or page errors. Chromium reported
  four screenshot-time WebGL GPU-stall messages only on the first capture.
