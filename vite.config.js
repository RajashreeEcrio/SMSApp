import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: "0.0.0.0",
    port: 3000,
    open: true,
    headers: {
      "cache-control": "no-cache",
    },
    hmr: {
      host: "192.168.1.34",
      port: 3000,
    },
  },
});
