import { defineConfig } from '@playwright/test';

export default defineConfig({
  timeout: 60000,
  expect: {
    toHaveScreenshot: {
      maxDiffPixels: 100,
      stylePath: "tests/e2e.css"
    },
  },
  use: {
    headless: true,
    viewport: { width: 1440, height: 720 },
    screenshot: 'only-on-failure',
    trace: 'on-first-retry',
  },
});