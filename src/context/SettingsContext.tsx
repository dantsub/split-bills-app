import {
  percentageToDecimalTip,
  sanitizePeopleQuantity,
  validatePeopleQuantity,
  validateTipPercentage,
} from "@/utils";
import {
  createContext,
  useContext,
  useState,
  type PropsWithChildren,
} from "react";

interface SettingsContextState {
  tip: number;
  peopleNo: number;
  percentagePerPeople: number[];
  setTip: (tip: number) => void;
  setPeopleNo: (peopleNo: number) => void;
  setPercentagePerPeople: (percentagePerPeople: number[]) => void;
}

export const SettingsContext = createContext({} as SettingsContextState);

export const SettingsContextProvider = ({ children }: PropsWithChildren) => {
  const [tip, setTip] = useState<number>(0.1);
  const [peopleNo, setPeopleNo] = useState<number>(2);
  const [percentagePerPeople, setPercentagePerPeople] = useState<number[]>([
    50, 50,
  ]);

  const handleSetTip = (tip: number) => {
    setTip(percentageToDecimalTip(tip));
  };

  const handlePeopleNo = (people: number) => {
    const { isValid } = validatePeopleQuantity(people);
    !isValid ? setPeopleNo(2) : setPeopleNo(sanitizePeopleQuantity(people));
  };

  const initialState = {
    tip,
    peopleNo,
    percentagePerPeople,
    setTip: handleSetTip,
    setPeopleNo: handlePeopleNo,
    setPercentagePerPeople,
  };
  return <SettingsContext value={initialState}>{children}</SettingsContext>;
};

export const useSettings = () => useContext(SettingsContext);
