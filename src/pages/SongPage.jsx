import Button from "components/UI/Button";
import Loader from "components/UI/Loader";
import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { isLoadingSelector, isOpenedSelector, routeSongValueSelector } from "store/selectors";
import { getSongPageByIdFetch } from "store/slices/songSlice";
import s from './SongPage.module.scss';

const SongPage = () => {
  const routeSong = useSelector(routeSongValueSelector);
  const { id } = useParams();
  const navigate = useNavigate();
  const songIsLoading = useSelector(isLoadingSelector);
  const songIsOpened = useSelector(isOpenedSelector);
  const dispatch = useDispatch(); 

  useEffect(() => {
    dispatch(getSongPageByIdFetch(id));
  }, [dispatch])

  const handleGoToCatalog = () => {
    navigate('/items', { replace: true });
  }

  return (
    <>            
      {(songIsOpened && !songIsLoading) ?
        <div className={s.songPage}>
          <div className={s.info}>
            <h1 className={s.caption}>Название - {routeSong.title}</h1>
            <h3 className={s.subtitle}>Подробная информация:</h3>
            <div>
              <p>Название песни - {routeSong.title}</p>
              <p>Альбом - {routeSong.album}</p>
              <p>Артист - {routeSong.artist}</p>
              <p>Длительность - {routeSong.duration || 'не указана'}</p>
              <p>Жанр - {routeSong.genre || 'не выбран'}</p>
            </div>
            <Button 
              className={s.backButton}
              text="Назад" 
              onClick={handleGoToCatalog}
            />
          </div>
        </div> :
        <Loader title='Загрузка песни...' />
      }
    </>
  );
}

export default SongPage;