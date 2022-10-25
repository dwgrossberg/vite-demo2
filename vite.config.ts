import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import vitePluginFaviconsInject from "vite-plugin-favicons-inject";
// import { ghPages } from "vite-plugin-gh-pages";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    vitePluginFaviconsInject("./src/assets/logo.png"),
  ],
});
