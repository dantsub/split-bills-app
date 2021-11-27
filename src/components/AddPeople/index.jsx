import React from 'react';
import './styles.scss';

const AddPeople = ({ people, handleClick }) => {

  return (
    <div className="add-people">
      <p>Numero de personas a pagar: {people}</p>
      <div>
        <button onClick={() => handleClick(1)}>+</button>
        <button onClick={() => handleClick(-1)}>-</button>
      </div>
    </div>
  )
}

export default AddPeople;
