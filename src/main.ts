import Phaser from "phaser";
import { MainScene } from "./game/MainScene";
import { DUNGEON_PALETTE, paletteHex } from "./game/palette";
import { createBrowserSeed, normalizeSeed } from "./game/seed";
import { HealthCue } from "./audio/healthCue";
import { ActionCue, type ActionCueKind } from "./audio/actionCue";
import { AmbientCue } from "./audio/ambientCue";
import "./style.css";

document.documentElement.style.setProperty("--background-void", paletteHex(DUNGEON_PALETTE.backgroundVoid));
document.documentElement.style.setProperty("--narrative-text", paletteHex(DUNGEON_PALETTE.narrativeText));

const game = new Phaser.Game({
  type: Phaser.WEBGL,
  parent: "game",
  width: 1280,
  height: 720,
  backgroundColor: DUNGEON_PALETTE.backgroundVoid,
  pixelArt: true,
  antialias: false,
  scene: MainScene,
  scale: { mode: Phaser.Scale.FIT, autoCenter: Phaser.Scale.CENTER_BOTH }
});
const healthCue = new HealthCue();
const actionCue = new ActionCue();
const ambientCue = new AmbientCue();

const ui = document.createElement("section");
ui.className = "shell-ui";
ui.innerHTML = `<div class="start-panel" data-start><p class="eyebrow">AN ORIGINAL DUNGEON DESCENT</p><h1>THE UNDERCRYPT</h1><p class="lede">A torch, a sealed passage, and whatever waits below.</p><form><label for="seed">RUN SEED</label><input id="seed" name="seed" value="7391" autocomplete="off" inputmode="numeric"><div class="start-actions"><button type="submit">BEGIN DESCENT</button><button type="button" data-generate>GENERATE SEED</button></div></form><p class="hint">W / S move · A / D turn · Q / E ring · Esc pause</p></div>
<div class="hud" data-hud hidden aria-label="Run information">
  <header class="hud-header"><div><span class="eyebrow">THE UNDERCRYPT</span><strong data-floor></strong></div><div class="location" data-location></div><div class="objective" data-objective></div><button type="button" class="pause-button" data-pause>PAUSE <span>ESC</span></button></header>
  <aside class="equipment equipment-left" aria-label="Left hand equipment"><span class="slot-label">LEFT HAND</span><strong data-left>EMPTY</strong><small data-left-detail>—</small></aside>
  <aside class="equipment equipment-right" aria-label="Right hand equipment"><span class="slot-label">RIGHT HAND</span><strong data-right>EMPTY</strong><small data-right-detail>—</small></aside>
  <section class="vitals" aria-label="Player vitality"><span class="slot-label">VITALITY</span><strong data-health></strong><div class="health-bar"><i data-health-bar></i></div></section>
  <section class="ring-dock" aria-label="Ring inventory"><div class="ring-heading"><span class="slot-label">THE RING</span><span data-ring-count></span></div><strong data-ring>EMPTY</strong><div class="ring-items" data-ring-items></div><p class="ring-hint">Q / E select · Z / X equip · R use</p></section>
  <section class="combat-card" data-combat hidden aria-label="Combat status"><div><span class="slot-label">THREAT IN VIEW</span><strong data-encounter-name></strong></div><div class="threat-health"><span data-encounter-health></span><i data-threat-bar></i></div><p data-combat-hint>SPACE left strike · F right strike · X retreat</p></section>
  <p class="feedback" data-feedback aria-live="polite"></p>
  <p class="controls">W/S MOVE <i>·</i> A/D TURN <i>·</i> Q/E RING <i>·</i> P PICK UP <i>·</i> ESC PAUSE</p>
</div>
<div class="terminal-panel" data-terminal hidden role="dialog" aria-modal="true" aria-labelledby="terminal-title"><p class="eyebrow" data-terminal-eyebrow>RUN ENDED</p><h2 id="terminal-title" data-terminal-title>THE TORCH GUTTERS</h2><p class="pause-copy" data-terminal-copy></p><div class="start-actions"><button type="button" data-restart-same>RESTART SAME SEED</button><button type="button" data-restart-new>NEW SEED</button></div></div>
<div class="pause-scrim" data-pause-scrim hidden></div><div class="pause-panel" data-pause-panel hidden role="dialog" aria-modal="true" aria-labelledby="pause-title"><p class="eyebrow">RUN PAUSED</p><h2 id="pause-title">THE TORCH HOLDS</h2><p class="pause-copy">The dungeon waits exactly where you left it.</p><button type="button" data-resume>RESUME DESCENT</button><label><input type="checkbox" data-motion> REDUCED MOTION</label><p class="hint">Keyboard focus is held by this panel.</p></div>`;
document.body.append(ui);
const start = ui.querySelector("[data-start]") as HTMLElement;
const hud = ui.querySelector("[data-hud]") as HTMLElement;
const pausePanel = ui.querySelector("[data-pause-panel]") as HTMLElement;
const terminalPanel = ui.querySelector("[data-terminal]") as HTMLElement;
const terminalEyebrow = ui.querySelector("[data-terminal-eyebrow]") as HTMLElement;
const terminalTitle = ui.querySelector("[data-terminal-title]") as HTMLElement;
const terminalCopy = ui.querySelector("[data-terminal-copy]") as HTMLElement;
const seed = ui.querySelector("#seed") as HTMLInputElement;
const feedback = ui.querySelector("[data-feedback]") as HTMLElement;
const floor = ui.querySelector("[data-floor]") as HTMLElement;
const location = ui.querySelector("[data-location]") as HTMLElement;
const objective = ui.querySelector("[data-objective]") as HTMLElement;
const health = ui.querySelector("[data-health]") as HTMLElement;
const healthBar = ui.querySelector("[data-health-bar]") as HTMLElement;
const left = ui.querySelector("[data-left]") as HTMLElement;
const right = ui.querySelector("[data-right]") as HTMLElement;
const ring = ui.querySelector("[data-ring]") as HTMLElement;
const ringCount = ui.querySelector("[data-ring-count]") as HTMLElement;
const ringItems = ui.querySelector("[data-ring-items]") as HTMLElement;
const combatCard = ui.querySelector("[data-combat]") as HTMLElement;
const encounterName = ui.querySelector("[data-encounter-name]") as HTMLElement;
const encounterHealth = ui.querySelector("[data-encounter-health]") as HTMLElement;
const threatBar = ui.querySelector("[data-threat-bar]") as HTMLElement;
const leftDetail = ui.querySelector("[data-left-detail]") as HTMLElement;
const rightDetail = ui.querySelector("[data-right-detail]") as HTMLElement;
const motion = ui.querySelector("[data-motion]") as HTMLInputElement;
const emit = (name: string, detail?: unknown): void => { window.dispatchEvent(new CustomEvent(name, { detail })); };
ui.querySelector("form")?.addEventListener("submit", (event) => { event.preventDefault(); emit("tarmin-start", normalizeSeed(seed.value)); });
ui.querySelector("[data-generate]")?.addEventListener("click", () => { const value = createBrowserSeed(); seed.value = String(value); emit("tarmin-start", value); });
ui.querySelector("[data-pause]")?.addEventListener("click", () => emit("tarmin-toggle-pause"));
ui.querySelector("[data-resume]")?.addEventListener("click", () => emit("tarmin-toggle-pause"));
ui.querySelector("[data-restart-same]")?.addEventListener("click", () => emit("tarmin-start", normalizeSeed(seed.value)));
ui.querySelector("[data-restart-new]")?.addEventListener("click", () => { const value = createBrowserSeed(); seed.value = String(value); emit("tarmin-start", value); });
motion.addEventListener("change", () => emit("tarmin-motion", motion.checked));
window.addEventListener("tarmin-mode", (event) => {
  const mode = (event as CustomEvent<string>).detail;
  healthCue.setMode(mode === "active" ? "active" : mode === "paused" ? "paused" : mode === "menu" ? "menu" : "terminal");
  actionCue.setMode(mode === "active" ? "active" : mode === "paused" ? "paused" : mode === "menu" ? "menu" : "terminal");
  ambientCue.setMode(mode === "active" ? "active" : mode === "paused" ? "paused" : mode === "menu" ? "menu" : "terminal");
  Object.defineProperty(window, "__TARMIN_AUDIO__", { configurable: true, get: () => healthCue.diagnostics() });
  Object.defineProperty(window, "__TARMIN_ACTION_AUDIO__", { configurable: true, get: () => actionCue.diagnostics() });
  Object.defineProperty(window, "__TARMIN_AMBIENT_AUDIO__", { configurable: true, get: () => ambientCue.diagnostics() });
  const running = mode !== "menu";
  start.hidden = running; hud.hidden = !running; pausePanel.hidden = mode !== "paused"; (ui.querySelector("[data-pause-scrim]") as HTMLElement).hidden = mode !== "paused";
  terminalPanel.hidden = mode !== "defeated" && mode !== "victorious";
  if (mode === "defeated") { terminalEyebrow.textContent = "RUN ENDED"; terminalTitle.textContent = "THE TORCH GUTTERS"; terminalCopy.textContent = "The undercrypt has won this descent."; }
  if (mode === "victorious") { terminalEyebrow.textContent = "RUN COMPLETE"; terminalTitle.textContent = "THE UNDERCRYPT YIELDS"; terminalCopy.textContent = "This run is victorious. The next descent awaits."; }
  if (mode === "paused") (ui.querySelector("[data-resume]") as HTMLButtonElement).focus();
  if (mode === "defeated" || mode === "victorious") (ui.querySelector("[data-restart-same]") as HTMLButtonElement).focus();
});
window.addEventListener("tarmin-events", (event) => {
  const events = (event as CustomEvent<readonly { type: string }[]>).detail;
  if (events.some((value) => value.type === "encounterStarted")) actionCue.play("encounter" satisfies ActionCueKind);
  if (events.some((value) => value.type === "itemAcquired")) actionCue.play("pickup" satisfies ActionCueKind);
  if (events.some((value) => value.type === "attackAttempt")) actionCue.play("attack" satisfies ActionCueKind);
  if (events.some((value) => value.type === "itemUsed")) actionCue.play("use" satisfies ActionCueKind);
});
window.addEventListener("tarmin-state", (event) => {
  const detail = (event as CustomEvent<{ floor: number; turn: number; health: number; maxHealth: number; feedback: string; seed: number; runStatus: string; facing: string; position: { x: number; y: number }; leftHand: string | null; rightHand: string | null; leftDetail: string; rightDetail: string; ring: readonly string[]; selectedRingIndex: number; objective: { acquired: boolean; complete: boolean; exit: { x: number; y: number } }; encounter: { name: string; health: number; maxHealth: number } | null }>).detail;
  floor.textContent = `FLOOR ${detail.floor} · TURN ${detail.turn} · SEED ${detail.seed}`;
  location.textContent = `${detail.position.x},${detail.position.y} · FACING ${detail.facing.toUpperCase()}`;
  objective.textContent = detail.objective.complete ? "OBJECTIVE COMPLETE" : detail.objective.acquired ? `SEAL FOUND · EXIT ${detail.objective.exit.x},${detail.objective.exit.y}` : `FIND SEAL · EXIT ${detail.objective.exit.x},${detail.objective.exit.y}`;
  health.textContent = `${detail.health}/${detail.maxHealth}`;
  healthCue.update(detail.health, detail.maxHealth);
  healthBar.style.width = `${Math.max(0, Math.min(100, detail.health / detail.maxHealth * 100))}%`;
  feedback.textContent = detail.feedback;
  left.textContent = detail.leftHand ?? "EMPTY"; right.textContent = detail.rightHand ?? "EMPTY";
  leftDetail.textContent = detail.leftDetail; rightDetail.textContent = detail.rightDetail;
  ringCount.textContent = `${detail.ring.length}/6`; ring.textContent = detail.ring.length ? detail.ring[detail.selectedRingIndex] ?? "EMPTY" : "EMPTY";
  ringItems.replaceChildren(...detail.ring.map((item, index) => { const marker = document.createElement("span"); marker.className = index === detail.selectedRingIndex ? "selected" : ""; marker.textContent = item.slice(0, 1); marker.setAttribute("aria-label", `${item}${index === detail.selectedRingIndex ? ", selected" : ""}`); return marker; }));
  combatCard.hidden = !detail.encounter;
  if (detail.encounter) { encounterName.textContent = detail.encounter.name; encounterHealth.textContent = `${detail.encounter.health}/${detail.encounter.maxHealth} HP`; threatBar.style.width = `${Math.max(0, Math.min(100, detail.encounter.health / detail.encounter.maxHealth * 100))}%`; }
});
window.addEventListener("tarmin-start", () => { document.body.classList.add("in-run"); });
void game;
