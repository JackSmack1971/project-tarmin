import Phaser from "phaser";
import { MainScene } from "./game/MainScene";
import { DUNGEON_PALETTE, paletteHex } from "./game/palette";
import { createBrowserSeed, normalizeSeed } from "./game/seed";
import "./style.css";

document.documentElement.style.setProperty("--background-void", paletteHex(DUNGEON_PALETTE.backgroundVoid));
document.documentElement.style.setProperty("--narrative-text", paletteHex(DUNGEON_PALETTE.narrativeText));

const game = new Phaser.Game({
  type: Phaser.WEBGL,
  parent: "game",
  width: 1280,
  height: 720,
  backgroundColor: DUNGEON_PALETTE.backgroundVoid,
  scene: MainScene,
  scale: { mode: Phaser.Scale.FIT, autoCenter: Phaser.Scale.CENTER_BOTH }
});

const ui = document.createElement("section");
ui.className = "shell-ui";
ui.innerHTML = `<div class="start-panel" data-start><p class="eyebrow">PROJECT TARMIN</p><h1>THE UNDERCRYPT</h1><p>Enter a seed, then descend into the dark.</p><form><label for="seed">RUN SEED</label><input id="seed" name="seed" value="7391" autocomplete="off" inputmode="numeric"><button type="submit">BEGIN DESCENT</button><button type="button" data-generate>GENERATE SEED</button></form><p class="hint">W / S move · A / D turn · Esc pause</p></div>
<div class="hud" data-hud hidden><div><span class="eyebrow">THE UNDERCRYPT</span><strong data-floor></strong></div><div class="hud-stats"><span data-health></span><span data-left>LEFT · EMPTY</span><span data-right>RIGHT · EMPTY</span><span data-ring>RING · EMPTY</span></div><button type="button" data-pause>PAUSE</button><p class="feedback" data-feedback aria-live="polite"></p></div>
<div class="pause-panel" data-pause-panel hidden><p class="eyebrow">RUN PAUSED</p><h2>THE TORCH HOLDS</h2><button type="button" data-resume>RESUME</button><label><input type="checkbox" data-motion> REDUCED MOTION</label><p class="hint">Your run is unchanged while paused.</p></div>`;
document.body.append(ui);
const start = ui.querySelector("[data-start]") as HTMLElement;
const hud = ui.querySelector("[data-hud]") as HTMLElement;
const pausePanel = ui.querySelector("[data-pause-panel]") as HTMLElement;
const seed = ui.querySelector("#seed") as HTMLInputElement;
const feedback = ui.querySelector("[data-feedback]") as HTMLElement;
const floor = ui.querySelector("[data-floor]") as HTMLElement;
const health = ui.querySelector("[data-health]") as HTMLElement;
const left = ui.querySelector("[data-left]") as HTMLElement;
const right = ui.querySelector("[data-right]") as HTMLElement;
const ring = ui.querySelector("[data-ring]") as HTMLElement;
const motion = ui.querySelector("[data-motion]") as HTMLInputElement;
const emit = (name: string, detail?: unknown): void => { window.dispatchEvent(new CustomEvent(name, { detail })); };
ui.querySelector("form")?.addEventListener("submit", (event) => { event.preventDefault(); emit("tarmin-start", normalizeSeed(seed.value)); });
ui.querySelector("[data-generate]")?.addEventListener("click", () => { const value = createBrowserSeed(); seed.value = String(value); emit("tarmin-start", value); });
ui.querySelector("[data-pause]")?.addEventListener("click", () => emit("tarmin-toggle-pause"));
ui.querySelector("[data-resume]")?.addEventListener("click", () => emit("tarmin-toggle-pause"));
motion.addEventListener("change", () => emit("tarmin-motion", motion.checked));
window.addEventListener("tarmin-mode", (event) => {
  const mode = (event as CustomEvent<string>).detail;
  const running = mode !== "menu";
  start.hidden = running; hud.hidden = !running; pausePanel.hidden = mode !== "paused";
  if (mode === "paused") (ui.querySelector("[data-resume]") as HTMLButtonElement).focus();
});
window.addEventListener("tarmin-state", (event) => {
  const detail = (event as CustomEvent<{ floor: number; turn: number; health: number; feedback: string; seed: number; leftHand: string | null; rightHand: string | null; ring: readonly string[]; selectedRingIndex: number }>).detail;
  floor.textContent = `FLOOR ${detail.floor} · TURN ${detail.turn} · SEED ${detail.seed}`;
  health.textContent = `VITALITY ${detail.health}/10`;
  feedback.textContent = detail.feedback;
  left.textContent = `LEFT · ${detail.leftHand ?? "EMPTY"}`;
  right.textContent = `RIGHT · ${detail.rightHand ?? "EMPTY"}`;
  ring.textContent = `RING · ${detail.ring.length ? `${detail.ring[detail.selectedRingIndex] ?? ""} (${detail.selectedRingIndex + 1}/${detail.ring.length})` : "EMPTY"}`;
});
window.addEventListener("tarmin-start", () => { document.body.classList.add("in-run"); });
void game;
