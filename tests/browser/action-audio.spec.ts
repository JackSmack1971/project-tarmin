import { expect, test, type Page } from "@playwright/test";

type ActionAudioSnapshot = { mode: string; contextState: string; count: number; lastCue: "attack" | "use" | null };

test("resource actions emit short presentation cues without changing the run", async ({ page }) => {
  const failures: string[] = [];
  page.on("console", (message) => { if (message.type() === "error") failures.push(message.text()); });
  page.on("pageerror", (error) => failures.push(error.message));
  await page.goto("/");
  await page.getByRole("button", { name: "BEGIN DESCENT" }).click();
  await expect.poll(() => actionAudio(page).then((value) => value.mode)).toBe("active");
  expect((await actionAudio(page)).count).toBe(0);
  await page.keyboard.press("ArrowUp");
  await page.keyboard.press("Space");
  await expect.poll(() => actionAudio(page).then((value) => value.lastCue)).toBe("attack");
  expect((await actionAudio(page)).count).toBe(1);
  expect((await actionAudio(page)).contextState).not.toBe("uncreated");
  await page.keyboard.press("Escape");
  await expect.poll(() => actionAudio(page).then((value) => value.mode)).toBe("paused");
  const pausedCount = (await actionAudio(page)).count;
  await page.keyboard.press("r");
  expect((await actionAudio(page)).count).toBe(pausedCount);
  await page.getByRole("button", { name: "RESUME DESCENT" }).click();
  await page.goto("/");
  await page.getByRole("button", { name: "BEGIN DESCENT" }).click();
  await page.keyboard.press("e");
  await page.keyboard.press("r");
  await expect.poll(() => actionAudio(page).then((value) => value.lastCue)).toBe("use");
  expect((await actionAudio(page)).count).toBe(1);
  expect(failures).toEqual([]);
});

async function actionAudio(page: Page): Promise<ActionAudioSnapshot> {
  return page.evaluate(() => (window as unknown as { __TARMIN_ACTION_AUDIO__: ActionAudioSnapshot }).__TARMIN_ACTION_AUDIO__);
}
