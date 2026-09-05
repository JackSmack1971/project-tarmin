# Project Tarmin

Project Tarmin is an original browser-playable first-person grid dungeon game.
It uses a deterministic TypeScript simulation and a Phaser 4.2.1 WebGL
presentation layer with textured portal geometry, pixel-art materials,
state-backed entity billboards, and a compact HTML HUD.

Run `npm install`, install Chromium with `npx playwright install chromium`, and
use `npm run test:browser` for the deterministic MVP Playwright smoke suite.
Run `npm run dev` for manual visual review at 1280x720, 1600x900, and
1920x1080. Checks are `npm run typecheck`, `npm run lint`, `npm test`,
`npm run test:browser`, and `npm run build`.

The MVP is one complete deterministic floor: defeat the Ashbound Warden, pick
up the Star-Forged Seal, explore the fixed east branch with Glass Mirelings and
Gloam Scavengers, reach exit `(2,4)`, and enter it to complete the run. Seven
persistent monster instances and six useful item definitions exercise the
combat, loot, and inventory loop; defeated enemies do not respawn and ground
loot stays at its dungeon position until pickup. The exit remains locked
without the seal; victory disables normal gameplay and offers same-seed or
new-seed restart.
