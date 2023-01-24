import React from "react";
import { useDispatch } from "react-redux";
import { changeFilterValue } from "store/slices/songSlice";
import { useSearchParams } from "react-router-dom";
import s from './SongFilter.module.scss';

const SongFilter = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const dispatch = useDispatch();

  const handleSongFilterValue = (event) => {
    const { value } = event.target;
    dispatch(changeFilterValue(value));
    setSearchParams({search: value});
  }

  const removeSongFilterParam = () => {
    const paramQuery = searchParams.get('search');
    if (paramQuery === '') {
      searchParams.delete('search');
      setSearchParams(searchParams);
    }
  }

  return (
    <div className={s.filter}>
      <input
        className={s.searchField}
        onChange={handleSongFilterValue}
        onBlur={removeSongFilterParam}
        placeholder="Найти песню"
      />
    </div>
  );
}

export default SongFilter;