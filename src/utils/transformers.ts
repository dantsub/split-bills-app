import {
  validateDecimal,
  validatePercentage,
  validateMoney,
  validateTipPercentage,
} from "./validations";

export const percentageToDecimal = (percent: number): number => {
  const { isValid, error } = validatePercentage(percent);
  if (!isValid) {
    console.warn(`percentageToDecimal: "${error}"`);
    return 0;
  }
  return percent / 100;
};

export const percentageToDecimalTip = (percent: number): number => {
  const { isValid, error } = validateTipPercentage(percent);
  if (!isValid) {
    console.warn(`percentageToDecimalTip: "${error}"`);
    return 0.0;
  }
  return percent / 100;
};

export const decimalToPercentage = (decimal: number): number => {
  const { isValid, error } = validateDecimal(decimal);
  if (!isValid) {
    console.warn(`decimalToPercentage: "${error}"`);
    return 0;
  }
  return Math.round(decimal * 100);
};

export const formatCurrency = (
  amount: number,
  currency: string = "COP",
  locale: string = "es-CO",
): string => {
  const { isValid } = validateMoney(amount);
  const safeAmount = isValid ? amount : 0;

  return new Intl.NumberFormat(locale, {
    style: "currency",
    currency,
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(safeAmount);
};
