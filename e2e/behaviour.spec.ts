import { test, expect } from "@playwright/test";

test("navigates to Time ticks correctly", async ({ page }) => {
  await page.goto("/");

  const timeSlider = page.getByRole("slider", { name: /Time/ });
  const paceText = page.getByRole("heading", { name: /Pace/ });

  await page.getByText("12'").click();
  await expect(timeSlider).toHaveValue("720");
  await expect(paceText).toContainText("Pace 02:23/km (25.0km/h)");

  await page.getByText("30'").click();
  await expect(timeSlider).toHaveValue("1800");
  await expect(paceText).toContainText("Pace 06:00/km (10.0km/h)");

  await page.getByText("+").nth(0).click();
  await expect(timeSlider).toHaveValue("3600");
  await expect(paceText).toContainText("Pace 12:00/km (5.0km/h)");
});

test("navigates to Distance ticks correctly", async ({ page }) => {
  await page.goto("/");

  const distSlider = page.getByRole("slider", { name: /Distance/ });
  const paceText = page.getByRole("heading", { name: /Pace/ });

  await page.getByText("1 mi").click();
  await expect(distSlider).toHaveValue("1600");
  await expect(paceText).toContainText("Pace 18:45/km (3.2km/h)");

  await page.getByText("5K").click();
  await expect(distSlider).toHaveValue("5000");
  await expect(paceText).toContainText("Pace 06:00/km (10.0km/h)");

  await page.getByText("+").nth(1).click();
  await expect(distSlider).toHaveValue("10000");
  await expect(paceText).toContainText("Pace 03:00/km (20.0km/h)");
});
