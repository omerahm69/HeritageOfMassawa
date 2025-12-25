import react from "@vitejs/plugin-react";
import path from "path";
import { defineConfig } from "vite";

export default defineConfig({
  server: {
    host: "::",
    port: 8080,
  },
    optimizeDeps: {
    include: [
      '@radix-ui/react-dropdown-menu',
      'lucide-react',
      '@tanstack/react-query',
      'react-router-dom'
    ],
  },

  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
