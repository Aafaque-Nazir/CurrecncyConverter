// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    proxy: {
      '/api': {
        target: 'https://v6.exchangerate-api.com', // Target API base URL
        changeOrigin: true,  // Ensures the target URL is used as the origin
        rewrite: (path) => path.replace(/^\/api/, ''), // Rewrites '/api' prefix
        secure: true, // Use HTTPS, ensure the API supports HTTPS
      },
    },
  },
});
