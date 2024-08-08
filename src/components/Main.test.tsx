import { render, screen } from "@testing-library/react";
import { Main } from "~/components/Main";

const setup = () =>
  render(
    <Main
      data={{ time: 1800, dist: 5000, speed: 10000, lock: "speed" }}
      onCommit={() => {}}
    />,
  );

describe("App renders", () => {
  test("sliders", async () => {
    setup();

    const sliders = await screen.findAllByRole("slider");
    expect(sliders.length).toBe(2);
  });

  test("titles", async () => {
    setup();

    const headers = await screen.findAllByRole("heading", { level: 2 });
    expect(headers.length).toBe(3);
  });
});
