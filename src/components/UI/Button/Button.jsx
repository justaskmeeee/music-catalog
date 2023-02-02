import React from "react";
import propTypes from 'prop-types';

const Button = ({ className, text, onClick }) => {
  return (
    <button className={className} onClick={onClick}>{text}</button>
  );
}

Button.propTypes = {
  className: propTypes.string,
  text: propTypes.string,
  onClick: propTypes.func.isRequired,
}

export default Button;