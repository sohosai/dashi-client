/// <reference types="vitest" />
import { sentryVitePlugin } from '@sentry/vite-plugin';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

// https://vite.dev/config/
export default defineConfig({
  server: {
    host: true,
    port: 5173,
    strictPort: true,
  },
  preview: {
    port: 3000,
    strictPort: true,
    allowedHosts: ['localhost', process.env.DASHI_SERVER_ORIGIN, process.env.CLOUDFLARE_R2_BUCKET_ORIGIN].filter(
      (host): host is string => typeof host === 'string'
    ),
  },
  plugins: [
    react(),
    sentryVitePlugin({
      org: process.env.SENTRY_ORG,
      project: process.env.SENTRY_PROJECT,
      authToken: process.env.SENTRY_AUTH_TOKEN,
    }),
  ],
  build: {
    sourcemap: true,
  },
  test: {
    environment: 'happy-dom',
    // @vitest/coverage-v8
    coverage: {
      reporter: ['html'],
      include: ['src/**/*.{ts,tsx}'],
    },
    // @vitest/ui
    reporters: ['default', 'html'],
  },
});
