import i18next from "i18next";
import Backend from "i18next-http-backend";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";

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
