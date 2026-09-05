# Project Instructions — Project Tarmin

## Mission

Build a modern browser-playable spiritual successor to the Intellivision game*Advanced Dungeons & Dragons: Treasure of Tarmin*. Preserve its distinctivedesign grammar—first-person grid exploration, turn-based combat,inventory/equipment decisions, dungeon descent, loot discovery, and oppressivedungeon atmosphere—while using original code, art, audio, names, lore, andbranding.

The working title "Project Tarmin" is an internal codename only.

Modernization should improve presentation, usability, accessibility,performance, content richness, and quality of life without replacing the coreinteraction grammar. When a modern genre convention conflicts with a distinctiveProject Tarmin interaction, preserve the Project Tarmin interaction unless anapproved design decision says otherwise.

## Authority and context routing

Read the smallest relevant set of repository context before implementing a task.When instructions or evidence conflict, use this precedence:

1. Current explicit user instruction.
2. This root `AGENTS.md` and any applicable deeper `AGENTS.md`.
3. Approved entries in `docs/DECISIONS.md`.
4. Applicable subsystem specifications in `docs/`.
5. The active phase/build specification in `harness/build/`.
6. `GOALS.md` for outcomes, scope, and non-goals.
7. `PLANS.md` for phase ordering and roadmap.
8. Relevant prior context in `harness/context/`.
9. `harness/build-log.md` as verified implementation history.
10. Existing implementation as evidence of current behavior.

Existing code is not automatically intended behavior. Reference/inspirationmaterial is not a specification when it conflicts with an explicit repositoryrequirement.

Before changing a subsystem, read its governing document:

* architecture/boundaries → `docs/ARCHITECTURE.md`
* RNG/state/save/replay → `docs/DETERMINISM_AND_SAVE.md`
* pseudo-3D rendering → `docs/RENDERING_SPEC.md`
* gameplay/rules → `docs/GAME_DESIGN.md`
* content/data → `docs/CONTENT_MODEL.md`
* controls/HUD/inventory UX → `docs/INPUT_AND_UI.md`
* visuals/audio → `docs/ART_DIRECTION.md`, `docs/AUDIO_DIRECTION.md`
* asset sourcing/provenance → `docs/ASSET_SOURCE_WORKFLOW.md`
* testing/completion → `docs/TESTING_STRATEGY.md`, `docs/DEFINITION_OF_DONE.md`
* browser/performance/accessibility → applicable files in `docs/`
* unresolved/durable decisions → `docs/OPEN_QUESTIONS.md`, `docs/DECISIONS.md`

If a deeper directory contains its own `AGENTS.md`, obey it for that subtree.Deeper instructions may specialize these rules but must not silently weaken rootarchitectural invariants.

## Architectural invariants

These are non-negotiable unless the user explicitly changes them.

* Language: TypeScript.
* Runtime: browser, client-side only for the core game.
* Build tooling: Vite.
* Game framework: Phaser.
* Authoritative game simulation is framework-independent pure TypeScript.
* Phaser/rendering code must not own authoritative game rules.
* Dungeon coordinates are integer grid coordinates.
* Player facing is discrete cardinal orientation.
* Core movement is discrete/grid based; visual interpolation is presentation only.
* Combat is turn based.
* Randomness is deterministic and seeded.
* Authoritative simulation code must never call `Math.random()`.
* Game state must be canonical and serializable.
* Save data must be versioned and migration-capable.
* Content must be data-driven where practical.
* Rendering uses a pseudo-3D first-person projection, not free-roaming 3D physics.
* No Three.js, Babylon.js, Unity, Godot, or other 3D engine unless the userexplicitly revises the architecture.
* No backend is required for the initial product.
* Avoid React in the gameplay rendering loop. HTML/CSS may be used for shell UIwhere it clearly improves usability.

Architectural gravity: one authoritative simulation, one canonical coordinatemodel, one controlled deterministic RNG pathway, one canonical game-state model,and explicit commands/events for authoritative actions. Rendering observes gamestate; it does not decide gameplay.

### Mechanical enforcement

When practical, encode durable invariants as tests, type boundaries, lint/staticchecks, dependency rules, schema validation, or verification scripts. Preferpreventing invalid states over repeatedly instructing agents not to create them.

Examples worth enforcing when relevant:

* simulation code cannot import Phaser
* authoritative simulation code cannot call `Math.random()`
* save/state schemas round-trip successfully
* seeded simulations are replay deterministic
* generated dungeons satisfy required structural invariants
* content validates against its schemas

Do not build speculative enforcement infrastructure. Add or strengthen it when arelevant invariant is introduced, changed, or repeatedly violated.

## Engineering rules

* Prefer the simplest design that preserves the architecture.
* Keep domain logic out of Phaser scenes and rendering adapters.
* Prefer pure functions for game rules and state transitions.
* Prefer explicit types; avoid `any`, or isolate and justify it if unavoidable.
* Model authoritative actions as explicit commands/events, not hidden mutations.
* Keep modules small, cohesive, and state mutation paths auditable.
* Do not add dependencies or abstractions without concrete value.
* Do not silently alter gameplay rules to simplify implementation.
* Do not use presentation state as a second source of gameplay truth.
* Do not couple rule tests to incidental rendering details.
* Preserve public/state/save contracts unless the task intentionally changes them.

## Change discipline

For every task:

