import Phaser from "phaser";
import { createInitialState, executeCommand, type Command, type GameEvent, type GameState } from "../sim/state";
import { InputController, type InputMode } from "../input/input-controller";
import { DUNGEON_PALETTE, paletteHex, shadeColor } from "./palette";
import { frameToPixels, intervalQuads, PORTAL_FRAMES, type PortalFrame, type PortalQuad } from "./portalProjection";
import { createRenderFixture, renderFixtureFromLocation } from "./renderFixtures";
import { PERSPECTIVE_TRANSITION_MS, projectDungeon } from "../renderer/perspective/perspectiveRenderer";
import { meshVertices, QUAD_INDICES } from "../renderer/meshGeometry";
import { itemById } from "../content/items";
import { DUNGEON_SURFACE_ATLAS } from "../renderer/assets/dungeonAtlas";

function screenFrame(frame: PortalFrame, viewport: { left: number; top: number; width: number; height: number }): PortalFrame {
  const pixels = frameToPixels(frame, viewport.width, viewport.height);
  return { left: pixels.left + viewport.left, right: pixels.right + viewport.left, top: pixels.top + viewport.top, bottom: pixels.bottom + viewport.top };
}

function portalViewport(width: number, height: number): { left: number; top: number; width: number; height: number } {
  return { left: 72, top: 72, width: width - 144, height: height - 212 };
}

export class MainScene extends Phaser.Scene {
  private state: GameState = renderFixtureFromLocation() ? createRenderFixture(renderFixtureFromLocation()!) : createInitialState();
  private readonly perspectiveDebug = new URLSearchParams(window.location.search).get("perspectiveDebug") === "1";
  private mode: InputMode = renderFixtureFromLocation() ? "active" : "menu";
  private reducedMotion = false;
  private feedback = "A corridor waits beyond the torchlight.";
  private inputController!: InputController;

  constructor() { super("main"); }

  preload(): void {
    this.load.svg("dungeon-surfaces", DUNGEON_SURFACE_ATLAS.source);
  }

  create(): void {
    this.cameras.main.setBackgroundColor(DUNGEON_PALETTE.backgroundVoid);
    this.inputController = new InputController({ target: window, emit: (command) => this.dispatch(command), getMode: () => this.mode, togglePause: () => this.togglePause() });
    this.inputController.attach();
    window.addEventListener("tarmin-start", this.onStart);
    window.addEventListener("tarmin-toggle-pause", this.onTogglePause);
    window.addEventListener("tarmin-motion", this.onMotion);
    this.publishMode();
    this.renderState();
  }

  private readonly onStart = (event: Event): void => {
    const seed = (event as CustomEvent<number>).detail;
    this.state = createInitialState(seed);
    this.feedback = `Seed ${seed} · the descent begins.`;
    this.mode = "active";
    this.publishMode(); this.renderState();
  };
  private readonly onTogglePause = (): void => this.togglePause();
  private readonly onMotion = (event: Event): void => { this.reducedMotion = (event as CustomEvent<boolean>).detail; this.renderState(); };

  private togglePause(): void {
    if (this.mode === "active") this.mode = "paused";
    else if (this.mode === "paused") this.mode = "active";
    else return;
    this.publishMode(); this.renderState();
  }

  private dispatch(command: Command): void {
    if (this.mode !== "active") return;
    const result = executeCommand(this.state, command);
    this.state = result.state;
    this.feedback = this.feedbackFor(result.events);
    this.renderState();
    if (!command.startsWith("move") && !command.startsWith("turn")) return;
    this.mode = "transitioning"; this.publishMode();
    const veil = this.add.rectangle(this.scale.width / 2, this.scale.height / 2, this.scale.width, this.scale.height, DUNGEON_PALETTE.backgroundVoid, 0.28).setDepth(20);
    this.tweens.add({ targets: veil, alpha: 0, duration: this.reducedMotion ? 1 : PERSPECTIVE_TRANSITION_MS, ease: "Sine.Out", onComplete: () => { veil.destroy(); this.mode = "active"; this.publishMode(); } });
  }

  private feedbackFor(events: readonly GameEvent[]): string {
    const event = events[0];
    if (!event) return this.feedback;
    if (event.type === "movementBlocked") return "The way is sealed.";
    if (event.type === "encounterStarted") return `${event.name} bars the passage.`;
    if (event.type === "hit") return `Hit for ${event.damage}.`;
    if (event.type === "monsterAttack") return `The monster strikes for ${event.damage}.`;
    if (event.type === "monsterDefeated") return "The guardian falls. Loot waits nearby.";
    if (event.type === "playerDefeated") return "Your torch gutters. You have fallen.";
    if (event.type === "itemAcquired") return "A new item joins the ring.";
    if (event.type === "itemUsed") return "The tonic restores your vitality.";
    if (event.type === "equipmentChanged") return `${event.hand.toUpperCase()} hand equipped.`;
    if (event.type === "inventoryRotated") return event.selectedItemId ? "Ring selection changed." : "The ring is empty.";
    if (event.type === "commandIgnored") return event.reason === "inventoryFull" ? "The ring is full." : "Action unavailable.";
    if (event.type === "moved") return `Moved to ${event.position.x},${event.position.y}.`;
    if (event.type === "turned") return `Facing ${event.facing}.`;
    return "Action unavailable.";
  }

