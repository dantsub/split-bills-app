import type { ADD_DISH, REMOVE_DISH } from "@/reducers/DishesActions";

export interface Dish {
  name: string;
  price: number;
  id: number;
}
export interface DishesState {
  dishes: Dish[];
  subtotal: number;
}
export type DishAction =
  | { type: typeof ADD_DISH; payload: Dish }
  | { type: typeof REMOVE_DISH; payload: number };
