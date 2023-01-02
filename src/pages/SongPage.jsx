import Button from "components/UI/Button";
import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import { getCountOfSongs, routeSongValueSelector } from "store/selectors";
import { getSongValueByIndex } from "store/slices/songSlice";
import { converToNumber } from "utils/convertToNumber";
import s from './SongPage.module.scss';

const SongPage = () => {
  const countOfSongs = useSelector(getCountOfSongs);
  const routeSong = useSelector(routeSongValueSelector);
  const { id } = useParams();
  const navigate = useNavigate();
  const songIndex = converToNumber(id);
  const dispatch = useDispatch(); 

  useEffect(() => {
    dispatch(getSongValueByIndex(id));
  }, [id])

  const handleGoToCatalog = () => {
    navigate('/items', { replace: true });
  }

  return (
    <>
      {(songIndex <= countOfSongs) ?
        <div className={s.songPage}>
          <div className={s.info}>
            <h1 className={s.caption}>Название - {routeSong.title}</h1>
            <h3 className={s.subtitle}>Подробная информация:</h3>
            <div>
              <p>Название песни - {routeSong.title}</p>
              <p>Альбом - {routeSong.album}</p>
              <p>Артист - {routeSong.artist}</p>
              <p>Длительность - {routeSong.duration || 'Не указана'}</p>
              <p>Жанр - {routeSong.genre || 'Не указан'}</p>
            </div>
            <Button 
              className={s.backButton}
              text="Назад" 
              onClick={handleGoToCatalog}
            />
          </div>
        </div> :
        <Navigate to={'/items'} replace />
      }
    </>
  );
}

export default SongPage;