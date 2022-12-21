import React from "react";
import { useSelector } from "react-redux";
import Song from "../Song";
import { catalog } from "store/selectors";
import s from "./MusicCatalogList.module.scss";

const MusicCatalogList = () => {
  const songs = useSelector(catalog);

  return (
    <ul>
      {songs.map(item => {
        return <Song 
                  key={item.id}
                  title={item.title}
                  album={item.album} 
                  artist={item.artist}
                  duration={item.duration}
                  genre={item.genre}
                />
      })}
    </ul>
  );
}

export default MusicCatalogList;