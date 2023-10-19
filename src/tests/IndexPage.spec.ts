import { test, expect } from '@playwright/test';
import { MY_NAME, CONTACT_BUTTON_TEXT, PROJECT_LIST_TITLE } from '../constants';

test.describe('Index page', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('has my name in the title', async ({ page }) => {
    await expect(page).toHaveTitle(new RegExp(MY_NAME));
  });

  test('header contact button is in viewport', async ({ page }) => {
    const contactMeButton = page.locator('header').getByRole('button', { name: CONTACT_BUTTON_TEXT });
    await expect(contactMeButton).toBeInViewport();
  });

  test('projects section and first project is in viewport', async ({ page }) => {
    const projectsSection = page.locator('section', { has: page.getByText(PROJECT_LIST_TITLE, { exact: true }) });

    await expect(projectsSection).toBeInViewport();

    const firstprojectLink = projectsSection.locator('a').first();
    await expect(firstprojectLink).toBeInViewport();
  });
});
