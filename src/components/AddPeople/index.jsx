import React from 'react';
import './styles.scss';

const AddPeople = ({ people, handleClick }) => {

  return (
    <div className="add-people">
      <p className="add-people__title">N° Clients</p>
      <div className="add-people__actions">
        <button className="btn btn--green btn--left" onClick={() => handleClick(-1)}>-</button>
        <p className="add-people__count">{people}</p>
        <button className="btn btn--green btn--right" onClick={() => handleClick(1)}>+</button>
      </div>
    </div>
  )
}

export default AddPeople;
