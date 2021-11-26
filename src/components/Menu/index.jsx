import React from 'react';
import './styles.scss';

const Menu = ({ menuList }) => {
  return (
    <section className="menu">
      <h3 className="menu__title">Menu</h3>
      <ul className="menu__list">
        <li className="menu__item">
          <p className="item">Nombre</p>
          <p className="item">Precio</p>
          <p className="item">Cantidad</p>
          <p className="item">Acción</p>
        </li>
        {
          menuList.map((item, index) => {
            return (
              <li className="menu__item" key={index}>
                <p className="item">{item.name}</p>
                <p className="item item--right">{item.price}</p>
                <p className="item">{item.quantity}</p>
                <div className="item">
                  <button className="btn">+</button>
                  <button className="btn">-</button>
                </div>
              </li>
            )
          })
        }
      </ul>
    </section>
  )
}

export default Menu
