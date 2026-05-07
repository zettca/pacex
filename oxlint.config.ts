import { defineConfig } from "oxlint";
// @ts-expect-error no types
import { strictConfig } from "@zettca/config/oxlint";

export default defineConfig({
  extends: [strictConfig],
  options: {
    typeAware: true,
    typeCheck: true,
  },
  rules: {
    "react/only-export-components": "off",

    "typescript/consistent-return": "off",
    "typescript/promise-function-async": "off",
    "typescript/no-unsafe-type-assertion": "off",
  },
});
