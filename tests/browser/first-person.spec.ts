import { expect, test, type Page } from "@playwright/test";

type FirstPersonSnapshot = {
  mode: string;
  runStatus: string;
  firstPerson: {
    assetId: string;
    left: { itemId: string | null; presentationId: string | null };
    right: { itemId: string | null; presentationId: string | null };
  };
};

const viewports = [
  { width: 1280, height: 720, name: "1280" },
  { width: 1600, height: 900, name: "1600" },
  { width: 1920, height: 1080, name: "1920" }
] as const;

test("first-person hands remain canonical, stable, and subordinate across required states", async ({ page }) => {
  test.setTimeout(180_000);
  const failures: string[] = [];
  page.on("console", (message) => { if (message.type() === "error") failures.push(`console: ${message.text()}`); });
  page.on("pageerror", (error) => failures.push(`page: ${error.message}`));

  for (const viewport of viewports) {
    await page.setViewportSize(viewport);
    await page.goto("/?fixture=straight-corridor");
    await waitForRenderer(page);
    const empty = await renderer(page);
    expect(empty.firstPerson).toMatchObject({ assetId: "fp-hands-empty", left: { itemId: "item-ember-pike-1", presentationId: "pike" }, right: { itemId: null, presentationId: null } });
    await page.screenshot({ path: `harness/evidence/phase-5-exploration-${viewport.name}.png`, fullPage: true });

    if (viewport.name === "1280") {
      await page.goto("/");
      await page.getByRole("button", { name: "BEGIN DESCENT" }).click();
      await page.keyboard.press("ArrowUp");
      await expect.poll(() => renderer(page).then((state) => state.mode)).toBe("active");
      await page.screenshot({ path: "harness/evidence/phase-5-combat-1280.png", fullPage: true });
      await page.keyboard.press("Escape");
      await expect(page.locator("[data-pause-panel]")).toBeVisible();
      await page.screenshot({ path: "harness/evidence/phase-5-pause-1280.png", fullPage: true });
      await page.locator("[data-motion]").check();
      await page.screenshot({ path: "harness/evidence/phase-5-pause-reduced-1280.png", fullPage: true });
    }
  }

  await page.goto("/?fixture=victorious");
  await waitForRenderer(page);
  expect((await renderer(page)).firstPerson.assetId).toBe("fp-hands-empty");
  await expect(page.locator("[data-terminal]")).toBeVisible();
  await page.screenshot({ path: "harness/evidence/phase-5-victory-1920.png", fullPage: true });
  expect(failures).toEqual([]);
});

async function waitForRenderer(page: Page): Promise<void> {
  await page.waitForFunction(() => Boolean((window as unknown as { __TARMIN_RENDERER__?: FirstPersonSnapshot }).__TARMIN_RENDERER__));
}

async function renderer(page: Page): Promise<FirstPersonSnapshot> {
  return page.evaluate(() => (window as unknown as { __TARMIN_RENDERER__: FirstPersonSnapshot }).__TARMIN_RENDERER__);
}
