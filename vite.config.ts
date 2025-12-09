// vite.config.ts

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// vitejs.dev
export default defineConfig({
  plugins: [react()],
  // Add this block to fix the unpkg.com error:
  optimizeDeps: {
    exclude: ['unpkg.com', '@ionicons/core', '@ionicons/utils']
  }
});
