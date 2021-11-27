import React, { useState } from 'react';
import './styles.scss';
import AddPeople from '../AddPeople';

const Pay = ({ amount }) => {
  const [people, setPeople] = useState(1);

  const handleClick = (count) => {
    if ((people > 0 && count === 1) || (count === -1 && people > 1)) {
      setPeople(people + count);
    }
  };
  const pay = Math.floor(amount / people);
  return (
    <section>
      <h3>Pago</h3>
      <AddPeople handleClick={handleClick} people={people} />
      <div>
        <label htmlFor="pay-people">
          <input type="radio" name="pay" id="pay-people" checked />
          <span> Por persona</span>
        </label>
        <label htmlFor="pay-percentage">
          <input type="radio" name="pay" id="pay-percentage" />
          <span> Por porcentaje</span>
        </label>
      </div>
      <p>Total c/u: ${pay}</p>
    </section>
  )
}

export default Pay
