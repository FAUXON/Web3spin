import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "./", // Ajoute cette ligne pour les chemins relatifs
  resolve: {
    alias: {
      "@": "/src",
    },
  },
});
