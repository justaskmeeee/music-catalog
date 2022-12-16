import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { formModal } from "store/selectors";
import { setFormModalVisibility } from "store/slices/modalSlice";
import MusicCatalogList from "../MusicCatalogList";
import MusicFormModal from "../MusicFormModal";
import Button from "../UI/Button";
import s from './Content.module.scss';

const Content = () => {
  const formModalIsOpen = useSelector(formModal);
  const dispatch = useDispatch();

  const handleFormModalVisibility = () => {
    dispatch(setFormModalVisibility(!formModalIsOpen));
  }

  return (
    <div className={s.container}>
      <div className={s.buttonContainer}>
        <Button 
          text="Добавить песню"
          onClick={handleFormModalVisibility} 
        />
      </div>
      {formModalIsOpen && 
        <MusicFormModal isOpen={handleFormModalVisibility} />
      }
      <h2 className={s.caption}>Список песен:</h2>
      <MusicCatalogList />
    </div>
  );
}

export default Content;