import React from "react";
import s from './Loader.module.scss';

const Loader = ({ title }) => {
  return (
    <>
      <h3 className={s.title}>{title}</h3>
    </>
  );
}

export default Loader;