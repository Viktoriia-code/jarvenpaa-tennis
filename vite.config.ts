import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@pages': '/src/pages', // Make sure it's relative to the root project folder
    },
  },
  plugins: [react()],
  base: './',
});
