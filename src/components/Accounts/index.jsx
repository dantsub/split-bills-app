import React from 'react';
import './styles.scss';

const Accounts = () => {
  return (
    <section className="accounts">
      <h3 className="accounts__title">Cuentas</h3>
      <ul className="accounts__list">
        <li className="accounts__item">
          <p className="accounte__element">Subtotal:</p> <p className="accounts__element">$156.000</p>
        </li>
        <li className="accounts__item">
          <p className="accounte__element">Propina:</p> <p className="accounts__element">$15.600</p> <p className="account__element">10%</p> <button className="btn">Cambiar</button>
        </li>
        <li className="accounts__item">
          <p className="accounte__element">Total:</p> <p className="accounts__element">$171.600</p>
        </li>
        <li className="accounts__item">
          <p className="accounte__element">N° personas:</p> <p className="accounts__element">5</p>
        </li>
      </ul>
    </section>
  )
}

export default Accounts;
