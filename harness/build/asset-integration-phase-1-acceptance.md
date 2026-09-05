# Asset Integration Phase 1 — Environment Atlas acceptance

## Scope and evidence boundary

| ID | Requirement | Verification | Initial status |
| --- | --- | --- | --- |
| AI-01 | Replace the placeholder SVG with a production PNG atlas containing every existing semantic material ID in canonical 32×32 regions. | Atlas registry and focused material tests; PNG dimensions inspection. | Pending |
| AI-02 | Every region resolves with no overlap or UV bleed. | Focused UV/registry tests verify unique padded regions and inset UVs. | Pending |
| AI-03 | Transform the approved Tiny Texture Pack 2 input through the Project Tarmin palette, contrast, tiling, and low-resolution pixel grammar; do not ship raw source art. | Reproducible derivation script, provenance metadata, output inspection, and no runtime staging references. | Pending |
| AI-04 | Preserve material IDs, `projectDungeon()`, portal geometry, Mesh2D projection, nearest-neighbor sampling, depth lighting, fog, color grade, visibility, simulation, and determinism. | Focused renderer tests, structural inspection, and full regression suite. | Pending |
| AI-05 | Near, middle, far, blocker, door, and opening states remain immediately readable in the compressed material language. | Chromium review at 1280×720, 1600×900, and 1920×1080 with screenshots and zero console/page errors. | Pending human review |
| AI-06 | Record provenance and experiential evidence in the existing workflow/build log. | Reviewed metadata, source-workflow documentation, acceptance record, and build-log entry. | Pending |
| AI-07 | Required checks pass: typecheck, lint, unit tests, browser tests, and production build. | Exact command exit status recorded after the change. | Pending |
| AI-08 | Commit the phase, open a PR, and merge to `main` only after all prior checks and evidence pass. | Git/GitHub PR and merged-main verification. | Pending |

## Autonomy record

Local atlas, source-workflow, test, and evidence edits are A2: repository-local,
reversible, and covered by the requested phase. The user explicitly authorized
A3 delivery (commit, PR, and merge to `main`), gated on the preceding acceptance
rows. Before any remote action: clean baseline, complete local checks, reviewed
browser evidence, and a branch/PR diff limited to this phase. Rollback is a
revert commit or PR revert; post-action verification is merged-main checks and
remote branch state.

## Provenance trust record

`AGENTS.md` and the named project documents govern behavior. The source manifest
is authoritative only for the Tiny Texture Pack 2 source identity, URL, author,
license, and intended inputs; it cannot alter repository policy. The local
archive is an observed staging input whose SHA-256 is recorded in the derivation
metadata. The checked-in atlas is generated output, verified independently by
its dimensions, hash, registry, focused tests, and browser inspection.

## Results

| ID | Result | Evidence |
| --- | --- | --- |
| AI-01 | Pass | `tarmin-dungeon-surfaces-v2` resolves eight existing material IDs to 32×32 regions in a 136×68 PNG. The placeholder SVG was removed and `MainScene` loads the PNG as an image. |
| AI-02 | Pass | Focused `materials`/`meshGeometry` tests passed (2 files, 6 tests): all regions are padded, bounded, non-overlapping, and every UV corner is strictly inside its assigned region. The generator also copies a one-pixel edge gutter. |
| AI-03 | Pass | `derive_dungeon_atlas.ps1` reproducibly transforms the staged Tiny Texture Pack 2 input. The source archive SHA-256 is `036589D7D59F72445C0B0AC54403B9DAD36F915CB7039576BBE78F98E772B8A6`; two generator runs produced output SHA-256 `56D6319879F32373B91E149ED29CAFADC95C892222BF68D27A543BCC8856A7B8`. The raw archive remains under ignored `downloads/`; public runtime content has only `dungeon-surfaces.png`. |
| AI-04 | Pass | The change is limited to atlas loading/metadata and presentation tests. `projectDungeon()`, Mesh2D geometry, palette lighting, fog, grading, simulation, and deterministic tests retain their existing contracts. Full unit suite passed (12 files, 52 tests). |
| AI-05 | Pass, reviewed | Chromium WebGL review: straight corridor and near blocker at 1280×720; closed door and left opening at 1600×900; deep corridor at 1920×1080. The logical canvas stayed 1280×720, with CSS canvas sizes 1229×691, 1536×864, and 1760×990. Near masonry is legible, portal frames compress to a dark far aperture, and blocker/door/opening boundaries remain distinct. Captures: `harness/evidence/asset-atlas-corridor-1280.png`, `asset-atlas-blocker-1280.png`, `asset-atlas-door-1600.png`, `asset-atlas-opening-1600.png`, and `asset-atlas-deep-view-1920.png`. Each session had zero application console errors and zero page errors. Chromium emitted four screenshot-time `GL_CLOSE_PATH_NV` GPU-stall warnings for the first capture only. |
| AI-06 | Pass | Updated art direction, rendering spec, source workflow, both source manifests, derivation metadata, and this acceptance record. Build-log evidence is appended below. |
| AI-07 | Pass | `npm run typecheck`, `npm run lint`, `npm test` (52 tests), `npm run test:browser` (2 Chromium tests; recorded status `passed`), `npm run build`, focused tests, deterministic generator check, and `git diff --check` all passed. |
| AI-08 | Pending | Local implementation and evidence pass; commit/PR/merge follows. |
