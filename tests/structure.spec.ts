import { test, expect } from "@playwright/test";

test("home contains elements", async ({ page }) => {
  await page.goto("/");

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/PaceX Calculator/);

  // Time
  const timeRadio = page.getByRole("radio", { name: /Time/ });
  const timeSlider = page.getByRole("slider", { name: /Time/ });
  await expect(timeRadio).toBeEnabled();
  await expect(timeRadio).not.toBeChecked();
  await expect(timeSlider).toBeVisible();

  // Distance
  const distRadio = page.getByRole("radio", { name: /Distance/ });
  const distSlider = page.getByRole("slider", { name: /Distance/ });
  await expect(distRadio).toBeEnabled();
  await expect(distRadio).not.toBeChecked();
  await expect(distSlider).toBeVisible();

  // Pace
  const paceRadio = page.getByRole("radio", { name: /Pace/ });
  const paceSlider = page.getByRole("slider", { name: /Pace/ });
  await expect(paceRadio).toBeEnabled();
  await expect(paceRadio).toBeChecked();
  await expect(paceSlider).not.toBeVisible();
});
