import React, { useState } from "react";
import s from "./Input.module.scss";

const Input = ({label, error, errorMessage, ...props}) => {
  return (
      <div>
        <label>{label}</label>
        <input 
          className={s.input}
          {...props} 
        />
        {error && <div className={s.error}>{errorMessage}</div>}
      </div>
  );
}

export default Input;