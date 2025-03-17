import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

// https://vite.dev/config/
export default defineConfig({
  server: {
    host: true,
    allowedHosts: ['localhost:5000'],
  },
  plugins: [react()],
  build: {
    sourcemap: true,
  },
});
