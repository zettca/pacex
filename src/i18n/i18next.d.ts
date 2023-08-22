import translation from "../../public/locales/en.json";

const resources = {
  translation,
} as const;

declare module "i18next" {
  interface CustomTypeOptions {
    resources: typeof resources;
    // returnNull: false;
  }
}
