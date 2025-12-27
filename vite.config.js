import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/4theone-international-site/', // <- GitHub Pages subpath
  plugins: [react()],
  build: {
    outDir: 'docs' // <- so GitHub Pages can find it
  }
});
