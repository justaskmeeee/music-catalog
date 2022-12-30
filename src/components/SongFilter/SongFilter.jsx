import React from "react";
import { useDispatch } from "react-redux";
import { changeFilterValue } from "store/slices/songSlice";
import s from './SongFilter.module.scss';

const SongFilter = () => {
  const dispatch = useDispatch();
  
  const handleSongFilterValue = (event) => {
    const { value } = event.target;
    dispatch(changeFilterValue(value));    
  }

  return (
    <div className={s.filter}>
      <span>Найти:</span>
      <input onChange={handleSongFilterValue} />
    </div>
  );
}

export default SongFilter;