import React from "react";
import { v4 as uuidv4 } from 'uuid'; 

const Select = ({defaultValue, value, onChange, options}) => {
  const handleSelectValue = (event) => {
    onChange(event.target.value);
  }

  return (
    <div>
      <label>Выберите жанр:</label>
      <select value={value} onChange={handleSelectValue}>
        <option disabled>{defaultValue}</option>
        {options.map(option => {
          return <option value={option.value} key={uuidv4()}>
            {option.name}
          </option>
        })}
      </select>
    </div>
  );
}

export default Select;