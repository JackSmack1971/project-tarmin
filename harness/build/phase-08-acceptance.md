# Phase 8 — Textured portal surfaces acceptance

| ID | Requirement | Evidence | Pass condition |
| --- | --- | --- | --- |
| P8-1 | Preserve portal topology and canonical state | `npm test`, perspective signatures, source inspection | Projection primitives and occlusion order remain unchanged; no simulation edits are needed. |
| P8-2 | Use textured Mesh2D triangles/quads in production WebGL | typecheck/build plus `MainScene` inspection | Atlas is loaded and every dungeon primitive is rendered with Mesh2D vertices/UVs; no production `fillPoints()` surface path remains. |
| P8-3 | Map original pixel-art material identities | material/mesh tests and browser captures | Atlas regions are selected by material ID, UVs are inset to prevent bleeding, sampling is pixel-art appropriate, and doors/openings are visibly distinct. |
| P8-4 | Retain spatial readability and debug inspection | browser captures for corridor, terminating wall, side walls, closed door, and `perspectiveDebug=1` | Nested portal geometry, blockers, passage darkness, and debug labels remain readable with no topology change. |
| P8-5 | Pass repository checks | exact project commands | typecheck, lint, tests, browser status, and build all pass; browser status is supplemented by actual Chromium evidence. |
| P8-6 | Complete Git delivery | branch/PR/check/merge inspection | Goal changes are committed on a feature branch, PR targets `main`, required checks pass, and the merged commit is present on `main`. |

Browser evidence must record the route, viewport, input/state, WebGL context, console result, and screenshot paths in `harness/build-log.md`.
