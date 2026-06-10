import { decimalToPercentage, formatCurrency } from "@/utils";

type TotalsProps = {
  total: number;
  tip: number;
  subtotal: number;
};

export default function Totals({ total, tip, subtotal }: TotalsProps) {
  return (
    <ul>
      <li className="receipt-total-row">
        <span className="label">Subtotal</span>
        <span className="value">{formatCurrency(subtotal)}</span>
      </li>
      <li className="receipt-total-row">
        <span className="label">Propina ({decimalToPercentage(tip)}%)</span>
        <span className="value">{formatCurrency(tip * subtotal)}</span>
      </li>
      <li className="receipt-grand-total">
        <span className="label">TOTAL</span>
        <span className="value">{formatCurrency(total)}</span>
      </li>
    </ul>
  );
}
