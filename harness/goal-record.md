# Goal record

## Goal and observable outcome

Populate the completed one-floor MVP with the minimum encounter and loot
variety needed for meaningful replayability: integrate the Glass Mireling,
retain the Ashbound Warden, add only justified MVP content, and keep the full
objective/exit/victory route completable.

## Status

Active — baseline reconciled; implementation and delivery remain.

## Constraints and authorization

Preserve the TypeScript/Vite/Phaser architecture, pure deterministic
simulation, canonical serializable state, integer cardinal movement,
turn-based combat, persistent world instances, spatial ground-item persistence,
and non-respawning defeated enemies. The user explicitly authorizes local
implementation, tests, documentation, focused branch/commit, PR to `main`,
merge after required checks, and merged-main verification.

## Non-goals

No roaming/generalized AI, procedural generation, multi-floor progression,
saves, final asset replacement, elaborate audio, huge bestiary, or final
balance work.

## Acceptance criteria

See `harness/build/mvp-content-population-acceptance.md`. The matrix covers
registry validity, roughly three monster types, 6–8 live monster instances,
6–8 useful item definitions across all requested roles, deterministic loot and
RNG, stable persistent instances, spatial loot persistence, no respawn,
completable objective route, focused tests, project checks, Chromium review,
current docs/build log, and verified merged-main delivery.

## State location and tracking decision

The existing tracked `harness/goal-record.md`, `harness/progress-log.md`, and
`harness/build-log.md` are the durable state convention. No credentials or
private payloads are stored.

## Baseline facts

- Clean local `main` at the current merged MVP state.
- Registry contains Ashbound Warden, Glass Mireling, four item definitions,
  and two loot tables; only the Warden is instantiated in `createInitialState`.
- Existing world state, deterministic RNG, objective, exit, and persistent
  monster/item mechanics are authoritative and must be extended minimally.
- Renderer currently projects only the active encounter and has a Warden-only
  sprite fallback; browser verification must establish the appropriate live
  presentation path for the populated floor.
- `docs/GAME_DESIGN.md` is absent despite the root routing note; do not invent
  a replacement unless the implementation needs a durable gameplay rule that
  belongs there. Existing gameplay/content docs remain authoritative.

## Open uncertainties

1. Exact reachable coordinates and encounter ordering for 6–8 instances while
   preserving the existing exit route and win condition.
2. Minimal additional item definitions and deterministic loot distribution that
   exercise weapon/defense/consumable/treasure roles without balance claims.
3. Smallest renderer/content presentation change needed to show Mirelings and
   ground loot without making presentation authoritative.

## Evidence index

- `harness/build/mvp-content-population-acceptance.md`
- `harness/progress-log.md`
- `harness/build-log.md`
- `src/content/registry.ts`, `src/content/monsters.ts`, `src/content/items.ts`
- `src/sim/state.ts` and focused simulation/content tests
- fresh Chromium captures and runtime state observations

## Stopping conditions

Every applicable acceptance row passes independently; no introduced or
inconclusive failure remains; docs and build log are current; the focused
branch is committed, PR'd, merged after required checks, and local `main`
matches the merged remote result.

## Next action

Run the recorded baseline checks, then choose the smallest content/world
population design supported by reachable-map and renderer evidence.
