import {
  validatePercentage,
  validateDecimal,
  validateMoney,
  validatePeopleQuantity,
  validateTipPercentage,
  sanitizePeopleQuantity,
} from "@/utils/validations";

describe("validatePercentage", () => {
  it("should return false for negative values", () => {
    expect(validatePercentage(-1)).toEqual({
      isValid: false,
      error: "Percentage should not be negative",
    });
  });

  it("should return false for values greater than 100", () => {
    expect(validatePercentage(101)).toEqual({
      isValid: false,
      error: "Percentage should not be upper than 100",
    });
  });

  it("should return true for valid percentages", () => {
    expect(validatePercentage(50)).toEqual({ isValid: true });
  });

  it("should return true for 100%", () => {
    expect(validatePercentage(100)).toEqual({ isValid: true });
  });
});

describe("validateDecimal", () => {
  it("should return false for negative values", () => {
    expect(validateDecimal(-1)).toEqual({
      isValid: false,
      error: "Decimal should not be negative",
    });
  });

  it("should return false for values greater than 1", () => {
    expect(validateDecimal(2)).toEqual({
      isValid: false,
      error: "Decimal should not be upper than 1",
    });
  });

  it("should return true for valid decimals", () => {
    expect(validateDecimal(0.5)).toEqual({ isValid: true });
  });
});

describe("validateMoney", () => {
  it("should return false for non-numeric values", () => {
    // @ts-expect-error - It's pass string to test invalid argument
    expect(validateMoney("abc")).toEqual({
      isValid: false,
      error: "Value should be a valid number",
    });
  });

  it("should return true for valid money values", () => {
    expect(validateMoney(10)).toEqual({ isValid: true });
  });
});

describe("validatePeopleQuantity", () => {
  it("should return false for non-integer values", () => {
    expect(validatePeopleQuantity(1.5)).toEqual({
      isValid: false,
      error: "It should be a Integer number",
    });
  });

  it("should return false for values less than 1", () => {
    expect(validatePeopleQuantity(0)).toEqual({
      isValid: false,
      error: "Minimum one person",
    });
  });

  it("should return false for values greater than 50", () => {
    expect(validatePeopleQuantity(51)).toEqual({
      isValid: false,
      error: "Maximum fifty people",
    });
  });

  it("should return true for valid people quantities", () => {
    expect(validatePeopleQuantity(10)).toEqual({ isValid: true });
  });
});

describe("validateTipPercentage", () => {
  it("should return false for non-integer values", () => {
    expect(validateTipPercentage(1.5)).toEqual({
      isValid: false,
      error: "It should be a Integer number",
    });
  });

  it("should return false for values greater than 30", () => {
    expect(validateTipPercentage(31)).toEqual({
      isValid: false,
      error: "Maximum thirty percent",
    });
  });

  it("should return true for valid tip percentages", () => {
    expect(validateTipPercentage(10)).toEqual({ isValid: true });
  });
});

describe("sanitizePeopleQuantity", () => {
  it("should return 1 for non-numeric values", () => {
    // @ts-expect-error - It's on purpose to check if works
    expect(sanitizePeopleQuantity("abc")).toBe(1);
  });

  it("should return 1 for values less than 1", () => {
    expect(sanitizePeopleQuantity(0.5)).toBe(1);
  });

  it("should return 50 for values greater than 50", () => {
    expect(sanitizePeopleQuantity(51)).toBe(50);
  });

  it("should return the sanitized value for valid people quantities", () => {
    expect(sanitizePeopleQuantity(10)).toBe(10);
  });
});
