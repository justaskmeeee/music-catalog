import Modal from "components/UI/Modal";
import React from "react";
import { useState } from "react";
import Button from "../UI/Button";
import s from "./Song.module.scss";

const Song = ({title, album, artist, duration, genre}) => {
  const [quickModalIsOpen, setQuickModalIsOpen] = useState(false);

  const handleQuickModalVisibility = () => {
    setQuickModalIsOpen(!quickModalIsOpen);
  }

  return (
    <>
      <li>
        <div className={s.song}>
          <div className={s.info}>
              <div className={s.title}>{title}</div>
              <div className={s.album}>{album}</div>
              <div className={s.artist}>{artist}</div>
          </div>
          <Button 
            className={s.quickview} 
            text="Просмотр"
            onClick={handleQuickModalVisibility}
          /> 
        </div>
      </li>
      {quickModalIsOpen &&
        <Modal onClose={handleQuickModalVisibility}>
          <div className={s.quickViewInfo}>
            <p>Название песни: {title}</p>
            <p>Альбом: {album} </p>
            <p>Артист: {artist}</p>
            <p>Длительность: {duration}</p>
            <p>Жанр: {genre}</p>
          </div>
        </Modal>
      }
    </>
  );
}

export default Song;