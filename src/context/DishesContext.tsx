import { ADD_DISH, REMOVE_DISH } from "@/reducers/DishesActions";
import { dishesReducer, getDishesInitialState } from "@/reducers/DishesReducer";
import type { Dish, DishesState } from "@/types/dishes.types";
import {
  createContext,
  useContext,
  useReducer,
  type PropsWithChildren,
} from "react";

export type DishesContextState = {
  addDish: (dish: Dish) => void;
  removeDish: (id: number) => void;
} & DishesState;

export const DishesContext = createContext({} as DishesContextState);

export const DishesContextProvider = ({ children }: PropsWithChildren) => {
  const [state, dispatch] = useReducer(dishesReducer, getDishesInitialState());

  const addDish = (dish: Dish): void => {
    dispatch({ type: ADD_DISH, payload: dish });
  };

  const removeDish = (id: number): void => {
    dispatch({ type: REMOVE_DISH, payload: id });
  };

  return (
    <DishesContext value={{ ...state, addDish, removeDish }}>
      {children}
    </DishesContext>
  );
};

export const useDishes = () => useContext(DishesContext);
