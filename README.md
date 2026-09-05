# Project Tarmin

Project Tarmin is an original browser-playable first-person grid dungeon game.
It uses a deterministic TypeScript simulation and a Phaser 4.2.1 WebGL
presentation layer with textured portal geometry, pixel-art materials,
state-backed entity billboards, and a compact HTML HUD.

Run `npm install` and `npm run dev`, then review in Chromium. Supported visual
review sizes are 1280x720, 1600x900, and 1920x1080. Checks are `npm run
typecheck`, `npm run lint`, `npm test`, and `npm run build`. `npm run
test:browser` is the documented manual-browser status notice, not an automated
suite.

The MVP is one complete deterministic floor: defeat the Ashbound Warden, pick
up the Star-Forged Seal, explore the fixed east branch with Glass Mirelings and
Gloam Scavengers, reach exit `(2,4)`, and enter it to complete the run. Seven
persistent monster instances and six useful item definitions exercise the
combat, loot, and inventory loop; defeated enemies do not respawn and ground
loot stays at its dungeon position until pickup. The exit remains locked
without the seal; victory disables normal gameplay and offers same-seed or
new-seed restart.
