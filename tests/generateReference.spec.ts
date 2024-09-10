import { test, expect } from '@playwright/test';

test('Generate homepage reference screenshot', async ({ page }) => {
  await page.goto('https://www.nicolas-fiascaro.com/');
  await page.waitForTimeout(2000);

  await expect(page).toHaveScreenshot();
});