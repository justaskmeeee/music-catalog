import React from "react";
import { Link } from "react-router-dom";
import Button from "../UI/Button";
import propTypes from 'prop-types';
import s from "./Song.module.scss";

const Song = ({ title, album, artist, id, onQuickView, onEdit }) => {  
  return (
    <>
      <li>
        <div className={s.song}>
          <Link className={s.link} to={`/items/${id}`}>
            <div className={s.info}>
              <div className={s.importantInfo}>
                <div className={s.title}>{title}</div>
                <pre> - </pre>
                <div className={s.artist}>{artist}</div>
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

Song.propTypes = {
  title: propTypes.string,
  album: propTypes.string,
  artist: propTypes.string,
  id: propTypes.string,
  onQuickView: propTypes.func.isRequired,
  onEdit: propTypes.func.isRequired,
}

export default Song;