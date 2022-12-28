import React from "react";

const SongAbout = ({songItemValues}) => {
  return (
    <div>
      <p>Название песни: {songItemValues.title}</p>
      <p>Альбом: {songItemValues.album} </p>
      <p>Артист: {songItemValues.artist}</p>
      <p>Длительность: {songItemValues.duration || 'Не указана'}</p>
      <p>Жанр: {songItemValues.genre || 'Не указан'}</p>
    </div>
  )
}

export default SongAbout;