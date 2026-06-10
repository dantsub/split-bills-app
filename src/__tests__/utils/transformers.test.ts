import {
  decimalToPercentage,
  formatCurrency,
  percentageToDecimal,
  percentageToDecimalTip,
} from "@/utils";
import { test } from "vitest";

test("percentageToDecimal", () => {
  expect(percentageToDecimal(100)).toBeCloseTo(1);
});
test("percentageToDecimalTip", () => {
  expect(percentageToDecimalTip(100)).toBe(0);
  expect(percentageToDecimalTip(20)).toBe(0.2);
});
test("decimalToPercentage", () => {
  expect(decimalToPercentage(0.5)).toBe(50);
});
test("formatCurrency", () => {
  expect(formatCurrency(10)).toBe("$ 10,00");
});
