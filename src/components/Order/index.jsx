import React from 'react';
import './styles.scss';

const Order = ({ order }) => {
  return (
    <section className="order">
      <h2 className="order__title">Order</h2>
      <ul>
      {
        order.map(item => {
          if (item.quantity === 0) return undefined;
          return (
          <li key={item.id} className="order__item">
            <p>{item.name}</p>
            <p>Quantity: {item.quantity}</p>
            <p>${item.price}</p>
          </li>
          )
        })
      }
      </ul>
    </section>
  )
}

export default Order
