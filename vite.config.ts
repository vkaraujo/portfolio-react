import { defineConfig } from 'vitest/config'; // Import from 'vitest/config'
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './src/__tests__/setup.ts', // Optional: Global setup file
    css: true, // Enable CSS if testing styles
  },
});

