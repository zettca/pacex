/// <reference types="vitest" />
/// <reference types="vite/client" />

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";
import generouted from "@generouted/react-router/plugin";
// import { visualizer } from "rollup-plugin-visualizer";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), generouted(), tsconfigPaths()],
  base: "./",
  server: {
    port: 3000,
  },
  test: {
    globals: true,
    environment: "happy-dom",
    setupFiles: "./src/setupTests.ts",
    include: ["./src/**/*.{test,spec}.{js,ts,tsx}"],
  },
});
