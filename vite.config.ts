/// <reference types="vitest" />
import { sentryVitePlugin } from '@sentry/vite-plugin';
import tsconfigPaths from 'vite-tsconfig-paths';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

// https://vite.dev/config/
export default defineConfig({
  server: {
    host: true,
  },
  preview: {
    port: 3000,
    strictPort: true,
    allowedHosts: ['localhost', 'dashi.sohosai.com'],
  },
  plugins: [
    react(),
    sentryVitePlugin({
      org: process.env.SENTRY_ORG,
      project: process.env.SENTRY_PROJECT,
      authToken: process.env.SENTRY_AUTH_TOKEN,
    }),
    tsconfigPaths(),
  ],
  build: {
    sourcemap: true,
  },
  test: {
    environment: 'happy-dom',
    coverage: {
      reporter: ['text', 'json', 'html'],
    },
  },
});
