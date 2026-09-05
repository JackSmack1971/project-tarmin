# Phase 15 visual pipeline context

- Branch: `feature/phase-15-visual-pipeline`.
- Baseline `main` was clean and all existing checks passed before edits.
- Phaser 4.2.1 is explicitly configured as `Phaser.WEBGL`; logical game resolution is 1280×720 and CSS FIT scaling serves larger 16:9 desktop viewports.
- `MATERIALS[material].atlasRegion` is now the source used by UV generation. The atlas remains the original project-authored low-resolution SVG.
- MainScene clears and destroys transient display objects on state changes and clears the entity map before rebuilding it; frame selection is supplied from the update-time presentation clock, never read during state rendering.
- Billboard depth is explicit and near entities sort above far entities independent of display-list insertion details.
- Browser evidence used fresh Chromium pages at `http://127.0.0.1:5174/`, seed 7391, device scale 1, and no application console errors were observed in the reviewed sessions. GPU screenshot warnings, if emitted by headless capture, are environment noise and must not be called application errors.
- Remote PR/merge is still required before completion.
