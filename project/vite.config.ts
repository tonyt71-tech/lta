import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/', // important for GitHub Pages & custom domains
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
