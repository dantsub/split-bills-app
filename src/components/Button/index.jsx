import React from 'react';
import './styles.scss';

const Button = ({ content, fn }) => {
  return (
    <button onClick={fn} className="btn">{content}</button>
  )
}

export default Button
