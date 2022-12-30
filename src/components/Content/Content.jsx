import React from "react";
import Modal from "components/UI/Modal";
import { useDispatch, useSelector } from "react-redux";
import { modalSelector } from "store/selectors";
import { setModalVisibility } from "store/slices/modalSlice";
import MusicCatalogList from "../MusicCatalogList";
import MusicForm from "../MusicForm";
import Button from "../UI/Button";
import { songValue } from "utils/formValues";
import SongFilter from "components/SongFilter";
import s from './Content.module.scss';

const Content = () => {
  const modalIsOpen = useSelector(modalSelector);
  const dispatch = useDispatch();

  const handleModalVisibility = () => {
    dispatch(setModalVisibility(!modalIsOpen));
  }

  return (
    <div className={s.container}>
      <div className={s.buttonContainer}>
        <Button 
          text="Добавить песню"
          onClick={handleModalVisibility} 
        />
      </div>
      {modalIsOpen &&
        <Modal onClose={handleModalVisibility}>
          <MusicForm 
            isOpen={handleModalVisibility} 
            isCreating={modalIsOpen}
            songItemValues={songValue}
          />
        </Modal>
      }
      <h2 className={s.caption}>Список песен:</h2>
      <SongFilter />
      <MusicCatalogList />
    </div>
  );
}

export default Content;