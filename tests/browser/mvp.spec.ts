import { expect, test, type Page } from "@playwright/test";

type RendererSnapshot = {
  mode: string;
  runStatus: string;
  seed: number;
  turn: number;
  position: { x: number; y: number };
  facing: string;
  playerHealth: number;
  encounter: { id: string; definitionId: string; health: number } | null;
  ring: readonly string[];
  selectedRingIndex: number;
  leftHand: string | null;
  rightHand: string | null;
  loot: readonly string[];
  objective: { acquired: boolean; complete: boolean; exit: { x: number; y: number } };
  features: readonly { kind: string; depth: number; surface?: string; cell: { x: number; y: number } }[];
  primitiveTypes: readonly string[];
};

test("architectural features respect visible openings and blockers", async ({ page }) => {
  test.setTimeout(60_000);
  const failures = collectBrowserFailures(page);

  await page.goto("/?fixture=straight-corridor");
  await waitForRenderer(page);
  await expect.poll(async () => (await renderer(page)).mode).toBe("active");
  expect((await renderer(page)).features.filter((feature) => feature.kind === "archway").map((feature) => feature.depth)).toEqual([4, 3, 2, 1]);
  await page.screenshot({ path: "harness/evidence/phase-2-open-passage.png", fullPage: true });

  await page.goto("/?fixture=closed-door");
  await waitForRenderer(page);
  await expect.poll(async () => (await renderer(page)).mode).toBe("active");
  expect((await renderer(page)).primitiveTypes).toContain("1:front:closed-door");
  expect((await renderer(page)).features.filter((feature) => feature.kind === "archway")).toEqual([]);
  await page.screenshot({ path: "harness/evidence/phase-2-closed-iron-door.png", fullPage: true });

  await page.goto("/?fixture=left-opening-1");
  await waitForRenderer(page);
  await expect.poll(async () => (await renderer(page)).mode).toBe("active");
  const before = await renderer(page);
  await page.keyboard.press("ArrowRight");
  await expect.poll(async () => (await renderer(page)).turn).toBe(before.turn + 1);
  await page.screenshot({ path: "harness/evidence/phase-2-turn-opening.png", fullPage: true });

  await page.goto("/?fixture=straight-corridor");
  await waitForRenderer(page);
  await expect.poll(async () => (await renderer(page)).mode).toBe("active");
  expect((await renderer(page)).features.every((feature) => feature.depth <= 4)).toBe(true);
  await page.screenshot({ path: "harness/evidence/phase-2-deep-corridor.png", fullPage: true });
  expect(failures).toEqual([]);
});

async function renderer(page: Page): Promise<RendererSnapshot> {
  return page.evaluate(() => (window as unknown as { __TARMIN_RENDERER__: RendererSnapshot }).__TARMIN_RENDERER__);
}

async function waitForRenderer(page: Page): Promise<void> {
  await page.waitForFunction(() => Boolean((window as unknown as { __TARMIN_RENDERER__?: RendererSnapshot }).__TARMIN_RENDERER__));
}

async function startRun(page: Page, seed = "7391"): Promise<void> {
  await page.locator("#seed").fill(seed);
  await page.getByRole("button", { name: "BEGIN DESCENT" }).click();
  await expect.poll(async () => (await renderer(page)).mode).toBe("active");
  await expect(page.locator("[data-hud]")).toBeVisible();
}

async function pressAndWait(page: Page, key: string, expectedTurn?: number): Promise<RendererSnapshot> {
  const before = await renderer(page);
  void expectedTurn;
  await page.keyboard.press(key);
  await page.waitForTimeout(200);
  const after = await renderer(page);
  if (after.turn <= before.turn) throw new Error(`Command ${key} did not advance from ${JSON.stringify(before)}; after=${JSON.stringify(after)}`);
  if (after.mode === "transitioning") await expect.poll(async () => (await renderer(page)).mode).toBe("active");
  return renderer(page);
}

async function attackUntilEncounterEnds(page: Page, maximumAttacks: number): Promise<RendererSnapshot> {
  for (let attack = 0; attack < maximumAttacks; attack += 1) {
    if (!(await renderer(page)).encounter) break;
    await pressAndWait(page, "Space");
  }
  return renderer(page);
}

function collectBrowserFailures(page: Page): string[] {
  const failures: string[] = [];
  page.on("console", (message) => { if (message.type() === "error") failures.push(`console: ${message.text()}`); });
  page.on("pageerror", (error) => failures.push(`page: ${error.message}`));
  return failures;
}

