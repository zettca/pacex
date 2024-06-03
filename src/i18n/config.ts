import { initReactI18next } from "react-i18next";
import i18next from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import Backend from "i18next-http-backend";

i18next
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  // for all options read: https://www.i18next.com/overview/configuration-options
  .init({
    fallbackLng: "en",
    supportedLngs: ["en", "pt"],

    lowerCaseLng: true,

    backend: {
      loadPath: "locales/{{lng}}.json",
    },

    interpolation: {
      escapeValue: false, // React escapes by default
    },
    react: {
      useSuspense: true,
    },
  });
