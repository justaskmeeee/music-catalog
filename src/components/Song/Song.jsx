import React from "react";
import { Link, Navigate } from "react-router-dom";
import Button from "../UI/Button";
import s from "./Song.module.scss";

const Song = ({title, album, artist, index, onQuickView, onEdit}) => {  
  return (
    <>
      <li>
        <div className={s.song}>
          <Link className={s.link} to={`/items/${index}`}>
            <div className={s.info}>
              <div className={s.importantInfo}>
                <div className={s.title}>{title}&nbsp;-</div>
                <div className={s.artist}>&nbsp;{artist}</div>
              </div>
              <div className={s.album}>Альбом - {album}</div>
            </div>
          </Link>
          <div className={s.buttonsContainer}>
            <Button 
              className={s.songButton} 
              text="Быстрый просмотр"
              onClick={onQuickView}
            /> 
            <Button
              className={s.songButton} 
              text="Редактировать"
              onClick={onEdit}
            />
          </div>
        </div>
      </li>
    </>
  );
}

export default Song;