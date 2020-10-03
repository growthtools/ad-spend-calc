/*globals test expect */
import React from "react";
import { render } from "@testing-library/react";
import App from "./App";

test("renders the heading", () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/ad spend/i);
  expect(linkElement).toBeInTheDocument();
});
