import { test, expect } from '@playwright/test';

// These specs exercise the custom remark-plugin pipeline (src/remark-plugins) and the
// MD -> MDX pre-build integration (src/integrations/mdxPreBuild.ts) end to end, covering
// the transformed output types that plain build/lint checks would not catch.

test.describe('Content pipeline: mondayjazz project', () => {
  test('renders raw HTML bandcamp embeds, a spotify embed, and an image gallery', async ({ page }) => {
    const response = await page.goto('/project/mondayjazz/');
    expect(response?.status()).toBe(200);

    // rehype-raw pass-through of literal <iframe> HTML in the markdown source
    await expect(page.locator('iframe[src*="bandcamp.com/EmbeddedPlayer"]')).toHaveCount(3);

    // remarkSpotifyEmbed: standalone https://open.spotify.com link -> ArticleSpotifyEmbed
    await expect(page.locator('iframe[src*="open.spotify.com/embed/album/6HCJ3de9OKteBaB8aFrGD4"]')).toHaveCount(1);

    // remarkImageGallery: consecutive image lines -> ArticleImageGallery
    await expect(page.locator('[class*="gallery"] img[alt="Mondayjazz Mixcloud Avatar"]')).toHaveCount(1);
    await expect(page.locator('[class*="gallery"] img[alt="Mondayjazz Soundcloud Avatar"]')).toHaveCount(1);
    await expect(page.locator('[class*="gallery"] img[alt="Mondayjazz Head"]')).toHaveCount(1);
  });
});

test.describe('Content pipeline: moon-love project', () => {
  test('renders a youtube embed from a standalone link', async ({ page }) => {
    const response = await page.goto('/project/moon-love/');
    expect(response?.status()).toBe(200);

    // remarkYoutubeEmbed: standalone https://www.youtube.com/watch?v=... link -> ArticleYoutubeEmbed
    await expect(page.locator('iframe[src*="youtube.com/embed/xoYi0EoRxGA"]')).toHaveCount(1);
  });
});

test.describe('Content pipeline: dialrhea project', () => {
  test('renders a highlighted codeblock fetched from GitHub', async ({ page }) => {
    const response = await page.goto('/project/dialrhea/');
    expect(response?.status()).toBe(200);

    // remarkCodeblock: GitHub #embed link -> fetched, highlight.js processed, ArticleCodeblock
    const codeblock = page.locator('[data-codeblock]');
    await expect(codeblock).toHaveCount(1);

    const codeContent = await codeblock.locator('pre code').innerHTML();
    expect(codeContent.trim().length).toBeGreaterThan(0);
  });
});

test.describe('Content pipeline: wavetwisters-vr project', () => {
  test('renders an image gallery from consecutive image lines', async ({ page }) => {
    const response = await page.goto('/project/wavetwisters-vr/');
    expect(response?.status()).toBe(200);

    // remarkImageGallery only groups the two consecutive images, not the earlier standalone one
    await expect(page.locator('[class*="gallery"] img[alt="Google Cardboard"]')).toHaveCount(2);
    await expect(page.locator('img[alt="Google Cardboard"]')).toHaveCount(3);
  });
});
