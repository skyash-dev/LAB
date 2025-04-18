import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import path from "path";
import { TanStackRouterVite } from "@tanstack/router-plugin/vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [TanStackRouterVite(), react(), tailwindcss()],
  server: {
    proxy: {
      "/api": "http://localhost:3000/",
    },
  },
  resolve: {
    alias: {
      "@": path.resolve(import.meta.dir, "./src"),
      "@backend": path.resolve(import.meta.dir, "../backend"),
    },
  },
});
