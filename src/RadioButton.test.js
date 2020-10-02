/* globals test expect */
import React from "react";
import { render } from "@testing-library/react";
import RadioButton from "./RadioButton";

const defaultProps = {
  id: "id",
  value: "first",
  options: ["first", "second"],
  onChange: () => {},
};

test("matches design when an item is selected", () => {
  const { asFragment } = render(<RadioButton {...defaultProps} />);
  expect(asFragment()).toMatchSnapshot();
});

test("matches design when an item is not selected", () => {
  const props = Object.assign([], defaultProps, {
    value: "",
  });

  const { asFragment } = render(<RadioButton {...props} />);
  expect(asFragment()).toMatchSnapshot();
});
