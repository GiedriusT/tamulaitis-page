import { test, expect } from '@playwright/test';
import { getTranslations } from '../i18n/utils';
import { MY_NAME } from '../constants';

const t = getTranslations();

test.describe('Index page', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('has my name in the title', async ({ page }) => {
    await expect(page).toHaveTitle(new RegExp(MY_NAME));
  });

  test('header contact button is in viewport', async ({ page }) => {
    const contactMeButton = page.locator('header').getByRole('link', { name: t('contactButton.text') });
    await expect(contactMeButton).toBeInViewport();
  });

  test('projects section and first project is in viewport', async ({ page }) => {
    const projectsSection = page.locator('section', { has: page.getByText(t('projectList.title'), { exact: true }) });

    await expect(projectsSection).toBeInViewport();

    const firstprojectLink = projectsSection.locator('a').first();
    await expect(firstprojectLink).toBeInViewport();
  });
});
