'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
/// <reference types="vitest" />
var vite_plugin_1 = require('@sentry/vite-plugin');
var vite_tsconfig_paths_1 = require('vite-tsconfig-paths');
var vite_1 = require('vite');
var plugin_react_swc_1 = require('@vitejs/plugin-react-swc');
// https://vite.dev/config/
exports.default = (0, vite_1.defineConfig)({
  server: {
    host: true,
  },
  preview: {
    port: 3000,
    strictPort: true,
    allowedHosts: ['localhost', 'dashi.sohosai.com'],
  },
  plugins: [
    (0, plugin_react_swc_1.default)(),
    (0, vite_plugin_1.sentryVitePlugin)({
      org: process.env.SENTRY_ORG,
      project: process.env.SENTRY_PROJECT,
      authToken: process.env.SENTRY_AUTH_TOKEN,
    }),
    (0, vite_tsconfig_paths_1.default)(),
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
