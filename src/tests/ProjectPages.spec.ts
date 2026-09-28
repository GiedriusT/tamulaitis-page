import { test, expect, type Page } from '@playwright/test';
import { getProjectCanonicalUrl, getProjects } from '../utils/projects';

// Only uncaught exceptions in our own page scripts are tracked here. Third-party embeds
// (YouTube, Bandcamp, Spotify) can emit unrelated console warnings/errors (e.g. cross-site
// cookie rejections) that are outside our control and would make this check flaky.
const collectPageErrors = (page: Page) => {
  const errors: string[] = [];
  page.on('pageerror', (error) => errors.push(error.message));
  return errors;
};

const projects = getProjects();

test.describe('Project pages', () => {
  for (const project of projects) {
    test(`${project.slug} renders without errors`, async ({ page }) => {
      const errors = collectPageErrors(page);

      const response = await page.goto(getProjectCanonicalUrl(project, true));
      expect(response?.status()).toBe(200);

      await expect(page).toHaveTitle(new RegExp(project.title));
      await expect(page.locator('h1')).toContainText(project.subtitle);

      expect(errors).toEqual([]);
    });
  }
});
