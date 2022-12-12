import React from "react";

const MusicFormSelect = ({selectValue, handleSelect}) => {
  const selectMusicGengre = (event) => {
    handleSelect(event.target.value)
  }
  
  return (
    <div>
      <label>Выберите жанр:</label>
      <select value={selectValue} onChange={selectMusicGengre}>
        <option>house</option>
        <option>rap</option>
        <option>hip-hop</option>
        <option>electronic</option>
        <option>classic</option>
      </select>
    </div>
  );
}

export default MusicFormSelect;