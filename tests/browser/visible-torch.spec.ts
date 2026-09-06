import { expect, test, type Page } from "@playwright/test";

type TorchSnapshot = {
  mode: string;
  features: readonly { kind: string; depth: number; surface?: string }[];
  atmosphere: { torchSources: number };
  reducedMotion: boolean;
};

test("visible torch sources preserve occlusion through the required presentation states", async ({ page }) => {
  test.setTimeout(60_000);
  const failures: string[] = [];
  page.on("console", (message) => { if (message.type() === "error") failures.push(`console: ${message.text()}`); });
  page.on("pageerror", (error) => failures.push(`page: ${error.message}`));

  await page.goto("/?fixture=wall-1");
  await waitForRenderer(page);
  await expect.poll(() => snapshot(page).then((state) => state.mode)).toBe("active");
  expect((await snapshot(page)).features.filter((feature) => feature.kind === "torch-sconce")).toHaveLength(1);
  expect(await page.locator("canvas").evaluate((canvas) => canvas.getContext("webgl")?.constructor.name)).toBeTruthy();
  await page.screenshot({ path: "harness/evidence/phase-4-near-torch.png", fullPage: true });

  await page.goto("/?fixture=straight-corridor");
  await waitForRenderer(page);
  expect((await snapshot(page)).features.filter((feature) => feature.kind === "torch-sconce").length).toBeGreaterThan(0);
  await page.screenshot({ path: "harness/evidence/phase-4-deep-corridor.png", fullPage: true });

  await page.goto("/?fixture=left-opening-1");
  await waitForRenderer(page);
  await page.keyboard.press("ArrowRight");
  expect(["active", "transitioning"]).toContain((await snapshot(page)).mode);
  await page.screenshot({ path: "harness/evidence/phase-4-movement-transition.png", fullPage: true });

  await page.goto("/?fixture=combat-defeat");
  await waitForRenderer(page);
  await page.keyboard.press("ArrowUp");
  expect(["active", "transitioning"]).toContain((await snapshot(page)).mode);
  await page.screenshot({ path: "harness/evidence/phase-4-encounter.png", fullPage: true });
  await expect.poll(() => snapshot(page).then((state) => state.mode)).toBe("active");
  await page.goto("/?fixture=defeated");
  await waitForRenderer(page);
  await expect.poll(() => snapshot(page).then((state) => state.mode)).toBe("defeated");
  await page.screenshot({ path: "harness/evidence/phase-4-post-defeat.png", fullPage: true });

  await page.goto("/");
  await page.locator("#seed").fill("7391");
  await page.getByRole("button", { name: "BEGIN DESCENT" }).click();
  await expect.poll(() => snapshot(page).then((state) => state.mode)).toBe("active");
  await page.keyboard.press("Escape");
  await page.locator("[data-motion]").check();
  await page.getByRole("button", { name: "RESUME DESCENT" }).click();
  expect(await snapshot(page)).toMatchObject({ reducedMotion: true });
  await page.screenshot({ path: "harness/evidence/phase-4-reduced-motion.png", fullPage: true });
  expect(failures).toEqual([]);
});

async function waitForRenderer(page: Page): Promise<void> {
  await page.waitForFunction(() => Boolean((window as unknown as { __TARMIN_RENDERER__?: TorchSnapshot }).__TARMIN_RENDERER__));
}

async function snapshot(page: Page): Promise<TorchSnapshot> {
  return page.evaluate(() => (window as unknown as { __TARMIN_RENDERER__: TorchSnapshot }).__TARMIN_RENDERER__);
}
