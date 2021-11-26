import React from 'react';
import './styles.scss';

const Pay = () => {
  return (
    <section>
      <h3>Pago</h3>
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
      <p>Total c/u: $34.320</p>
    </section>
  )
}

export default Pay
