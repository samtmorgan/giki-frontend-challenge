import React from "react";
import { render, screen } from "@testing-library/react";
import App from "../App";

test("renders 'Your footprint' text", () => {
  render(<App />);
  const linkElement = screen.getByText(/Your footprint/i);
  expect(linkElement).toBeInTheDocument();
});
