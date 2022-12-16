import React from "react";
import Button from "../UI/Button";
import s from './QuickModal.module.scss';

const QuickModal = ({setActive, children}) => {
  return(
    <div className={s.container} onClick={() => setActive(false)}>
      <div className={s.quickModal} onClick={(event) => event.stopPropagation()}>
        {children}
        <Button 
          className={s.close} 
          text="Закрыть" 
          onClick={() => setActive(false)}
        />
      </div>
    </div>
  )
}

export default QuickModal;