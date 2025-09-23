import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/4theone-international-site/', // EXACTLY this if your repo is named that
  plugins: [react()],
  build: {
    outDir: 'docs' // GitHub Pages will use this folder
  }
})