import React from "react";
import propTypes from 'prop-types';
import s from './SongNotFound.module.scss';

const SongNotFound = ({ caption }) => {
  return (
    <h1 className={s.caption}>{caption}</h1>
  );
}

SongNotFound.propTypes = {
  caption: propTypes.string,
}

export default SongNotFound;