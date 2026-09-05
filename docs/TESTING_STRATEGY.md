# Testing strategy

## Browser verification

`npm run test:browser` runs the Playwright Chromium MVP smoke suite. Install the
Playwright browser once after a clean dependency install with
`npx playwright install chromium`.

The suite has two deterministic flows in `tests/browser/mvp.spec.ts`:

* seed `7391` starts a run, defeats and revisits the Ashbound Warden, picks up
  the Star-Forged Seal, uses the Moss Tonic, equips an item, encounters and
  defeats a Glass Mireling, reaches the exit, verifies terminal victory/input
  blocking, and restarts the same seed;
* `?fixture=combat-defeat` starts a deterministic low-vitality combat probe,
  reaches player defeat, verifies terminal input blocking, and restarts.

Application console errors and page errors are collected and fail either flow.
This is functional browser coverage; it does not replace the manual visual
review below.

For browser-visible changes requiring visual or experiential judgment:

1. Run `npm run dev`.
2. Open the printed local URL in Chromium.
3. Exercise the affected flow from a fresh page.
4. Check the browser console for errors and record the route, inputs, viewport,
   observable result, and screenshot paths when visual evidence matters.

The required manual visual evidence belongs in `harness/build-log.md` or the
relevant phase acceptance document. The automated suite is the acceptance gate
for the MVP gameplay flows, not a visual-regression system.

## Local checks

Run the narrowest relevant checks first. The project-wide completion checks are:

```text
npm run typecheck
npm run lint
npm test
npm run test:browser
npm run build
```

`npm run test:browser` is the automated Chromium procedure for MVP functional
coverage; the manual Chromium procedure above remains required for visual and
experiential claims.

Atmosphere browser evidence must include a near/bright material state, a
deep/distant corridor state, an encounter and post-defeat state, a movement
transition, and reduced-motion mode. Record WebGL context, route or fixture,
input sequence, visible state, screenshot path, and console errors. Static
filters and lighting are presentation-only, so deterministic simulation tests
must still compare canonical state before and after the same command sequence.

Phase 15 also records 1280×720, 1600×900, and 1920×1080 Chromium runs. The
internal logical canvas is expected to remain 1280×720 under FIT scaling; this
is a presentation check, not a simulation-resolution change.

## Persistent dungeon-world verification

The simulation tests must cover more than the first encounter: they assert
stable monster identity and location, health persistence across retreat and
re-entry, permanent defeat without respawn, and world-loot location/ownership
until pickup. These tests also round-trip canonical state through JSON. The
existing browser flow must still show the encounter billboard and combat HUD,
then remove the billboard after defeat; the browser check remains separate from
the focused simulation proof.

Run lifecycle verification additionally covers canonical `playing`, `defeated`,
and `victorious` states; zero-health terminal blocking; same-seed and new-seed
restart; disabled terminal input; visible terminal panels; and multi-event
defeat/loot feedback. Chromium evidence must exercise defeat and both restart
buttons from a fresh page and record the terminal mode/state plus console errors.
The reproducible terminal-panel routes are `?fixture=defeated` and
`?fixture=victorious`; these remain presentation fixtures for visual review,
while authoritative transition proof remains in simulation tests. The
`?fixture=combat-defeat` route is a deterministic browser acceptance fixture
that begins immediately before the Warden cell with 1 vitality so the negative
combat path is reachable without weakening normal-game rules.

The complete one-floor run additionally requires deterministic proof that the
Warden yields the Star-Forged Seal, pickup records objective possession, the
fixed exit at `(2,4)` stays non-victorious without it, and successful entry
records objective completion and victory. The browser route is: Begin Descent,
ArrowUp, four Space attacks, P, then Right/Up/Up/Left/Up/Right/Up.

## MVP content population verification

Content tests assert three monster definitions, seven stable world instances,
six item definitions spanning all four roles, valid loot references, and
deterministic weighted loot. Simulation tests exercise the fixed east branch,
Mireling encounter identity, persistence, and same-seed command equality. The
Chromium review additionally traverses the branch, shows Mireling and Scavenger
billboards, defeats at least one added encounter, picks up its ground loot,
revisits its cell, and then completes the existing Warden/Seal/exit route.
