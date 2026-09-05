# Definition of done

A browser-visible renderer change is done only when the authoritative simulation remains framework-independent and deterministic, the production build uses the documented WebGL path, focused and project checks pass, and a fresh Chromium run verifies every affected state at representative supported resolutions. Visual claims require runtime captures or inspection; `npm run test:browser` is only a status notice until an automated suite replaces it.

For Phase 15, done additionally requires corridor, wall, doorway, turning/opening, blocked movement, encounter/combat/defeat, pause, and reduced-motion evidence, current renderer/art/UI/testing documentation, and verification of the merged result on `main`.

For the run-lifecycle goal, done additionally requires authoritative terminal
defeat and victory states, post-terminal command blocking, deterministic same-seed
restart, new-seed restart, terminal input/UI evidence, and feedback coverage for
later defeat and loot events.
