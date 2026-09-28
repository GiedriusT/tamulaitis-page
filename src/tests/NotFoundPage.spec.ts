import { test, expect } from '@playwright/test';

test.describe('404 page', () => {
  test('renders not found message with a link back home', async ({ page }) => {
    const response = await page.goto('/this-page-does-not-exist');
    expect(response?.status()).toBe(404);

    await expect(page.locator('h1')).toContainText('Nothing found at this address');

    const homeLink = page.getByRole('link', { name: 'homepage' });
    await expect(homeLink).toHaveAttribute('href', '/');
  });
});
