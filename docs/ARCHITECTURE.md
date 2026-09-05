# Architecture

Project Tarmin has one authoritative simulation boundary: `src/sim/` owns canonical, serializable state and pure command transitions. `src/game/` adapts that state into Phaser presentation and forwards input as explicit commands. Encounters, combat, inventory, and deterministic randomness remain in the simulation boundary.

The browser shell uses Vite and Phaser 4.2.1. Phaser is presentation infrastructure only: it renders the framework-independent perspective primitives and presents simulation events. The production game configuration explicitly selects WebGL; it does not use Canvas fallback or move rules into scenes.

The simulation must not import Phaser or call `Math.random()`. Coordinates remain integer grid positions, facing remains cardinal, movement remains discrete, combat remains turn based, and state remains canonical and serializable.
