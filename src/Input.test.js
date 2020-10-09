/*globals test expect */
import { calculateOffset } from "./Input";

test("calculates offset for empty value", () => {
  const actual = calculateOffset("");
  expect(actual).toEqual(30);
});

test("calculates offset for a value", () => {
  const actual = calculateOffset("1234");
  expect(actual).toEqual(30 + 9 * 4);
});
