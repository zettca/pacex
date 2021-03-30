import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

describe("App renders", () => {
  test("main", () => {
    render(<App />);
    const main = screen.getByRole("main");
    expect(main).toBeInTheDocument();
  });

  test("sliders", () => {
    render(<App />);
    const sliders = screen.getAllByRole("slider");
    expect(sliders.length).toBe(3);
  });

  test("Time label", () => {
    render(<App />);
    const text = screen.getByText(/Time/i);
    expect(text).toBeInTheDocument();
  });

  test("Distance label", () => {
    render(<App />);
    const text = screen.getByText(/Distance/i);
    expect(text).toBeInTheDocument();
  });

  test("Pace label", () => {
    render(<App />);
    const text = screen.getByText(/Pace/i);
    expect(text).toBeInTheDocument();
  });
});
