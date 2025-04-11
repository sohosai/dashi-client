/// <reference types="vitest" />
import { sentryVitePlugin } from '@sentry/vite-plugin';
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
  ],
  build: {
    sourcemap: true,
  },
  test: {
    environment: 'happy-dom',
    // @vitest/coverage-v8
    coverage: {
      reporter: ['text', 'json', 'html'],
      exclude: [
        '.direnv/**/*',
        '.github/**/*',
        '.storybook/**/*',
        'assets/**/*',
        'coverage/**/*',
        'dist/**/*',
        'html/**/*',
        'nginx/**/*',
        'node_modules/**/*',
        'public/**/*',
        'storybook-static/**/*',
        '.dockerignore',
        '.env',
        '.env.example',
        '.env.sentry-build-plugin.',
        '.env.sentry-build-plugin.example',
        '.envrc',
        '.gitignore',
        '.prettierrc',
        'COPYING',
        'Dockerfile',
        'eslint.config.js',
        'flake.lock',
        'flake.nix',
        'index.html',
        'package-lock.json',
        'package.json',
        'prod.compose.yaml',
        'README.md',
        'renovate.json',
        'tsconfig.app.json',
        'tsconfig.json',
        'tsconfig.node.json',
        'vite.config.ts',
      ],
    },
    // @vitest/ui
    reporters: ['default', 'html'],
  },
});
