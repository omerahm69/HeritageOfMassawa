import react from "@vitejs/plugin-react-swc";
import path from "path";
import { defineConfig } from "vite";

// Vite config
export default defineConfig({
  server: {
    host: true, // Supports both IPv4 & IPv6
    port: 8080,
  },
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(new URL("./src", import.meta.url).pathname),
    },
  },
});


