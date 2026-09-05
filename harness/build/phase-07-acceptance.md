# Phase 7 acceptance — renderer-neutral scene/material contract

| ID | Requirement | Verification | Expected evidence | Status |
| --- | --- | --- | --- | --- |
| P7-ARCH-01 | Projection output separates normalized quad geometry from artwork/material metadata. | TypeScript contract inspection and renderer tests | Scene primitives expose geometry, material identity, light level, and stable variation without Phaser imports. | PASS |
| P7-ARCH-02 | `projectDungeon()` remains the spatial source of truth and preserves portal topology/occlusion. | Projection tests and deterministic signatures | Far-to-near ordering, exact front termination, and open/closed door behavior remain covered. | PASS |
| P7-DET-01 | Presentation variation is deterministic and does not use uncontrolled randomness. | Repeated scene-description tests and static scan | Same state produces identical scene/signature; no `Math.random()` in authoritative or renderer code. | PASS |
| P7-MAT-01 | Dungeon surfaces have extensible renderer-neutral material definitions. | Material registry tests | Crypt stone, burial masonry, basalt, timber/iron doors, floor, ceiling, and darkness are registered with atlas regions. | PASS |
| P7-ART-01 | Original low-resolution dungeon surface atlas structure is prepared. | Asset/registry inspection and build | Local original pixel-art atlas source and matching region metadata are present and build-safe. | PASS |
| P7-REG-01 | Existing game remains playable on the Phaser 4 WebGL path. | `npm run typecheck`, `npm run lint`, `npm test`, `npm run build`, browser inspection | Required commands pass; representative corridor and door fixtures render with no console errors. | PASS |
| P7-DOC-01 | Rendering, art, architecture, and implementation evidence are documented. | File inspection | Governing docs and build log contain the contract, art posture, and verification evidence. | PASS |
| P7-VCS-01 | Goal changes are present on `main` through a feature branch and PR. | GitHub/Git inspection | Feature branch commit, PR targeting `main`, no configured remote checks; implementation and acceptance-record PRs merged into `main`. | PASS |


