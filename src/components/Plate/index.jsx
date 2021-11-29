import React from 'react';
import './styles.scss';

const Plate = ({ plate, handleClickPlus, handleClickMinus }) => {
  return (
    <li className="plate">
      <img className="plate__img" width="91" height="91" src="https://via.placeholder.com/91" alt="placeholder" />
      <div className="plate__data">
        <h2 className="plate__name">{plate.name}</h2>
        <p className="plate__price">${plate.price}</p>
      </div>
      <div className="plate__actions">
        <button className="btn btn--orange btn--up " onClick={() => handleClickPlus(plate)}>+</button>
        <button className="btn btn--orange btn--down " onClick={() => handleClickMinus(plate)}>-</button>
      </div>
    </li>
  )
}

export default Plate;
