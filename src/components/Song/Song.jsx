import React from "react";
import { useState } from "react";
import QuickModal from "../QuickModal/QuickModal";
import Button from "../UI/Button/Button";
import s from "./Song.module.scss";

const Song = ({title, album, artist, duration, genre}) => {
  const [quickViewModalIsOpen, setQuickViewModalIsOpen] = useState(false);

  const handleQuickViewModalVisibility = () => {
    setQuickViewModalIsOpen(!quickViewModalIsOpen);
  }

  return (
    <div className={s.container}>
      <li className={s.song}>
        <div className={s.info}>
          <div className={s.title}>{title}</div>
          <div className={s.album}>{album}</div>
          <div className={s.artist}>{artist}</div>
        </div>      
        <Button 
          className={s.quickview} 
          text="Просмотр"
          onClick={handleQuickViewModalVisibility}
        />     
      </li>
      {quickViewModalIsOpen &&
        <QuickModal setActive={setQuickViewModalIsOpen}>
          <p>Название песни: {title}</p>
          <p>Альбом: {album} </p>
          <p>Артист: {artist}</p>
          <p>Длительность: {duration}</p>
          <p>Жанр: {genre}</p>
        </QuickModal>
      }
    </div>
  );
}

export default Song;