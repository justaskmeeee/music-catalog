import React from "react";
import { useSelector } from "react-redux";
import { currentSongSelector } from "store/selectors";

const SongAbout = () => {
  const currentSong = useSelector(currentSongSelector);

  return (
    <div>
      <p>Название песни: {currentSong.title}</p>
      <p>Альбом: {currentSong.album} </p>
      <p>Артист: {currentSong.artist}</p>
      <p>Длительность: {currentSong.duration}</p>
      <p>Жанр: {currentSong.genre}</p>
    </div>
  )
}

export default SongAbout;