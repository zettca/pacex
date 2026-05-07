import { defineConfig } from "oxfmt";
// @ts-expect-error no types
import config from "@zettca/config/oxfmt";

export default defineConfig({
  ...config,
});
