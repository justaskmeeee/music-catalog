import React from "react";
import Button from "../UI/Button";
import s from "./Song.module.scss";

const Song = ({title, album, artist, onQuickView, onEdit}) => {  
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
            onClick={onQuickView}
          /> 
          <Button
            text="Редактировать"
            onClick={onEdit}
          />
        </div>
      </li>
    </>
  );
}

export default Song;