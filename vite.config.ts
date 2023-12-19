import { defineConfig, Plugin } from 'vite';
import react from '@vitejs/plugin-react-swc';
import { visualizer } from 'rollup-plugin-visualizer';
import sitemap from 'vite-plugin-sitemap';
import dotenv from 'dotenv';
import exportMetadata from './src/utils/vite-plugin-export-metadata';
import { SITE_URL } from './src/constants';
import projects from './src/projects';

dotenv.config();

const PREVIEW_SERVER_PORT = parseInt(process.env.PREVIEW_SERVER_PORT || '4173', 10);

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    visualizer({
      filename: 'artifacts/bundle-stats.html',
    }) as unknown as Plugin,
    sitemap({
      hostname: SITE_URL,
      dynamicRoutes: projects.map((project) => `/project/${project.slug}`),
    }),
    exportMetadata({
      outDir: 'dist',
    }),
  ],
  assetsInclude: ['**/*.md'],
  preview: {
    port: PREVIEW_SERVER_PORT,
  },
});
