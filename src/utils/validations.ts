export interface ValidationResult {
  isValid: boolean;
  error?: string;
}

function isValidNumber(value: any): ValidationResult {
  if (typeof value !== "number") {
    return { isValid: false, error: "Value should be a valid number" };
  }

  if (!isFinite(value)) {
    return { isValid: false, error: "Value should be finite number" };
  }

  return { isValid: true };
}

export const validatePercentage = (value: number): ValidationResult => {
  const validation = isValidNumber(value);
  if (!validation.isValid) return validation;

  if (value < 0)
    return { isValid: false, error: "Percentage should not be negative" };
  if (value > 100)
    return { isValid: false, error: "Percentage should not be upper than 100" };
  return { isValid: true };
};

export const validateDecimal = (value: number): ValidationResult => {
  const validation = isValidNumber(value);
  if (!validation.isValid) return validation;

  if (value < 0)
    return { isValid: false, error: "Decimal should not be negative" };
  if (value > 1)
    return { isValid: false, error: "Decimal should not be upper than 1" };
  return { isValid: true };
};

export const validateMoney = (value: number): ValidationResult => {
  const validation = isValidNumber(value);
  if (!validation.isValid) return validation;
  return { isValid: true };
};

export const validatePeopleQuantity = (value: number): ValidationResult => {
  const validation = isValidNumber(value);
  if (!validation.isValid) return validation;

  if (!Number.isInteger(value)) {
    return { isValid: false, error: "It should be a Integer number" };
  }
  if (value < 1) {
    return { isValid: false, error: "Minimum one person" };
  }
  if (value > 50) {
    return { isValid: false, error: "Maximum fifty people" };
  }
  return { isValid: true };
};

export const validateTipPercentage = (percentage: number): ValidationResult => {
  const baseValidation = validatePercentage(percentage);
  if (!baseValidation.isValid) return baseValidation;

  if (!Number.isInteger(percentage)) {
    return { isValid: false, error: "It should be a Integer number" };
  }
  if (percentage > 30) {
    return { isValid: false, error: "Maximum thirty percent" };
  }
  return { isValid: true };
};

export const sanitizePeopleQuantity = (value: number): number => {
  const { isValid } = isValidNumber(value);
  if (!isValid) return 1;

  let intValue = Math.round(value);
  if (intValue < 1) return 1;
  if (intValue > 50) return 50;
  return intValue;
};
