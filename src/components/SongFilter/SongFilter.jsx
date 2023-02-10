import React from "react";
import { useDispatch } from "react-redux";
import { getChangeFilterValueFetch, resetFilterValue } from "store/slices/songSlice";
import { useSearchParams } from "react-router-dom";
import s from './SongFilter.module.scss';

const SongFilter = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const dispatch = useDispatch();

  const handleSongFilterValue = (event) => {
    const { value } = event.target;
    const filterStarted = value.length >= 3;

    if (filterStarted) {
      setSearchParams({search: value});
      dispatch(getChangeFilterValueFetch(value)); 
    } else {
      removeSongFilterParams();
    }
  }

  const removeSongFilterParams = () => {
    searchParams.delete('search');
    setSearchParams(searchParams);
    dispatch(resetFilterValue());
  }

  return (
    <div className={s.filter}>
      <input
        className={s.searchField}
        onChange={handleSongFilterValue}
        placeholder="Найти песню"
      />
    </div>
  );
}

export default SongFilter;