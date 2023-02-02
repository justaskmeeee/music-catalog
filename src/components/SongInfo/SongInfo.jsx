import React from "react"
import Button from "components/UI/Button";
import propTypes from 'prop-types';
import s from './SongInfo.module.scss';

const SongInfo = ({ song, avatar, onClick }) => {
  return ( 
    <div className={s.songPage}>
      <div className={s.container}>
        <div className={s.info}>
          <div className={s.profile}>
            <img className={s.avatar} src={avatar} alt="Artist avatar" />
            <p className={s.artist}>{song.artist}</p>
          </div>
          <h3 className={s.about}>Информация:</h3>
          <div>
            <p className={s.item}>Название песни - {song.title}</p>
            <p className={s.item}>Альбом - {song.album}</p>
            <p className={s.item}>Артист - {song.artist}</p>
            <p className={s.item}>Длительность - {song.duration || 'не указана'}</p>
            <p className={s.item}>Жанр - {song.genre || 'не выбран'}</p>
          </div>
          <Button 
            className={s.backButton}
            text="Назад" 
            onClick={onClick}
          />
        </div>
      </div> 
    </div>
  )
}

SongInfo.propTypes = {
  song: propTypes.objectOf(propTypes.string),
  avatar: propTypes.string,
  onClick: propTypes.func.isRequired,
}

export default SongInfo;