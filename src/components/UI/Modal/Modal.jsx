import React from "react";
import ReactDOM from "react-dom";
import Button from "../Button";
import propTypes from 'prop-types';
import s from "./Modal.module.scss";

const Modal = ({ onClose, children }) => {
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
      <div className={s.modal} onClick={stopPropagation}>
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

Modal.propTypes = {
  onClose: propTypes.func.isRequired,
  children: propTypes.element,
}

export default Modal;