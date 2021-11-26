import React, { useState } from 'react';
import './styles.scss';

const AddPeople = ({ addPeople }) => {
  const [people, setPeople] = useState('');

  const handlePeople = (e) => {
    setPeople(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    addPeople(people);
    setPeople('');
  }

  return (
    <div className="add-people">
      <label htmlFor="people" className="add-people__label"></label>
      <input type="text" id="people" className="add-people__input" placeholder="Numero de personas" value={people} onChange={handlePeople} />
      <button onClick={handleSubmit} className="btn">Añadir</button>
    </div>
  )
}

export default AddPeople
