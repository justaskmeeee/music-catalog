import React from "react";
import { v4 as uuidv4 } from 'uuid'; 
import s from './Select.module.scss';

const Select = ({value, onChange, options}) => {
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

export default Select;