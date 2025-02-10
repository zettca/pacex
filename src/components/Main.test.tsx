import { render, screen } from "@testing-library/react";
import { Main } from "~/components/Main";

const setup = () =>
  render(
    <Main
      data={{ time: 1800, dist: 5000, speed: 10000, lock: "speed" }}
      onCommit={() => {}}
    />,
  );

it("renders the sliders", async () => {
  setup();

  const sliders = await screen.findAllByRole("slider");
  expect(sliders).toHaveLength(2);
});

it("renders the titles", async () => {
  setup();

  const headers = await screen.findAllByRole("heading", { level: 2 });
  expect(headers).toHaveLength(3);
});
