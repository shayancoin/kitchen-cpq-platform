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
    await expect(page.getByText('CPQ Dashboard')).toBeVisible();
    await expect(page.getByText('Constraint Badge')).toBeVisible();
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
});
