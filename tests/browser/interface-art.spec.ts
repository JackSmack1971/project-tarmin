import { expect, test } from "@playwright/test";

const viewports = [
  { width: 1280, height: 720, name: "1280" },
  { width: 1600, height: 900, name: "1600" },
  { width: 1920, height: 1080, name: "1920" }
] as const;

test("interface art stays coherent across the required desktop states", async ({ page }) => {
  test.setTimeout(180_000);
  const failures: string[] = [];
  page.on("console", (message) => { if (message.type() === "error") failures.push(`console: ${message.text()}`); });
  page.on("pageerror", (error) => failures.push(`page: ${error.message}`));

  for (const viewport of viewports) {
    await page.setViewportSize(viewport);
    await page.goto("/");
    await expect(page.locator("[data-start]")).toBeVisible();
    await page.screenshot({ path: `harness/evidence/phase-3-menu-${viewport.name}.png` });

    await page.getByRole("button", { name: "BEGIN DESCENT" }).click();
    await expect(page.locator("[data-hud]")).toBeVisible();
    await page.screenshot({ path: `harness/evidence/phase-3-active-${viewport.name}.png` });

    if (viewport.name !== "1600") {
      await page.keyboard.press("ArrowUp");
      await expect(page.locator("[data-combat]")).toBeVisible();
      await page.screenshot({ path: `harness/evidence/phase-3-combat-${viewport.name}.png` });
    }
    if (viewport.name === "1280") {
      await page.keyboard.press("Escape");
      await expect(page.locator("[data-pause-panel]")).toBeVisible();
      expect(await page.evaluate(() => getComputedStyle(document.documentElement).getPropertyValue("--panel-border").trim())).toContain("panel-border.png");
      await page.screenshot({ path: "harness/evidence/phase-3-pause-1280.png" });
      await page.getByRole("checkbox", { name: "REDUCED MOTION" }).check();
      await expect(page.locator("[data-motion]")).toBeChecked();
      await page.screenshot({ path: "harness/evidence/phase-3-pause-reduced-1280.png" });
    }
  }

  await page.goto("/?fixture=victorious");
  await expect(page.locator("[data-terminal]")).toBeVisible();
  await page.screenshot({ path: "harness/evidence/phase-3-terminal-1920.png", animations: "disabled" });
  expect(failures).toEqual([]);
});
