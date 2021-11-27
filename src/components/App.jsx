import './App.scss';
import Menu from './Menu';
import menuList from '../mocks/plates';
import Accounts from './Accounts';
import Pay from './Pay';
import { useState } from 'react';

function App() {
  const [order, setOrder] = useState(menuList);
  const [amount, setAmount] = useState(0);

  const handleClickPlus = (item) => {
    const newOrder = order.map(i => {
      if (i.name === item.name) {
        i.quantity += 1;
      }
      return i;
    });
    setOrder(newOrder);
  }

  const handleClickMinus = (item) => {
    if (!order.find(i => i.name === item.name)) {
      setOrder(item);
    }
    const newOrder = order.map(i => {
      if (i.name === item.name && i.quantity > 0) {
        i.quantity -= 1;
      }
      return i;
    });
    setOrder(newOrder);
  }

  return (
    <section className="container">
      <section className="section">
        <h2 className="sr-only">Sección de menu y pedidos</h2>
        <Menu order={order} handleClickMinus={handleClickMinus} handleClickPlus={handleClickPlus} />
      </section>
      <section className="section">
        <h2 className="sr-only">Sección de pago</h2>
        <Accounts order={order} setAmount={setAmount} />
        <Pay amount={amount} />
      </section>
    </section>
  );
}

export default App;
