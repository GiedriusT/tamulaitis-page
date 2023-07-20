import { defineConfig, PluginOption } from 'vite';
import react from '@vitejs/plugin-react-swc';
import { visualizer } from 'rollup-plugin-visualizer';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    visualizer({
      filename: 'bundle-stats.html',
    }) as PluginOption,
  ],
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          crypto: ['crypto-js'],
          markdown: ['react-markdown', 'rehype-raw', 'unist-util-visit'],
        },
      },
    },
  },
  assetsInclude: ['**/*.md'],
});
