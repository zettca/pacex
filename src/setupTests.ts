// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import "@testing-library/jest-dom";
import { vi } from "vitest";

vi.mock("react-i18next", async () => {
  const { initReactI18next } = await vi.importActual("react-i18next");

  return {
    initReactI18next,
    useTranslation: () => ({
      t: (str: string) => str,
      i18n: { changeLanguage: () => new Promise(() => {}) },
    }),
  };
});