  private publishMode(): void { window.dispatchEvent(new CustomEvent("tarmin-mode", { detail: this.mode })); }

  private addDebugLabel(label: string, x: number, y: number, color = "#f4e7a1"): void {
    this.add.text(x, y, label, { color, fontFamily: "monospace", fontSize: "12px", backgroundColor: "#090b07", padding: { x: 3, y: 2 } }).setDepth(10);
  }

  private drawPerspectiveDebug(world: Phaser.GameObjects.Graphics, viewport: { left: number; top: number; width: number; height: number }, cells: readonly { distance: number; blocked: boolean }[]): void {
    if (!this.perspectiveDebug) return;

    world.lineStyle(2, 0xf4e7a1, 0.95);
    for (let depth = 1; depth <= 4; depth += 1) {
      const frame = screenFrame(PORTAL_FRAMES[depth], viewport);
      world.strokeRect(frame.left, frame.top, frame.right - frame.left, frame.bottom - frame.top);
      this.addDebugLabel(`D${depth}`, frame.left + 5, frame.top + 5);
    }

    const near = screenFrame(PORTAL_FRAMES[0], viewport);
    const far = screenFrame(PORTAL_FRAMES[1], viewport);
    const first = intervalQuads(near, far);
    this.addDebugLabel("CEILING", viewport.left + viewport.width * 0.38, viewport.top + viewport.height * 0.1);
    this.addDebugLabel("FLOOR", viewport.left + viewport.width * 0.42, viewport.top + viewport.height * 0.86);
    this.addDebugLabel("LEFT WALL", viewport.left + viewport.width * 0.04, viewport.top + viewport.height * 0.45);
    this.addDebugLabel("RIGHT WALL", viewport.left + viewport.width * 0.83, viewport.top + viewport.height * 0.45);
    world.lineStyle(1, 0x9ed4d8, 0.9);
    [first.leftWall, first.rightWall, first.ceiling, first.floor].forEach((quad) => world.strokePoints(quad.map(({ x, y }) => new Phaser.Math.Vector2(x, y)), true));

    const terminatingWall = cells.find((cell) => cell.blocked);
    if (terminatingWall) {
      const frame = screenFrame(PORTAL_FRAMES[terminatingWall.distance], viewport);
      this.addDebugLabel("FRONT WALL", frame.left, frame.bottom + 6, "#ffb38a");
    } else {
      const frame = screenFrame(PORTAL_FRAMES[cells.length], viewport);
      this.addDebugLabel("OPENING", frame.left, frame.bottom + 6, "#9ed4d8");
    }
  }

