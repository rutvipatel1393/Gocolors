import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  fullyParallel: false,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: 1,
  reporter: process.env.CI ? [['list'], ['html']] : 'list',
  use: {
    baseURL: 'https://gocolors.com',
    headless: !!process.env.CI,
    viewport: { width: 1280, height: 720 },
    screenshot: 'only-on-failure',
    trace: 'on-first-retry',
  },
  projects: [
    {
      name: 'chrome',
      use: process.env.CI
        ? { ...devices['Desktop Chrome'] }
        : { ...devices['Desktop Chrome'], channel: 'chrome' },
    },
  ],
});
