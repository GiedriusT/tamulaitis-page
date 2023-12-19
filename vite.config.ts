/* eslint-disable import/first */
import dotenv from 'dotenv';

dotenv.config();

import { defineConfig, Plugin } from 'vite';
import react from '@vitejs/plugin-react-swc';
import { visualizer } from 'rollup-plugin-visualizer';
import sitemap from 'vite-plugin-sitemap';
import exportMetadata from './src/utils/vite-plugin-export-metadata';
import { SITE_URL } from './src/constants';
import projects from './src/projects';

const VITE_DEV_SERVER_PORT = parseInt(process.env.VITE_DEV_SERVER_PORT || '5173', 10);
const VITE_PREVIEW_SERVER_PORT = parseInt(process.env.VITE_PREVIEW_SERVER_PORT || '4173', 10);

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
    port: VITE_PREVIEW_SERVER_PORT,
  },
  server: {
    port: VITE_DEV_SERVER_PORT,
  },
});
