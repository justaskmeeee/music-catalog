import React from "react";

const MusicFormInput = ({labelCaption, type, value, handleValue}) => {  
  const setMusicValue = (event) => {
    handleValue(event.target.value)
  }
  
  return (
    <label>
      {labelCaption}
      <input 
        type={type}
        value={value}
        onChange={setMusicValue}
      />
    </label>
  )
}

export default MusicFormInput;