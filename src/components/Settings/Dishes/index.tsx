import { useState } from "react";
import { formatCurrency } from "@/utils";
import { useDishes } from "@/context/DishesContext";

import type { Dish } from "@/types/dishes.types";

export default function Dishes() {
  const [dish, setDish] = useState<Dish>({ id: 0, name: "", price: 0 });
  const { dishes, addDish, subtotal } = useDishes();
  return (
    <div className="glass-strong rounded-2xl p-4 md:p-5 slide-right">
      <div className="section-title">➕ Agregar plato</div>
      <div className="flex flex-col sm:flex-row gap-2">
        <input
          id="dishName"
          type="text"
          placeholder="Nombre del plato"
          className="flex-1 min-w-0"
          value={dish.name}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setDish({ ...dish, name: e.target.value })
          }
        />
        <div className="flex gap-2">
          <input
            id="dishPrice"
            type="number"
            min="0"
            step="0.01"
            placeholder="$0.00"
            className="w-24 sm:w-28"
            value={dish.price}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setDish({ ...dish, price: Number(e.target.value) })
            }
          />
          <button
            id="addDishBtn"
            className="btn-neon px-4 py-2.5 rounded-xl text-sm whitespace-nowrap"
            onClick={() => addDish(dish)}
          >
            Añadir
          </button>
        </div>
      </div>

      {/*<!-- Dish list -->*/}
      <div id="orderSummary" className="mt-3">
        {!dishes.length && (
          <div
            id="emptyMsg"
            className="text-xs text-center py-4"
            style={{ color: "var(--text-muted)" }}
          >
            No hay platos aún
          </div>
        )}
        {dishes.length > 0 ? (
          <div id="dishList" className="max-h-48 overflow-y-auto">
            {dishes.map(({ id, name, price }) => {
              return (
                <p key={id} className="flex justify-between">
                  <span>{name}</span> <span>{formatCurrency(price)}</span>
                </p>
              );
            })}
          </div>
        ) : null}
      </div>

      <div
        id="subtotalBar"
        className="hidden mt-2 pt-3 lg:flex items-center justify-between"
        style={{ borderTop: "1px solid var(--glass-border)" }}
      >
        <span className="text-xs" style={{ color: "var(--text-muted)" }}>
          Subtotal
        </span>
        <span
          id="subtotalDisplay"
          className="text-sm font-bold font-mono tabular-nums"
          style={{ color: "var(--neon-cyan)" }}
        >
          {formatCurrency(subtotal)}
        </span>
      </div>
    </div>
  );
}
