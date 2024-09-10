import { test, expect } from "@chromatic-com/playwright";

const baseUrl = process.env.BASE_URL || 'http://localhost:3086';

test('Homepage UI', async ({ page }) => {
  // Utiliser l'URL de base à partir des variables d'environnement
  await page.goto(`${baseUrl}/`);
  await page.waitForTimeout(2000);

  // Comparer la capture d'écran actuelle avec l'image de référence
  await expect(page).toHaveScreenshot({
    maxDiffPixels: 100,
  });
});