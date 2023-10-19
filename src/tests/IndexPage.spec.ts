import { test, expect } from '@playwright/test';
import { MY_NAME } from '../constants';

test('has my name in the title', async ({ page }) => {
  await page.goto('/');

  await expect(page).toHaveTitle(new RegExp(MY_NAME));
});
