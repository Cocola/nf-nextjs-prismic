// file: tests/visualRegression.spec.ts

import { test, expect } from '@playwright/test';

const baseUrl = process.env.BASE_URL || 'http://localhost:3086';

test('compare current homepage with reference', async ({ page }) => {
  // Utiliser l'URL de base à partir des variables d'environnement
  await page.goto(`${baseUrl}/`);
  await page.waitForTimeout(2000);

  // Comparer la capture d'écran actuelle avec l'image de référence
  await expect(page).toHaveScreenshot('homepage-reference.png', {
    maxDiffPixels: 100,
  });
});