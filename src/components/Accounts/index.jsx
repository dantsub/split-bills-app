import React, { useEffect } from 'react';
import './styles.scss';

const Accounts = ({ order, setAmount }) => {
  const tip = 0.10;
  const subtotal = order.filter((ord) => ord.quantity).reduce((acc, curr) => acc + curr.price * curr.quantity, 0);
  const tipTotal = subtotal * tip;
  const total = subtotal + tipTotal;
  useEffect(() => {
    setAmount(total);
  },[total, setAmount]);

  return (
    <section className="accounts">
      <h3 className="sr-only">Accounts section</h3>
      <ul className="accounts__list">
        <li className="accounts__item">
          <p>Subtotal:</p> <p>${subtotal}</p>
        </li>
        <li className="accounts__item">
          <p>Tip ({tip * 100}%)</p> <p>${tipTotal}</p>
        </li>
        <li className="accounts__item accounts__item--green">
          <p>Total:</p> <p>${total}</p>
        </li>
      </ul>
    </section>
  )
}

export default Accounts;
