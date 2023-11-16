import { defineConfig, Plugin } from 'vite';
import react from '@vitejs/plugin-react-swc';
import { visualizer } from 'rollup-plugin-visualizer';
import dotenv from 'dotenv';

dotenv.config();

const PREVIEW_SERVER_PORT = parseInt(process.env.PREVIEW_SERVER_PORT || '4173', 10);

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    visualizer({
      filename: 'artifacts/bundle-stats.html',
    }) as unknown as Plugin,
  ],
  assetsInclude: ['**/*.md'],
  preview: {
    port: PREVIEW_SERVER_PORT,
  },
});
