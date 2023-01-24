import React from "react";
import s from "./Input.module.scss";

const Input = ({label, error, errorMessage, ...props}) => {
  return (
      <div className={s.container}>
        <label className={s.label}>{label}</label>
        <input className={s.inputField} {...props} />
        {error && <div className={s.error}>* {errorMessage}</div>}
      </div>
  );
}

export default Input;