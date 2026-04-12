import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  build: {
    // aumenta limite do aviso de chunk porque a foto base64 é grande
    chunkSizeWarningLimit: 2000,
  },
});
