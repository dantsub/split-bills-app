import { useSettings } from "@/context/SettingsContext";
import { useDishes } from "@/context/DishesContext";
import useReceipt from "@/hooks/useReceipt";
import PayPerPerson from "./PayPerPerson";
import ProductList from "./ProductList";
import Empty from "./EmptyReceipt";
import Totals from "./Totals";

export default function Receipt() {
  const { tip, percentagePerPeople } = useSettings();
  const { dishes, subtotal } = useDishes();
  const { isEmpty, total, date } = useReceipt({ subtotal, tip });

  return (
    <div className="md:col-span-3 md:sticky md:top-6">
      <div
        id="receiptContainer"
        className="receipt w-full max-w-105 mx-auto md:mx-0"
        style={{ minHeight: "460px" }}
      >
        <div className="receipt-content">
          <div id="receiptInner">
            {/*<!-- Empty state -->*/}
            {isEmpty && <Empty />}
            {/*<!-- Filled state (hidden by default) -->*/}
            {!isEmpty && (
              <div id="receiptFilled" className="">
                <div className="receipt-header">
                  <h2>Splitty</h2>
                  <div className="sub">
                    Cuenta • <span id="receiptDate">{date}</span>
                  </div>
                </div>
                <hr className="receipt-divider" />
                <ProductList products={dishes} />
                <hr className="receipt-divider-solid" />
                <Totals total={total} subtotal={subtotal} tip={tip} />
                <hr className="receipt-divider" />
                <PayPerPerson percentages={percentagePerPeople} total={total} />
                <hr className="receipt-divider" />
                <div className="receipt-footer">Gracias por tu visita</div>
                <div className="receipt-barcode">
                  |||| ||||| |||| ||||| ||| ||||
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
