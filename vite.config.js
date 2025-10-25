import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: './', // <- MUST MATCH YOUR REPO NAME
  plugins: [react()],
  build: {
    outDir: 'docs' // <- so GitHub Pages can find it
  }
});
