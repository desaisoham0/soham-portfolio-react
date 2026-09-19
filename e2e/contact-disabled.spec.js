import { test, expect } from '@playwright/test';

// Smoke tests for the contact-disabled state. These drive the real dev server
// and assert both that the contact surfaces are gone and that nothing else on
// the page regressed as a result of removing them.

test.describe('contact surfaces are disabled', () => {
  test('no contact section, nav link, or CTA is rendered', async ({ page }) => {
    await page.goto('/');

    // The #contact section must not exist at all.
    await expect(page.locator('#contact')).toHaveCount(0);

    // No nav link pointing at the contact anchor (desktop or mobile menu).
    await expect(page.locator('a[href="#contact"]')).toHaveCount(0);

    // The Hero CTA that jumped to the contact form must be gone.
    await expect(page.getByRole('button', { name: /Contact Soham Desai/i })).toHaveCount(0);
    await expect(page.getByText(/Let.s Work Together/i)).toHaveCount(0);

    // No contact form fields anywhere.
    await expect(page.locator('input[name="email"]')).toHaveCount(0);
    await expect(page.locator('textarea[name="message"]')).toHaveCount(0);
  });

  test('the rest of the page still renders correctly', async ({ page }) => {
    await page.goto('/');

    // Remaining sections must all still be present.
    for (const id of ['home', 'about', 'projects', 'work']) {
      await expect(page.locator(`#${id}`)).toHaveCount(1);
    }

    // Remaining nav links still work.
    for (const href of ['#home', '#about', '#projects', '#work']) {
      await expect(page.locator(`a[href="${href}"]`).first()).toBeVisible();
    }

    // Footer and social links survive.
    // NOTE: asserted by tag, not by role. <Footer /> is rendered inside <main>
    // (App.jsx:69), and per the ARIA spec a <footer> nested in main/article/
    // aside/nav/section does NOT map to the `contentinfo` landmark. That is a
    // pre-existing accessibility defect (present identically on `main`), not a
    // regression from disabling the contact form — so it is reported rather
    // than silently fixed here.
    await expect(page.locator('footer')).toBeVisible();
    await expect(page.getByRole('link', { name: 'GitHub' }).first()).toBeVisible();
  });

  test('anchor navigation still scrolls (smooth-scroll handler intact)', async ({ page }) => {
    await page.goto('/');

    const startY = await page.evaluate(() => window.scrollY);
    await page.locator('a[href="#projects"]').first().click();
    await page.waitForFunction(() => window.scrollY > 0, null, { timeout: 5000 });
    const endY = await page.evaluate(() => window.scrollY);

    expect(endY).toBeGreaterThan(startY);
  });

  test('page loads with no console errors and no failed requests', async ({ page }) => {
    const consoleErrors = [];
    const failedRequests = [];

    page.on('console', msg => {
      if (msg.type() === 'error') consoleErrors.push(msg.text());
    });
    page.on('requestfailed', req => {
      failedRequests.push(`${req.url()} — ${req.failure()?.errorText}`);
    });

    await page.goto('/', { waitUntil: 'networkidle' });

    // The site must never call the contact endpoint now that the form is gone.
    expect(consoleErrors, `console errors: ${consoleErrors.join(' | ')}`).toEqual([]);
    expect(failedRequests, `failed requests: ${failedRequests.join(' | ')}`).toEqual([]);
  });

  test('no request is ever made to the contact endpoint', async ({ page }) => {
    const contactCalls = [];
    page.on('request', req => {
      if (req.url().includes('send_email')) contactCalls.push(req.url());
    });

    await page.goto('/', { waitUntil: 'networkidle' });
    await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
    await page.waitForTimeout(500);

    expect(contactCalls).toEqual([]);
  });
});
