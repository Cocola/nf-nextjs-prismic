import { test, expect } from '@chromatic-com/playwright';

const baseUrl = process.env.BASE_URL || 'http://localhost:3086';

test('Homepage UI on Desktop', async ({ page }) => {
  await page.goto(`${baseUrl}/`);
  await page.waitForTimeout(2000);

  await expect(page).toHaveScreenshot({
    maxDiffPixels: 100,
  });
});

test('Homepage UI on iPhone 12', async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 });

  await page.goto(`${baseUrl}/`);
  await page.waitForTimeout(2000);

  await expect(page).toHaveScreenshot({
    maxDiffPixels: 100,
  });
});