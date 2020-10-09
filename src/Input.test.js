/*globals test expect */
import React from "react";
import { render } from "@testing-library/react";
import Input, { calculateOffset } from "./Input";

const defaultProps = {
  onChange: () => {},
  value: 1000,
  label: "Sale price",
  type: "currency",
  focus: false,
};

test("renders the label", () => {
  const { getByText } = render(<Input {...defaultProps} />);
  const labelElm = getByText(new RegExp(defaultProps.label));
  expect(labelElm).toBeInTheDocument();
});

test("displays the tooltip on focus", () => {
  const tipContent = "I'm here to help.";
  const { getByLabelText, queryByText } = render(
    <Input {...defaultProps} tooltip={tipContent} />
  );
  getByLabelText(defaultProps.label).focus();
  const tooltipElm = queryByText(new RegExp(tipContent));
  expect(tooltipElm).toBeInTheDocument();
});

test("hides the tooltip on blur", () => {
  const tipContent = "I'm here to help.";
  const { queryByText } = render(
    <Input {...defaultProps} tooltip={tipContent} />
  );
  const tooltipElm = queryByText(new RegExp(tipContent));
  expect(tooltipElm).not.toBeInTheDocument();
});

test("calculates offset for empty value", () => {
  const actual = calculateOffset("");
  expect(actual).toEqual(30);
});

test("calculates offset for a value", () => {
  const actual = calculateOffset("1234");
  expect(actual).toEqual(30 + 9 * 4);
});
