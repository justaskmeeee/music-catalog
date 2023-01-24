import React from "react";
import s from './SongNotFound.module.scss';

const SongNotFound = ({ caption }) => {
  return (
    <h1 className={s.caption}>{caption}</h1>
  );
}

export default SongNotFound;