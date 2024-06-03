/// <reference types="vitest" />
/// <reference types="vite/client" />

import generouted from "@generouted/react-router/plugin";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";

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
