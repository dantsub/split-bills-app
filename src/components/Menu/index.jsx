import React from 'react';
import './styles.scss';
import Plate from '../Plate';

const Menu = ({ menuList, order, handleClickPlus, handleClickMinus }) => {

  return (
    <section className="menu">
      <header className="menu__header">
        <h3 className="menu__title">Menu</h3>
      </header>
      <ul className="menu__grid">
        {
          menuList.map((item) => {
            return (
              <Plate key={item.id} plate={item} handleClickPlus={handleClickPlus} handleClickMinus={handleClickMinus} />
            )
          })
        }
      </ul>
    </section>
  )
}

export default Menu
