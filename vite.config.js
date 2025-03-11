import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: "0.0.0.0",
    port: 3000,
    headers: {
      "cache-control": "no-cache",
    },
    hmr: {
      host: "192.168.0.105",
      port: 3000,
    },
    proxy: {
      "/api": {
        target: "https://3.235.250.245:3003",
        changeOrigin: true,
        secure: false,
        rewrite: (path) => {
          return path.replace(/^\/api/, "");
        },
      },
    },
  },
});
