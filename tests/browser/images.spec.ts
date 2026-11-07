import { expect, test } from "@playwright/test";

test("photographic heroes request responsive image candidates", async ({ page }) => {
  for (const route of ["/", "/about/", "/services/", "/contact/"]) {
    await page.goto(route);
    const hero = page.locator("main figure img").first();
    await expect(hero, `Missing image on ${route}`).toHaveAttribute("srcset", /480w/);
    await expect(hero).toHaveAttribute("sizes", /vw/);
    await expect(hero).toHaveAttribute("width", /^(1200|1600)$/);
    await expect(hero).toHaveAttribute("decoding", "async");
  }
});

test("work cover art is self-hosted and not presented as real screenshots", async ({ page }) => {
  await page.goto("/work/");
  const covers = page.locator("main .hover-scale-img");
  await expect(covers).toHaveCount(3);
  for (const cover of await covers.all()) {
    await expect(cover).toHaveAttribute("src", /^\/images\/work\/.+\.svg$/);
    await expect(cover).toHaveAttribute("width", "1200");
    await expect(cover).toHaveAttribute("height", "750");
  }
  await expect(page.getByText("Concept illustration", { exact: true })).toHaveCount(3);
});
