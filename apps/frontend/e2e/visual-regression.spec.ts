import { test, expect, type Page } from '@playwright/test';

const baseURL = process.env.BASE_URL ?? 'http://localhost:3000';
const runVisual = process.env.RUN_VISUAL_REGRESSION === 'true';

const login = async (page: Page) => {
  await page.goto(`${baseURL}/login`);
  await page.fill('input[type="email"]', 'demo@example.com');
  await page.fill('input[name="tenant"]', 'tenant-demo');
  await page.click('button[type="submit"]');
  await page.waitForURL('**/cpq/dashboard');
};

test.describe('visual regression smoke', () => {
  test.skip(!runVisual, 'Set RUN_VISUAL_REGRESSION=true to capture visuals');

  test('cpq dashboard', async ({ page }) => {
    await login(page);
    const screenshot = await page.screenshot({ fullPage: true });
    expect(screenshot.byteLength).toBeGreaterThan(1000);
  });

  test('quote detail', async ({ page }) => {
    await login(page);
    await page.click('a:has-text("Quotes")');
    await page.waitForURL('**/cpq/quotes');
    await page.locator('table tr').nth(1).click();
    await page.waitForURL('**/cpq/quotes/**');
    const screenshot = await page.screenshot({ fullPage: true });
    expect(screenshot.byteLength).toBeGreaterThan(1000);
  });

  test('configure view', async ({ page }) => {
    await login(page);
    await page.click('a:has-text("Configure")');
    await page.waitForURL('**/cpq/configure/**');
    const screenshot = await page.screenshot({ fullPage: true });
    expect(screenshot.byteLength).toBeGreaterThan(1000);
  });
});
