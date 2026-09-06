import { expect, test } from "@playwright/test";
import type { Page } from "@playwright/test";

type AmbientAudioSnapshot = { mode: string; contextState: string; count: number; lastCue: "stone-settle" | null };

test("sparse ambient cue follows the run lifecycle", async ({ page }) => {
  const errors: string[] = [];
  page.on("pageerror", (error) => errors.push(error.message));
  page.on("console", (message) => { if (message.type() === "error") errors.push(message.text()); });

  await page.goto("/?fixture=combat-defeat");
  await expect.poll(() => ambientAudio(page).then((value) => value.mode)).toBe("active");
  await expect.poll(() => ambientAudio(page).then((value) => value.count), { timeout: 3000 }).toBeGreaterThan(0);
  const active = await ambientAudio(page);
  expect(active.lastCue).toBe("stone-settle");

  await page.keyboard.press("Escape");
  await expect.poll(() => ambientAudio(page).then((value) => value.mode)).toBe("paused");
  const paused = await ambientAudio(page);
  await page.waitForTimeout(500);
  expect((await ambientAudio(page)).count).toBe(paused.count);

  await page.keyboard.press("Escape");
  await expect.poll(() => ambientAudio(page).then((value) => value.mode)).toBe("active");
  await expect.poll(() => ambientAudio(page).then((value) => value.count), { timeout: 3000 }).toBeGreaterThan(paused.count);

  await page.evaluate(() => window.dispatchEvent(new CustomEvent("tarmin-mode", { detail: "defeated" })));
  await expect.poll(() => ambientAudio(page).then((value) => value.mode)).toBe("terminal");
  expect((await ambientAudio(page)).contextState).toBe("uncreated");
  expect(errors).toEqual([]);
});

async function ambientAudio(page: Page): Promise<AmbientAudioSnapshot> {
  return page.evaluate(() => (window as unknown as { __TARMIN_AMBIENT_AUDIO__: AmbientAudioSnapshot }).__TARMIN_AMBIENT_AUDIO__);
}
