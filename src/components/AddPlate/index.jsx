import React, { useState } from 'react';
import './styles.scss';

const AddPlate = ({ addPlate }) => {
  const [plateName, setPlateName] = useState('');
  const [platePrice, setPlatePrice] = useState('');
  const [id, setId] = useState(0);

  const handlePlateName = (e) => {
    setPlateName(e.target.value);
  }

  const handlePlatePrice = (e) => {
    setPlatePrice(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    addPlate({ id, name: plateName, price: platePrice});
    setPlateName('');
    setPlatePrice('');
    setId(id + 1);
  }

  return (
    <div className="add-plate">
      <label htmlFor="plate-name" className="add-plate__label"></label>
      <input type="text" id="plate-name" className="add-plate__input" placeholder="Nombre del plato" value={plateName} onChange={handlePlateName}/>
      <label htmlFor="plate-value" className="add-plate__label"></label>
      <input type="text" id="plate-value" className="add-plate__input" placeholder="Precio del plato" value={platePrice} onChange={handlePlatePrice}/>
      <button onClick={handleSubmit} className="btn">Añadir plato</button>
    </div>
  )
}

export default AddPlate
