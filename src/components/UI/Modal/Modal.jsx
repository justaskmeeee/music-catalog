import React from "react";
import ReactDOM from "react-dom";
import Button from "../Button";
import s from "./Modal.module.scss";

const Modal = ({onClose, children, ...props}) => {
  const handleCloseModal = () => {
    if (onClose()) {
      onClose();
    }
  }

  const stopPropagation = (event) => {
    event.stopPropagation();
  }

  return ReactDOM.createPortal(
    <div className={s.container} onClick={handleCloseModal}>
      <div className={s.modal} onClick={stopPropagation} {...props}>
        {children}
        <Button 
          className={s.closeButton}
          text="x" 
          onClick={handleCloseModal} 
        />
      </div>
    </div>,
    document.getElementById('modal')
  ) 
}

export default Modal;