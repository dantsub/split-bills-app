import type { DishAction, DishesState } from "@/types/dishes.types";
import { ADD_DISH, REMOVE_DISH } from "./DishesActions";
import { produce } from "immer";

export const getDishesInitialState = (): DishesState => ({
  dishes: [],
  subtotal: 0,
});

export const dishesReducer = (
  state: DishesState,
  action: DishAction,
): DishesState => {
  switch (action.type) {
    case ADD_DISH:
      return produce(state, (draft) => {
        draft.dishes.push({
          ...action.payload,
          id: state.dishes.length + 1,
        });
        draft.subtotal += action.payload.price;
      });

    case REMOVE_DISH:
      return produce(state, (draft) => {
        draft.dishes = draft.dishes.filter(
          (dish) => dish.id !== action.payload,
        );
        draft.subtotal -= state.dishes[action.payload].price;
      });
    default:
      return state;
  }
};
