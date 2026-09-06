import { expect, test } from "@playwright/test";

test("checkpoint resumes the latest playing state after reload", async ({ page }) => {
  await page.goto("/");
  await page.locator("#seed").fill("8128");
  await page.getByRole("button", { name: "BEGIN DESCENT" }).click();
  await expect.poll(async () => page.evaluate(() => (window as unknown as { __TARMIN_RENDERER__: { mode: string } }).__TARMIN_RENDERER__.mode)).toBe("active");
  await page.keyboard.press("ArrowRight");
  await expect.poll(async () => page.evaluate(() => (window as unknown as { __TARMIN_RENDERER__: { turn: number } }).__TARMIN_RENDERER__.turn)).toBe(1);

  await page.reload();
  await expect(page.getByRole("button", { name: "CONTINUE DESCENT" })).toBeVisible();
  await page.getByRole("button", { name: "CONTINUE DESCENT" }).click();
  await expect.poll(async () => page.evaluate(() => (window as unknown as { __TARMIN_RENDERER__: { mode: string; seed: number; turn: number; facing: string } }).__TARMIN_RENDERER__)).toMatchObject({ mode: "active", seed: 8128, turn: 1, facing: "south" });
});
