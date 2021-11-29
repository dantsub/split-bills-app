import React, { useState } from 'react';
import AddPeople from '../AddPeople';
import './styles.scss';

const Pay = ({ amount, order }) => {
  const [people, setPeople] = useState(1);

  const handleClick = (count) => {
    if ((people > 0 && count === 1) || (count === -1 && people > 1)) {
      setPeople(people + count);
    }
  };
  const pay = Math.floor(amount / people);
  return (
    <section className="pay">
      <h2 className="sr-only">Pay x Client section</h2>
      <AddPeople handleClick={handleClick} people={people} />
      <div className="pay__total">
        <p className="">Pay x Client:</p>
        <span className="pay__amount">${pay}</span>
      </div>
    </section>
  )
}

export default Pay
