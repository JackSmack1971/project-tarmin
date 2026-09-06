import { expect, test, type Page } from "@playwright/test";

type Snapshot = {
  mode: string;
  runStatus: string;
  encounter: { id: string; definitionId: string } | null;
  entities: readonly { id: string; definitionId: string; depth: number; lightLevel: number }[];
  loot: readonly string[];
  objective: { acquired: boolean; complete: boolean };
  turn: number;
};

test("Warden asset survives encounter, attack, defeat, and Seal victory", async ({ page }) => {
  test.setTimeout(180_000);
  const failures: string[] = [];
  page.on("console", (message) => { if (message.type() === "error") failures.push(`console: ${message.text()}`); });
  page.on("pageerror", (error) => failures.push(`page: ${error.message}`));
  await page.goto("/");
  await page.locator("#seed").fill("7391");
  await page.getByRole("button", { name: "BEGIN DESCENT" }).click();
  await expect.poll(async () => (await snapshot(page)).mode).toBe("active");
  await page.screenshot({ path: "harness/evidence/phase-6-warden-approach.png", fullPage: true });

  await command(page, "ArrowUp");
  let state = await snapshot(page);
  expect(state.encounter).toMatchObject({ id: "monster-warden-1", definitionId: "ashbound-warden" });
  expect(state.entities).toMatchObject([{ id: "monster-warden-1", definitionId: "ashbound-warden", depth: 1, lightLevel: 1 }]);
  await page.screenshot({ path: "harness/evidence/phase-6-warden-encounter.png", fullPage: true });

  await command(page, "Space");
  await page.screenshot({ path: "harness/evidence/phase-6-warden-attack.png", fullPage: true });
  for (let attack = 0; attack < 5 && (await snapshot(page)).encounter; attack += 1) await command(page, "Space");
  state = await snapshot(page);
  expect(state.encounter).toBeNull();
  expect(state.entities).toEqual([]);
  expect(state.loot).toEqual(["item-loot-5"]);
  await page.screenshot({ path: "harness/evidence/phase-6-warden-defeated.png", fullPage: true });

  await command(page, "p");
  state = await snapshot(page);
  expect(state.objective.acquired).toBe(true);
  expect(state.loot).toEqual([]);
  await command(page, "e"); await command(page, "r"); await command(page, "q"); await command(page, "x");
  await command(page, "ArrowUp"); await command(page, "ArrowDown"); await command(page, "ArrowUp");
  await command(page, "ArrowDown"); await command(page, "ArrowRight"); await command(page, "ArrowUp");
  await command(page, "ArrowUp"); await command(page, "ArrowLeft"); await command(page, "ArrowUp");
  await command(page, "ArrowUp"); await command(page, "ArrowUp"); await command(page, "ArrowUp");
  state = await snapshot(page);
  expect(state.encounter?.definitionId).toBe("glass-mireling");
  for (let attack = 0; attack < 5 && (await snapshot(page)).encounter; attack += 1) await command(page, "Space");
  await command(page, "p");
  await command(page, "ArrowLeft"); await command(page, "ArrowLeft"); await command(page, "ArrowUp");
  await command(page, "ArrowUp"); await command(page, "ArrowLeft"); await command(page, "ArrowUp");
  state = await snapshot(page);
  expect(state.runStatus).toBe("victorious");
  expect(state.objective.complete).toBe(true);
  await page.screenshot({ path: "harness/evidence/phase-6-warden-seal-victory.png", fullPage: true });
  expect(failures).toEqual([]);
});

test("Warden remains visible at supported viewport sizes", async ({ page }) => {
  test.setTimeout(60_000);
  const failures: string[] = [];
  page.on("console", (message) => { if (message.type() === "error") failures.push(`console: ${message.text()}`); });
  page.on("pageerror", (error) => failures.push(`page: ${error.message}`));
  for (const viewport of [{ width: 1280, height: 720, name: "1280" }, { width: 1600, height: 900, name: "1600" }, { width: 1920, height: 1080, name: "1920" }]) {
    await page.setViewportSize(viewport);
    await page.goto("/");
    await page.locator("#seed").fill("7391");
    await page.getByRole("button", { name: "BEGIN DESCENT" }).click();
    await expect.poll(async () => (await snapshot(page)).mode).toBe("active");
    await page.keyboard.press("ArrowUp");
    await expect.poll(async () => (await snapshot(page)).encounter).not.toBeNull();
    await page.screenshot({ path: `harness/evidence/phase-6-warden-${viewport.name}.png`, fullPage: true });
  }
  expect(failures).toEqual([]);
});

async function command(page: Page, key: string): Promise<void> {
  const before = await snapshot(page);
  await page.keyboard.press(key);
  await page.waitForTimeout(200);
  await expect.poll(async () => (await snapshot(page)).turn).toBeGreaterThan(before.turn);
  if ((await snapshot(page)).mode === "transitioning") await expect.poll(async () => (await snapshot(page)).mode).toBe("active");
}

async function snapshot(page: Page): Promise<Snapshot> {
  return page.evaluate(() => (window as unknown as { __TARMIN_RENDERER__: Snapshot }).__TARMIN_RENDERER__);
}
