import { test, expect } from '@playwright/test';

const baseURL = process.env.BASE_URL ?? 'http://localhost:3000';
const apiURL = process.env.API_URL ?? 'http://localhost:3001';
const runBrowserE2E = process.env.RUN_E2E === 'true';

test.describe('golden path: login -> quotes -> configurator', () => {
  test.skip(!runBrowserE2E, 'Set RUN_E2E=true to run browser golden-path');

  test('login and load CPQ dashboard', async ({ page }) => {
    await page.goto(`${baseURL}/login`);
    await page.fill('input[type="email"]', 'demo@example.com');
    await page.fill('input[name="tenant"]', 'tenant-demo');
    await page.click('button[type="submit"]');
    await page.waitForURL('**/cpq/dashboard');
    await expect(page.getByText('Pipeline & margin overview')).toBeVisible();
    await expect(page.getByText('Constraint badge', { exact: false })).toBeVisible();
  });

  test('auth endpoint responds for seeded user', async ({ request }) => {
    const res = await request.post(`${apiURL}/auth/login`, {
      data: { email: 'demo@example.com', tenantId: 'tenant-demo' }
    });
    expect(res.ok()).toBeTruthy();
    const json = await res.json();
    expect(json.jwt).toBeTruthy();
    expect(json.tenantId).toBe('tenant-demo');
  });

  test('create project -> configure kitchen -> generate quote with latency guard', async ({ page }) => {
    await page.goto(`${baseURL}/login`);
    await page.fill('input[type="email"]', 'demo@example.com');
    await page.fill('input[name="tenant"]', 'tenant-demo');
    await page.click('button[type="submit"]');
    await page.waitForURL('**/cpq/dashboard');

    // Navigate to quotes then configure demo project
    await page.click('a:has-text("Quotes")');
    await page.waitForURL('**/cpq/quotes');
    const firstQuote = page.locator('table tr').nth(1);
    const projectId = (await firstQuote.locator('td').nth(1).textContent())?.trim();
    await firstQuote.click();
    await page.waitForURL('**/cpq/quotes/**');
    if (projectId) {
      await page.goto(`${baseURL}/cpq/configure/${projectId}`);
    }

    // Configure kitchen: interact with a parameter input and assert latency budget.
    const paramInput = page.getByLabel('Cabinet width (mm)');
    await paramInput.waitFor({ timeout: 5000 });

    const latencyBudgetMs = 150;
    const start = performance.now();
    await paramInput.focus();
    await paramInput.press('ArrowUp');

    const response = await page.waitForResponse(
      (r) =>
        r.url().includes('/configurator') ||
        (r.url().includes('trpc') && r.url().includes('mutateParameters')),
      { timeout: 5000 }
    );
    const duration = performance.now() - start;
    expect(duration).toBeLessThanOrEqual(latencyBudgetMs);

    expect(response.ok()).toBeTruthy();

    // Validate quote summary visible
    await expect(page.getByText('Summary', { exact: false })).toBeVisible();
  });
});