1. Inspect the relevant code, applicable `AGENTS.md`, and smallest useful set ofproject docs.
2. Identify authoritative behavior and constraints before editing.
3. State any material unresolved assumption before implementation.
4. Implement the smallest complete vertical change.
5. Add or update tests at the correct layer.
6. Run the narrowest relevant checks first, then required completion checks.
7. Exercise browser-visible behavior in a browser when the task affects it.
8. Update docs when behavior, architecture, commands, schemas, or durable decisionschange.
9. Record material implementation evidence in `harness/build-log.md`.
10. Record reusable phase decisions/context in the matching `harness/context/`file when useful to future work.

Do not modify unrelated files merely to "clean up" the repository.

## Verification standard

A task is not complete because code compiles or tests happen to pass. Verify at theappropriate layers:

* **Unit:** pure rules and local state transitions.
* **Simulation:** deterministic multi-step behavior and invariants.
* **Structural:** architecture boundaries, schemas, forbidden imports/dependencies.
* **Browser:** integration and user-observable behavior.
* **Experiential:** visual, interaction, pacing, readability, and atmosphere whereautomated assertions are insufficient.

Never claim browser-visible behavior was verified unless it was actually exercisedin a browser or by browser automation.

Changes affecting rendering, controls, HUD, inventory interaction, combatpresentation, audio, navigation, or atmosphere must also be evaluated against theapplicable design documents in a running build. Evaluate, as applicable:

* first-person spatial readability and apparent dungeon scale
* claustrophobia and atmosphere
* clarity/immediacy of discrete turning and movement
* corridor, wall, doorway, encounter, combat, and inventory readability
* visual hierarchy and HUD obstruction
* audiovisual feedback
* fidelity to the intended design grammar without copying protected expression

For major visual milestones, preserve reproducible runtime evidence such as theroute/state used, screenshots where useful, and concise observed results.

Expected project-wide checks after the repository is scaffolded:
    npm run typecheck
    npm run lint
    npm test
    npm run test:browser
    npm run build

If a required command does not exist in the current phase, do not invent success.Record it as not applicable and explain why.

## Determinism and replay contract

Authoritative behavior must satisfy:
    initial state + seed + ordered command sequence
                         ↓
                 authoritative simulation
                         ↓
                 canonical final state

The same compatible initial state, seed/RNG state, content/rules version, andordered command sequence must produce the same authoritative result.

For seeded or ordering-sensitive bugs, retain when applicable:

* seed / RNG state
* content or rules version
* dungeon floor
* player coordinates and facing
* turn number
* relevant entity IDs
* ordered command sequence

Pin seeds in tests. Prefer replay fixtures or canonical state snapshots/hashes forcomplex deterministic regressions when they provide durable diagnostic value.Presentation timing, interpolation, frame rate, and cosmetic effects must not alterauthoritative simulation results.

## Game-design fidelity

Preserve the design grammar, not copyrighted expression.

Desired pillars:

* claustrophobic first-person grid exploration
* consequential turning and movement
* readable but mysterious dungeon geometry
* turn-based tactical encounters
* meaningful left/right-hand equipment choices
* rotating/ring-style inventory identity
* escalating risk with dungeon depth
* treasure-driven progression
* strong audiovisual atmosphere
* rapid interaction without real-time action-game pressure

Do not convert the game into:

* a free-look FPS
* an action RPG
* a clicker/idle game
* a generic roguelike with a first-person skin
* a direct copyrighted asset/content clone

Modern conveniences are welcome only when they preserve these pillars. Preferbetter feedback, accessibility, readability, responsiveness, and presentation overreplacement of the underlying interaction model.

## Intellectual-property boundary

Do not copy original game artwork, audio, text, maps, proprietary names, monsterdesigns, logos, box art, or branded presentation into distributable assets.

Use reference material to understand mechanics and aesthetic principles. Publicrelease content must use original or appropriately licensed assets and branding.See `docs/IP_AND_BRANDING.md`.

## Decision and autonomy policy

Classify material choices by impact:

* **GREEN — decide and implement:** local, reversible choices that do not alter anexternal contract or durable design intent; e.g. private helpers, local refactorshape, test organization, internal naming.
* **YELLOW — decide, implement, record:** reversible choices with meaningfulsubsystem impact; e.g. minor schema extensions, local UI behavior consistent withexisting specs, or a new convention likely to matter later.
* **RED — preserve current contract and surface the decision:** choices that altera core gameplay pillar, architectural invariant, authoritative simulation model,save compatibility, control/input model, major visual/audio direction,public-facing identity, IP posture, or framework/runtime selection.

Update the appropriate context/doc for durable YELLOW decisions. For RED decisions,do not bury the choice in code; surface it in the task result and update`docs/DECISIONS.md` after user approval.

If uncertainty is low-risk and reversible, choose the simplest reasonable optioninstead of blocking progress. If uncertainty crosses a RED boundary, preserve thecurrent contract rather than guessing.

## Documentation discipline

Keep this file a constitution and context router. Detailed subsystem specificationsbelong in their owned `docs/` files; bounded work belongs in `harness/build/`;reusable phase context belongs in `harness/context/`; append-only implementation andverification evidence belongs in `harness/build-log.md`.

Do not duplicate detailed specifications here when the repository already has anowned document for them.

## Completion reporting

Final task reports should be concise and evidence based:

* what changed
* key files
* tests/checks run and exact results
* browser/runtime and experiential evidence when applicable
* unresolved risks or assumptions
* durable decisions recorded
* next phase only when relevant

Do not claim completion with known failing required checks. Do not claim fidelity,visual quality, runtime behavior, determinism, or architectural compliance withoutcorresponding evidence.
