import { expect, test } from "@playwright/test";

test("contact form labels, required fields and malformed email", async ({ page }) => {
  await page.goto("/contact/");
  const form = page.getByRole("form", { name: "Opportunity or project inquiry form" });

  await expect(form.getByRole("textbox", { name: "Name", exact: true })).toBeVisible();
  await expect(form.getByRole("textbox", { name: "Email", exact: true })).toBeVisible();
  await expect(form.getByRole("textbox", { name: "Company / Organization" })).toBeVisible();
  await expect(form.getByRole("textbox", { name: "Opportunity or project details" })).toBeVisible();
  await expect(page.locator("#inquiry")).toHaveAttribute("id", "inquiry");
  await expect(page.locator("#budget")).toHaveAttribute("id", "budget");

  await form.getByRole("button", { name: "Compose email" }).click();
  await expect(page.locator("#name")).toBeFocused();
  await expect(form.getByText("Check your email app")).toHaveCount(0);

  await page.locator("#name").fill("Test Visitor");
  await page.locator("#email").fill("not-an-email");
  await form.getByRole("button", { name: "Compose email" }).click();
  expect(await page.locator("#email").evaluate((node: HTMLInputElement) => node.validity.typeMismatch)).toBe(true);
  await expect(form.getByText("Check your email app")).toHaveCount(0);
});

test("valid contact inquiry prepares a draft without claiming to send", async ({ page }) => {
  await page.goto("/contact/");
  await page.locator("#name").fill("Test Visitor");
  await page.locator("#email").fill("visitor@example.test");
  await page.locator("#company").fill("Example Company");
  await page.locator("#description").fill("Could we discuss a responsive website project?");
  await page.locator("#inquiry").click();
  await page.getByRole("option", { name: "Website development" }).click();
  await expect(page.locator("#inquiry")).toContainText("Website development");

  await page.getByRole("button", { name: "Compose email" }).click();
  await expect(page.getByText("Check your email app")).toBeVisible();
  await expect(page.getByText(/No message was sent automatically/)).toBeVisible();
  await expect(page.getByRole("link", { name: "agungpradnya7@gmail.com" }).last()).toHaveAttribute("href", "mailto:agungpradnya7@gmail.com");
});

test("homepage FAQ expands and collapses without a page navigation", async ({ page }) => {
  await page.goto("/");
  const trigger = page.getByRole("button", { name: "What roles are you currently looking for?" });
  await trigger.scrollIntoViewIfNeeded();
  await expect(trigger).toBeVisible();
  const answer = page.locator(".glass-panel")
    .filter({ has: trigger })
    .getByText(/full-time opportunities as a Fullstack Developer/);
  await trigger.click();
  await expect(answer).toBeVisible();
  await trigger.click();
  await expect(answer).toBeHidden();
});

test("mobile sheet can open, navigate and close", async ({ page, isMobile }) => {
  // This behavior is specific to the mobile viewport.
  if (!isMobile && (page.viewportSize()?.width ?? 1440) >= 768) {
    test.skip();
  }
  await page.goto("/");
  await page.getByRole("button", { name: "Open mobile menu" }).click();
  await expect(page.getByRole("dialog")).toBeVisible();
  await expect(page.getByRole("navigation", { name: "Mobile navigation" })).toBeVisible();
  await page.getByRole("button", { name: "Close" }).click();
  await expect(page.getByRole("dialog")).toHaveCount(0);
});
