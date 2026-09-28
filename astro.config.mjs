import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import mdx from '@astrojs/mdx';
import rehypeRaw from 'rehype-raw';
import sitemap from '@astrojs/sitemap';
import { unified } from '@astrojs/markdown-remark';
import remarkPlugins from './src/remark-plugins';
import { SITE_URL } from './src/constants';
import { mdxPreBuildIntegration } from './src/integrations/mdxPreBuild';

// https://astro.build/config
export default defineConfig({
  site: SITE_URL,
  compressHTML: true,
  integrations: [mdxPreBuildIntegration(), react(), mdx(), sitemap()],
  markdown: {
    processor: unified({
      remarkPlugins,
      rehypePlugins: [rehypeRaw],
    }),
  },
  vite: {
    optimizeDeps: {
      exclude: ['fsevents'],
    },
    css: {
      preprocessorOptions: {
        scss: {
          api: 'modern-compiler',
        },
      },
    },
  },
});
