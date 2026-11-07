import { expect, test } from "@playwright/test";

/**
 * Check the rendered page width, not just a screenshot of the viewport.
 * A wrapped long heading must not create sideways page scrolling.
 */
test("public routes remain within supported viewport widths", async ({ page }, testInfo) => {
  test.skip(testInfo.project.name !== "mobile-chromium", "Run the viewport matrix once.");

  const allRoutes = [
    "/", "/about/", "/services/", "/contact/", "/work/",
    "/work/widhi-asih-bali-export/",
    "/work/diagnostic-assessment-system/",
    "/work/informatics-teaching-internship/",
  ];
  const primaryRoutes = ["/", "/work/", "/contact/"];
  for (const width of [375, 390, 430, 768, 1024, 1280, 1440]) {
    await page.setViewportSize({ width, height: 900 });
    const routes = width === 375 || width === 768 || width === 1440
      ? allRoutes
      : primaryRoutes;

    for (const route of routes) {
      await page.goto(route, { waitUntil: "domcontentloaded" });
      const heading = page.getByRole("heading", { level: 1 });
      await expect(heading, `Missing H1 on ${route} at ${width}px`).toBeVisible();
      const dimensions = await page.evaluate(() => ({
        viewport: document.documentElement.clientWidth,
        document: document.documentElement.scrollWidth,
      }));
      expect(dimensions.document, `Horizontal overflow on ${route} at ${width}px`)
        .toBeLessThanOrEqual(dimensions.viewport + 1);
      const rect = await heading.boundingBox();
      expect(rect, `No H1 bounding box on ${route}`).not.toBeNull();
      if (rect) {
        expect(rect.x, `H1 starts outside viewport: ${route} at ${width}px`).toBeGreaterThanOrEqual(-1);
        expect(rect.x + rect.width, `H1 ends outside viewport: ${route} at ${width}px`).toBeLessThanOrEqual(width + 1);
      }
    }
  }
});

test("reduced motion removes portfolio image hover transforms", async ({ page }, testInfo) => {
  test.skip(testInfo.project.name !== "desktop-chromium", "Hover behavior needs a desktop pointer.");
  await page.emulateMedia({ reducedMotion: "reduce" });
  await page.goto("/work/");
  const image = page.locator(".hover-scale-img").first();
  await image.hover();
  await expect(image).toHaveCSS("transform", "none");
});