  private renderState(): void {
    this.children.removeAll();
    const { width, height } = this.scale;
    const viewport = portalViewport(width, height);
    const scene = projectDungeon(this.state);
    const primitives = scene.primitives;
    Object.defineProperty(window, "__TARMIN_RENDERER__", {
      configurable: true,
      get: () => Object.freeze({
        position: this.state.player.position,
        facing: this.state.player.facing,
        visibleDepth: Math.max(...primitives.map((primitive) => primitive.geometry.depth), 0),
        primitiveTypes: primitives.map((primitive) => `${primitive.geometry.depth}:${primitive.geometry.surface}:${primitive.kind}`),
        transition: this.mode === "transitioning",
        mode: this.mode,
        seed: this.state.seed,
        reducedMotion: this.reducedMotion,
        transitionDuration: this.reducedMotion ? 1 : PERSPECTIVE_TRANSITION_MS,
        turn: this.state.turn,
        lastFeedback: this.feedback,
        encounter: this.state.encounter ? { id: this.state.encounter.id, definitionId: this.state.encounter.definitionId, health: this.state.encounter.health } : null,
        playerHealth: this.state.playerHealth,
        leftHand: this.state.leftHand,
        rightHand: this.state.rightHand,
        ring: this.state.ring,
        selectedRingIndex: this.state.selectedRingIndex,
        loot: this.state.loot
      })
    });

    for (const primitive of primitives) {
      const points = primitive.geometry.quad.map((point) => ({ x: viewport.left + point.x * viewport.width, y: viewport.top + point.y * viewport.height })) as unknown as PortalQuad;
      const isOpening = primitive.kind === "passage" || primitive.kind === "open-door";
      const mesh = this.add.mesh2d(0, 0, "dungeon-surfaces", meshVertices(points, primitive.material), [...QUAD_INDICES]) as Phaser.GameObjects.Mesh2D & { setTint(color: number): Phaser.GameObjects.Mesh2D };
      mesh.setTint(shadeColor(0xffffff, primitive.lightLevel));
      mesh.setRenderAsTriangles(true);
      if (primitive.geometry.surface === "front" && isOpening) mesh.setTint(shadeColor(0xffffff, 0.08));
    }

    const world = this.add.graphics();
    for (const primitive of primitives) {
      const points = primitive.geometry.quad.map((point) => ({ x: viewport.left + point.x * viewport.width, y: viewport.top + point.y * viewport.height }));
      if (primitive.geometry.surface === "front" || primitive.kind === "closed-door") { world.lineStyle(2, primitive.kind === "closed-door" ? DUNGEON_PALETTE.door : DUNGEON_PALETTE.boundary, 0.9); world.strokePoints(points.map(({ x, y }) => new Phaser.Math.Vector2(x, y)), true); }
    }

    const debugDepths = [...new Set(primitives.map((primitive) => primitive.geometry.depth))];
    this.drawPerspectiveDebug(world, viewport, debugDepths.map((distance) => ({ distance, blocked: primitives.some((primitive) => primitive.geometry.depth === distance && primitive.geometry.surface === "front") })));
    if (this.perspectiveDebug) this.addDebugLabel(`POS ${this.state.player.position.x},${this.state.player.position.y}  FACING ${this.state.player.facing.toUpperCase()}  PRIMITIVES ${primitives.length}`, viewport.left + 8, viewport.top + viewport.height - 24);
    world.lineStyle(2, DUNGEON_PALETTE.boundary, 0.9);
    world.strokeRect(viewport.left, viewport.top, viewport.width, viewport.height);
    this.add.text(64, 24, "THE UNDERCRYPT", { color: paletteHex(DUNGEON_PALETTE.narrativeText), fontFamily: "monospace", fontSize: "22px" });
    this.add.text(width - 64, 27, `FLOOR ${this.state.floor}  •  TURN ${this.state.turn}  •  ${this.state.player.facing.toUpperCase()}`, { color: paletteHex(DUNGEON_PALETTE.interfaceMuted), fontFamily: "monospace", fontSize: "14px" }).setOrigin(1, 0);
    const combat = this.state.encounter;
    if (combat) {
      this.add.ellipse(width / 2, height / 2 - 40, 126, 190, DUNGEON_PALETTE.hostileEntity, 0.85).setStrokeStyle(4, DUNGEON_PALETTE.warningDamage).setDepth(4);
      this.add.text(width / 2, height / 2 - 56, "WARDEN", { color: paletteHex(DUNGEON_PALETTE.backgroundVoid), fontFamily: "monospace", fontSize: "16px" }).setOrigin(0.5).setDepth(5);
      this.add.rectangle(width / 2, height - 76, 500, 72, DUNGEON_PALETTE.passageDarkness, 0.98).setStrokeStyle(2, DUNGEON_PALETTE.warningDamage);
      this.add.text(width / 2, height - 101, `${combat.name}  ${combat.health}/${combat.maxHealth} HP`, { color: paletteHex(DUNGEON_PALETTE.hostileEntity), fontFamily: "monospace", fontSize: "17px" }).setOrigin(0.5);
      this.add.text(width / 2, height - 75, `YOU  ${this.state.playerHealth}/${this.state.playerMaxHealth} HP    •    SPACE LEFT STRIKE · F RIGHT STRIKE · X RETREAT`, { color: paletteHex(DUNGEON_PALETTE.playerStatus), fontFamily: "monospace", fontSize: "14px" }).setOrigin(0.5);
    } else {
      this.add.text(64, height - 85, "W/S move · A/D turn · ESC pause", { color: paletteHex(DUNGEON_PALETTE.interfaceMuted), fontFamily: "monospace", fontSize: "14px" });
    }
    this.add.text(width - 64, height - 85, combat ? "The warden raises its embered blade." : this.feedback, { color: paletteHex(combat ? DUNGEON_PALETTE.warningDamage : DUNGEON_PALETTE.narrativeText), fontFamily: "monospace", fontSize: "14px" }).setOrigin(1, 0);
    window.dispatchEvent(new CustomEvent("tarmin-state", { detail: { floor: this.state.floor, turn: this.state.turn, health: this.state.playerHealth, seed: this.state.seed, feedback: this.feedback, leftHand: this.itemName(this.state.leftHand), rightHand: this.itemName(this.state.rightHand), ring: this.state.ring.map((id) => this.itemName(id)), selectedRingIndex: this.state.selectedRingIndex } }));
  }

  private itemName(instanceId: string | null): string | null {
    if (!instanceId) return null;
    const instance = this.state.items.find((item) => item.id === instanceId);
    return instance ? itemById(instance.definitionId)?.name ?? instance.definitionId : null;
  }
}
