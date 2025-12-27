import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "/", // <- Root path for custom domain
  plugins: [react()],
  build: {
    outDir: "docs", // <- so GitHub Pages can find it
  },
});
