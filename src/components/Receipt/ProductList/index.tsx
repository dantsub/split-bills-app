import type { Dish } from "@/types/dishes.types";
import { formatCurrency } from "@/utils";

export default function ProductList({ products }: { products: Dish[] }) {
  return (
    <ul>
      {products.map(({ name, price, id }) => (
        <li key={`${name}-${price}-${id}`} className="receipt-item">
          <span className="name">{name}</span>
          <span className="price">{formatCurrency(price)}</span>
        </li>
      ))}
    </ul>
  );
}
