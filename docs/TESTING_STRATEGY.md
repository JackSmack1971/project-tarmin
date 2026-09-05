# Testing strategy

## Browser verification

`npm run test:browser` is a truthful status check, not an automated browser
test. It must not be counted as browser verification.

For browser-visible changes:

1. Run `npm run dev`.
2. Open the printed local URL in Chromium.
3. Exercise the affected flow from a fresh page.
4. Check the browser console for errors and record the route, inputs, viewport,
   observable result, and screenshot paths when visual evidence matters.

The required browser evidence belongs in `harness/build-log.md` or the relevant
phase acceptance document. If an automated browser suite is added later, replace
the placeholder script and document its command and coverage here.

## Local checks

Run the narrowest relevant checks first. The project-wide completion checks are:

```text
npm run typecheck
npm run lint
npm test
npm run test:browser
npm run build
```

The `test:browser` status check does not replace the Chromium procedure above.

Atmosphere browser evidence must include a near/bright material state, a
deep/distant corridor state, an encounter and post-defeat state, a movement
transition, and reduced-motion mode. Record WebGL context, route or fixture,
input sequence, visible state, screenshot path, and console errors. Static
filters and lighting are presentation-only, so deterministic simulation tests
must still compare canonical state before and after the same command sequence.

Phase 15 also records 1280×720, 1600×900, and 1920×1080 Chromium runs. The
internal logical canvas is expected to remain 1280×720 under FIT scaling; this
is a presentation check, not a simulation-resolution change.
