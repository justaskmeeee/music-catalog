import React from "react";
import propTypes from 'prop-types';
import s from "./Input.module.scss";

const Input = ({ type, label, name, value, onChange, error, errorMessage, placeholder }) => {
  
  return (
      <div className={s.container}>
        <label className={s.label}>{label}</label>
        <input className={s.inputField} 
          type={type}
          label={label}
          name={name}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
        />
        {error && <div className={s.error}>* {errorMessage}</div>}
      </div>
  );
}

Input.propTypes = {
  type: propTypes.string,
  label: propTypes.string,
  name: propTypes.string,
  value: propTypes.string,
  onChange: propTypes.func.isRequired,
  error: propTypes.string,
  errorMessage: propTypes.string,
  placeholder: propTypes.string,
}

export default Input;