import React, { useState } from 'react';
import './styles.scss';

const Accounts = ({ order, setAmount }) => {
  const [tip, setTip] = useState(0.10);

  const subtotal = order.filter((ord) => ord.quantity).reduce((acc, curr) => acc + curr.price * curr.quantity, 0);
  const tipTotal = subtotal * tip;
  const total = subtotal + tipTotal;
  setAmount(total);

  return (
    <section className="accounts">
      <h3 className="accounts__title">Cuentas</h3>
      <ul className="accounts__list">
        <li className="accounts__item">
          <p className="accounte__element">Subtotal:</p> <p className="accounts__element">${subtotal}</p>
        </li>
        <li className="accounts__item">
          <p className="accounte__element">Propina:</p> <p className="accounts__element">${tipTotal}</p> <p className="account__element">{tip * 100}%</p> <button className="btn">Cambiar</button>
        </li>
        <li className="accounts__item">
          <p className="accounte__element">Total:</p> <p className="accounts__element">${total}</p>
        </li>
      </ul>
    </section>
  )
}

export default Accounts;
