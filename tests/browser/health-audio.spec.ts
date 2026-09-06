import { expect, test, type Page } from "@playwright/test";

type Snapshot = { mode: string; playerHealth: number; encounter: unknown; runStatus: string };
type AudioSnapshot = { contextState: string; mode: string; profile: { enabled: boolean; intervalMs: number; frequencyHz: number; gain: number } };

test("health cue escalates with damage and follows pause/terminal state", async ({ page }) => {
  const failures: string[] = [];
  page.on("console", (message) => { if (message.type() === "error") failures.push(message.text()); });
  page.on("pageerror", (error) => failures.push(error.message));
  await page.goto("/");
  await page.getByRole("button", { name: "BEGIN DESCENT" }).click();
  await expect.poll(() => snapshot(page).then((state) => state.mode)).toBe("active");
  expect((await audio(page)).profile.enabled).toBe(false);

  await page.keyboard.press("ArrowUp");
  await expect.poll(() => snapshot(page).then((state) => Boolean(state.encounter))).toBe(true);
  for (let attempt = 0; attempt < 6 && (await snapshot(page)).playerHealth === 10; attempt += 1) {
    await page.keyboard.press("Space");
    await page.waitForTimeout(200);
  }
  await expect.poll(() => snapshot(page).then((state) => state.playerHealth)).toBeLessThan(10);
  const damaged = await audio(page);
  expect(damaged.profile.enabled).toBe(true);
  expect(damaged.contextState).not.toBe("uncreated");

  await page.keyboard.press("Escape");
  await expect.poll(() => audio(page).then((state) => state.mode)).toBe("paused");
  expect((await audio(page)).profile.enabled).toBe(true);
  await page.getByRole("button", { name: "RESUME DESCENT" }).click();
  await expect.poll(() => audio(page).then((state) => state.mode)).toBe("active");

  await page.goto("/?fixture=combat-defeat");
  await expect.poll(() => snapshot(page).then((state) => state.mode)).toBe("active");
  await page.keyboard.press("ArrowUp");
  for (let attack = 0; attack < 6 && (await snapshot(page)).runStatus === "playing"; attack += 1) await page.keyboard.press("Space");
  await expect.poll(() => snapshot(page).then((state) => state.runStatus)).toBe("defeated");
  expect((await audio(page)).mode).toBe("terminal");
  expect((await audio(page)).contextState).toBe("uncreated");
  expect(failures).toEqual([]);
});

async function snapshot(page: Page): Promise<Snapshot> {
  return page.evaluate(() => (window as unknown as { __TARMIN_RENDERER__: Snapshot }).__TARMIN_RENDERER__);
}

async function audio(page: Page): Promise<AudioSnapshot> {
  return page.evaluate(() => (window as unknown as { __TARMIN_AUDIO__: AudioSnapshot }).__TARMIN_AUDIO__);
}
