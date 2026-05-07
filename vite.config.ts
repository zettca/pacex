/// <reference types="vitest/config" />
/// <reference types="vite/client" />

import react from "@vitejs/plugin-react";
import unoCSS from "unocss/vite";
import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [unoCSS(), react()],
  base: "./",
  server: {
    // static port for Playwright
    port: 3000,
  },
  test: {
    globals: true,
    environment: "happy-dom",
    setupFiles: "./src/setupTests.ts",
    include: ["./src/**/*.{test,spec}.{js,ts,tsx}"],
  },
});
