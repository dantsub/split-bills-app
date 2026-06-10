import { formatCurrency, percentageToDecimal } from "@/utils";

export default function PayPerPerson({
  percentages,
  total,
}: {
  percentages: number[];
  total: number;
}) {
  return (
    <ul>
      {percentages.map((percentage, index) => (
        <li key={index} className="receipt-person">
          <span>
            Person #{index + 1}
            <span className="text-muted text-xs">({percentage}%)</span>
          </span>
          <span>{formatCurrency(total * percentageToDecimal(percentage))}</span>
        </li>
      ))}
    </ul>
  );
}
