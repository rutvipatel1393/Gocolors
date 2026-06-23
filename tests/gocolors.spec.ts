import { test, expect } from '@playwright/test';

test('open Go Colors website in Chrome', async ({ page }) => {
  await page.goto('https://gocolors.com/');

  await expect(page).toHaveURL(/gocolors\.com/);
  await expect(page).toHaveTitle(/Go Colors/i);

  // Keep the browser open briefly so the page is visible
  await page.waitForTimeout(5000);
});
