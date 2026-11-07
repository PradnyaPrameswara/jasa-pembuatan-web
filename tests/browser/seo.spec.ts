import { expect, test } from "@playwright/test";

const canonicalOrigin = "https://www.pradnyaprameswara.web.id";

test("all published routes expose consistent canonical and social metadata", async ({ page }) => {
  for (const route of [
    "/", "/about/", "/services/", "/contact/", "/work/",
    "/work/widhi-asih-bali-export/",
    "/work/diagnostic-assessment-system/",
    "/work/informatics-teaching-internship/",
  ]) {
    await page.goto(route);
    const canonical = new URL(route, canonicalOrigin).href;
    await expect(page.locator('link[rel="canonical"]')).toHaveAttribute("href", canonical);
    await expect(page.locator('meta[property="og:url"]')).toHaveAttribute("content", canonical);
    await expect(page.locator('meta[property="og:image"]')).toHaveAttribute("content", /^https:\/\//);
    await expect(page.locator('meta[name="description"]')).toHaveAttribute("content", /\S/);
    const schemaText = await page.locator('script[type="application/ld+json"]').textContent();
    expect(schemaText, `Missing JSON-LD on ${route}`).toBeTruthy();
    const graph = JSON.parse(schemaText ?? "{}") as { "@context"?: string; "@graph"?: unknown[] };
    expect(graph["@context"]).toBe("https://schema.org");
    expect(graph["@graph"]?.length).toBeGreaterThanOrEqual(3);
  }
});

test("unknown-page document is explicitly excluded from indexing", async ({ page }) => {
  await page.goto("/404.html");
  await expect(page.getByRole("heading", { name: "This page isn't here." })).toBeVisible();
  await expect(page.locator('meta[name="robots"]')).toHaveAttribute("content", /noindex/);
  await expect(page.getByRole("link", { name: "Back to homepage" })).toHaveAttribute("href", "/");
  await expect(page.getByRole("link", { name: "View experience" })).toHaveAttribute("href", "/work");
});
