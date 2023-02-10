import React from "react";
import { v4 as uuidv4 } from 'uuid'; 
import propTypes from 'prop-types';
import s from './Dropdown.module.scss';

const Dropdown = ({ value, onChange, options }) => {
  return (
    <div>
      <label className={s.genreLabel}>Выберите жанр:</label>
      <select className={s.genreSelect} value={value} onChange={onChange}>
        {options.map(option => {
          return <option className={s.genreOption} value={option.value} key={uuidv4()}>
            {option.name}
          </option>
        })}
      </select>
    </div>
  );
}

Dropdown.propTypes = {
  value: propTypes.string,
  onChange: propTypes.func.isRequired,
  options: propTypes.arrayOf(propTypes.object),
}

export default Dropdown;