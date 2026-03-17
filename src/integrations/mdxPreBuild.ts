import type { AstroIntegration } from 'astro';
import { generateTemporaryMdxFiles } from '../utils/mdx';

/**
 * Astro integration that converts .md files to .mdx before build starts
 */
export function mdxPreBuildIntegration(): AstroIntegration {
  return {
    name: 'mdx-pre-build',
    hooks: {
      'astro:build:start': async () => {
        console.log('🔄 Converting .md files to temporary .mdx files before build...');
        await generateTemporaryMdxFiles();
      },
      'astro:build:done': () => {
        console.log('🧹 Cleaning up temporary .mdx files... THIS NEEDS TO BE IMPLEMENTED');
        // Note: We'll add cleanup logic here later if needed
      },
    },
  };
}