test("seeded MVP run completes the populated floor and restarts", async ({ page }) => {
  test.setTimeout(60_000);
  const failures = collectBrowserFailures(page);
  await page.goto("/");
  await startRun(page);

  let state = await pressAndWait(page, "ArrowUp", 1);
  expect(state.encounter).toMatchObject({ id: "monster-warden-1", definitionId: "ashbound-warden" });
  expect(await page.locator("[data-combat]").isVisible()).toBe(true);

  state = await attackUntilEncounterEnds(page, 5);
  expect(state.encounter).toBeNull();
  expect(state.loot).toHaveLength(1);
  expect(state.objective.acquired).toBe(false);
  await expect(page.locator("[data-feedback]")).toContainText("Loot waits nearby");

  await pressAndWait(page, "p", 6);
  state = await renderer(page);
  expect(state.loot).toEqual([]);
  expect(state.objective.acquired).toBe(true);
  expect(state.ring).toHaveLength(3);

  await pressAndWait(page, "e", 7);
  state = await pressAndWait(page, "r", 8);
  expect(state.ring).toHaveLength(2);
  await pressAndWait(page, "q", 9);
  state = await pressAndWait(page, "x", 10);
  expect(state.rightHand).toBe("item-ember-pike-1");

  await pressAndWait(page, "ArrowUp", 11);
  state = await pressAndWait(page, "ArrowDown", 12);
  expect(state.position).toEqual({ x: 1, y: 1 });
  state = await pressAndWait(page, "ArrowUp", 13);
  expect(state.position).toEqual({ x: 2, y: 1 });
  expect(state.encounter).toBeNull();
  expect(await page.locator("[data-combat]").isVisible()).toBe(false);

  await pressAndWait(page, "ArrowDown", 14);
  await pressAndWait(page, "ArrowRight", 15);
  await pressAndWait(page, "ArrowUp", 16);
  await pressAndWait(page, "ArrowUp", 17);
  await pressAndWait(page, "ArrowLeft", 18);
  await pressAndWait(page, "ArrowUp", 19);
  await pressAndWait(page, "ArrowUp", 20);
  await pressAndWait(page, "ArrowUp", 21);
  state = await pressAndWait(page, "ArrowUp", 22);
  expect(state.encounter).toMatchObject({ id: "monster-mireling-3", definitionId: "glass-mireling" });
  await expect(page.locator("[data-encounter-name]")).toHaveText("Glass Mireling");
  state = await attackUntilEncounterEnds(page, 5);
  expect(state.encounter).toBeNull();
  expect(state.loot).toHaveLength(1);
  await pressAndWait(page, "p", 27);

  await pressAndWait(page, "ArrowLeft", 28);
  await pressAndWait(page, "ArrowLeft", 29);
  await pressAndWait(page, "ArrowUp", 30);
  await pressAndWait(page, "ArrowUp", 31);
  await pressAndWait(page, "ArrowLeft", 32);
  state = await pressAndWait(page, "ArrowUp", 33);
  expect(state.position).toEqual({ x: 2, y: 4 });
  expect(state.runStatus).toBe("victorious");
  expect(state.objective).toMatchObject({ acquired: true, complete: true });
  await expect(page.locator("[data-terminal]")).toBeVisible();
  await expect(page.locator("[data-terminal-title]")).toHaveText("THE UNDERCRYPT YIELDS");

  const terminalTurn = state.turn;
  await page.keyboard.press("ArrowUp");
  expect((await renderer(page)).turn).toBe(terminalTurn);

  await page.getByRole("button", { name: "RESTART SAME SEED" }).click();
  await expect.poll(async () => (await renderer(page)).mode).toBe("active");
  state = await renderer(page);
  expect(state).toMatchObject({ seed: 7391, runStatus: "playing", turn: 0, playerHealth: 10, position: { x: 1, y: 1 } });
  expect(state.objective).toMatchObject({ acquired: false, complete: false });
  expect(failures).toEqual([]);
});

test("deterministic combat defeat blocks play and restarts", async ({ page }) => {
  test.setTimeout(60_000);
  const failures = collectBrowserFailures(page);
  await page.goto("/?fixture=combat-defeat");
  await expect.poll(async () => (await renderer(page)).mode).toBe("active");
  expect((await renderer(page)).playerHealth).toBe(1);
  let state = await pressAndWait(page, "ArrowUp", 1);
  expect(state.encounter).toMatchObject({ id: "monster-warden-1", definitionId: "ashbound-warden" });

  for (let attempt = 0; attempt < 6 && (await renderer(page)).runStatus === "playing"; attempt += 1) await page.keyboard.press("Space");
  await expect.poll(async () => (await renderer(page)).mode).toBe("defeated");
  state = await renderer(page);
  expect(state).toMatchObject({ runStatus: "defeated", playerHealth: 0 });
  expect(state.encounter).toBeNull();
  await expect(page.locator("[data-terminal]")).toBeVisible();
  await expect(page.locator("[data-terminal-title]")).toHaveText("THE TORCH GUTTERS");

  const terminalTurn = state.turn;
  await page.keyboard.press("ArrowUp");
  expect((await renderer(page)).turn).toBe(terminalTurn);
  await page.getByRole("button", { name: "RESTART SAME SEED" }).click();
  await expect.poll(async () => (await renderer(page)).mode).toBe("active");
  expect(await renderer(page)).toMatchObject({ seed: 7391, runStatus: "playing", turn: 0, playerHealth: 10 });
  expect(failures).toEqual([]);
});
