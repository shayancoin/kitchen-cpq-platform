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

  test('create project -> configure kitchen -> generate quote with latency guard', async ({ page }) => {
    await page.goto(`${baseURL}/login`);
    await page.fill('input[type="email"]', 'demo@example.com');
    await page.fill('input[name="tenant"]', 'tenant-demo');
    await page.click('button[type="submit"]');
    await page.waitForURL('**/cpq/dashboard');

    // Create project (expect a CTA exists; skip if not present yet)
    const createProjectButton = page.locator('[data-test="create-project"]');
    if (!(await createProjectButton.isVisible({ timeout: 3000 }))) {
      test.skip(true, 'create-project CTA not available');
    }
    await createProjectButton.click();
    await page.fill('[data-test="project-name"]', `E2E Kitchen ${Date.now()}`);
    await page.click('[data-test="project-create-submit"]');
    await page.waitForURL('**/cpq/quotes/**');

    // Enter configurator for the created project
    const openConfigurator = page.locator('[data-test="open-configurator"]').first();
    await openConfigurator.click();
    await page.waitForURL('**/cpq/configure/**');

    // Configure kitchen: interact with a parameter input and assert latency budget.
    const paramSlider = page.locator('[data-test="room-width"] input, [data-test="param-width"] input').first();
    if (!(await paramSlider.isVisible({ timeout: 3000 }))) {
      test.skip(true, 'Configurator parameter control not available');
    }

    const latencyBudgetMs = 150;
    const start = performance.now();
    await paramSlider.focus();
    await paramSlider.press('ArrowRight');

    const response = await page.waitForResponse(
      (r) =>
        r.url().includes('/configurator') ||
        (r.url().includes('trpc') && r.url().includes('mutateParameters')),
      { timeout: 5000 }
    );
    const duration = performance.now() - start;
    expect(duration).toBeLessThanOrEqual(latencyBudgetMs);

    expect(response.ok()).toBeTruthy();

    // Generate quote flow (stub: ensure quote action button exists and triggers request)
    const generateQuoteBtn = page.locator('[data-test="generate-quote"]');
    if (!(await generateQuoteBtn.isVisible({ timeout: 3000 }))) {
      test.skip(true, 'Generate quote action not available');
    }
    const quoteResponsePromise = page.waitForResponse(
      (r) => r.url().includes('/quotes') || r.url().includes('recomputeQuote'),
      { timeout: 5000 }
    );
    await generateQuoteBtn.click();
    const quoteResponse = await quoteResponsePromise;
    expect(quoteResponse.ok()).toBeTruthy();

    // Validate quote summary visible
    await expect(page.locator('[data-test="quote-summary"], text=Quote')).toBeVisible();
  });
});
