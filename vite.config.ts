/// <reference types="vitest" />
/// <reference types="vite/client" />

import react from "@vitejs/plugin-react";
import unoCSS from "unocss/vite";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [unoCSS(), react(), tsconfigPaths()],
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
