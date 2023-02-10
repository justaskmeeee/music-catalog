import React from "react";
import PropTypes from 'prop-types';

const Icon = ({ className, src, onClick, }) => {
  return (
    <img className={className} src={src} onClick={onClick} alt='icon' />
  );
}

Icon.propTypes = {
  className: PropTypes.string,
  src: PropTypes.string,
  onClick: PropTypes.func,
}


export default Icon;