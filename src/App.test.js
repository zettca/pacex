import { render, screen } from "@testing-library/react";
import Main from "./components/Main";

jest.mock("react-i18next", () => ({
  useTranslation: () => ({
    t: (str) => str,
    i18n: {
      changeLanguage: () => new Promise(() => {}),
    },
  }),
}));

describe("App renders", () => {
  test("main", () => {
    render(<Main />);
    const main = screen.getByRole("main");
    expect(main).toBeInTheDocument();
  });

  test("sliders", async () => {
    render(<Main />);

    const sliders = await screen.findAllByRole("slider");
    expect(sliders.length).toBe(3);
  });

  test("titles", async () => {
    render(<Main />);

    const headers = await screen.findAllByRole("heading", { level: 1 });
    expect(headers.length).toBe(3);
  });
});
