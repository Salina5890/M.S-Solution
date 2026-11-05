import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Set VITE_BASE only if the site is served from a sub-path, e.g. VITE_BASE=/M.S-Tidalyn/ for a GitHub Pages project site.
export default defineConfig({
  base: process.env.VITE_BASE || '/',
  plugins: [react()],
  server: { port: 3000, open: false },
});
