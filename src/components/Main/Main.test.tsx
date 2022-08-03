import { render, screen } from "@testing-library/react";
import Main from ".";

describe("App renders", () => {
  test("main", () => {
    render(<Main />);
    const main = screen.getByRole("main");
    expect(main).toBeInTheDocument();
  });

  test("sliders", async () => {
    render(<Main />);

    const sliders = await screen.findAllByRole("slider");
    expect(sliders.length).toBe(2);
  });

  test("titles", async () => {
    render(<Main />);

    const headers = await screen.findAllByRole("heading", { level: 1 });
    expect(headers.length).toBe(3);
  });
});
