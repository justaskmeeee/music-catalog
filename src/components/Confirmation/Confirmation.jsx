import React from "react";
import s from './Confirmation.module.scss';

const Confirmation = ({ onRemove }) => {
  return (
    <div className={s.confirmation}>
      <p className={s.caption}>Вы уверены, что хотите удалить песню?</p>
      <button className={s.confirmButton} onClick={onRemove}>Да</button>
    </div>
  );
}

export default Confirmation;