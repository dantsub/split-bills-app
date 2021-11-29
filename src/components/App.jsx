import './App.scss';
import Menu from './Menu';
import menuList from '../mocks/plates';
import Accounts from './Accounts';
import Pay from './Pay';
import Header from './Header';
import { useState } from 'react';
import Order from './Order';

function App() {
  const newMenu = menuList.map(item => {return {...item, quantity: 0}});
  const [order, setOrder] = useState(newMenu);
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
    <>
    <Header />
    <section className="container">
      <section className="menu-section">
        <h2 className="sr-only">Sección de menu y pedidos</h2>
        <Menu menuList={menuList} handleClickMinus={handleClickMinus} handleClickPlus={handleClickPlus} />
      </section>
      <section className="order-section">
        <h2 className="sr-only">Sección de pago</h2>
        <Order order={order} />
        <Accounts order={order} setAmount={setAmount} />
        <Pay amount={amount} />
      </section>
    </section>
    </>
  );
}

export default App;
