import { useEffect, useState } from "react";

type ReceiptProps = {
  subtotal: number;
  tip: number;
};

type ReceiptReturn = {
  isEmpty: boolean;
  total: number;
  date: string;
};

export default function useReceipt({
  subtotal,
  tip,
}: ReceiptProps): ReceiptReturn {
  const [isEmpty, setIsEmpty] = useState<boolean>(true);
  const [total, setTotal] = useState<number>(0);
  const [date, setDate] = useState<string>("");

  useEffect(() => {
    if (subtotal > 0) setIsEmpty(false);
  }, [subtotal]);

  useEffect(() => {
    setTotal(subtotal + tip * subtotal);
  }, [subtotal, tip]);

  useEffect(() => {
    setDate(
      new Date().toLocaleDateString("es-CO", {
        day: "numeric",
        month: "short",
        year: "numeric",
        hour: "2-digit",
        minute: "2-digit",
      }),
    );
  }, [subtotal]);

  return { isEmpty, total, date };
}
