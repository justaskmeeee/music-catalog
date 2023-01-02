import React from "react";
import s from './SongAbout.module.scss';

const SongAbout = ({songItemValues}) => {
  return (
    <div className={s.about}>
      <p className={s.text}>
        <span className={s.bold}>Название песни: </span>{songItemValues.title}
      </p>
      <p className={s.text}>
        <span className={s.bold}>Альбом: </span>{songItemValues.album}
      </p>
      <p className={s.text}>
        <span className={s.bold}>Артист: </span>{songItemValues.artist}
      </p>
      <p className={s.text}>
        <span className={s.bold}>Длительность: </span>{songItemValues.duration || 'Не указана'}
      </p>
      <p className={s.text}>
        <span className={s.bold}>Жанр: </span>{songItemValues.genre || 'Не указан'}
      </p>
    </div>
  )
}

export default SongAbout;