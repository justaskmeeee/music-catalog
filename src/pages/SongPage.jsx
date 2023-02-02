import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { isLoadingSelector, isNotFoundSelector, isOpenedSelector, routeSongValueSelector } from "store/selectors";
import { getSongPageByIdFetch } from "store/slices/songSlice";
import avatar from '../images/avatar.svg';
import SongInfo from "components/SongInfo";
import SongNotFound from "components/SongNotFound";
import Button from "components/UI/Button";
import Loader from "components/UI/Loader";
import s from './SongPage.module.scss';

const SongPage = () => {
  const routeSong = useSelector(routeSongValueSelector);
  const { id } = useParams();
  const navigate = useNavigate();
  const songIsNotFound = useSelector(isNotFoundSelector);
  const songIsLoading = useSelector(isLoadingSelector);
  const songIsOpened = useSelector(isOpenedSelector);
  const dispatch = useDispatch(); 

  useEffect(() => {
    dispatch(getSongPageByIdFetch(id));
  }, [dispatch])

  const handleGoToCatalog = () => {
    navigate('/items', { replace: true });
  }

  const getSongPageInfo = () => {
    if (songIsLoading && !songIsOpened) {
      return (
        <div className={s.container}>
          <Loader />
        </div>
      )
    } else if (!songIsOpened && songIsNotFound) {
      return (
        <div className={s.container}>
          <SongNotFound caption="Песня не найдена" />
          <Button 
            className={s.backButton}
            text="На главную"
            onClick={handleGoToCatalog}
          />
        </div>
      ) 
    } else {
      return <SongInfo 
        song={routeSong} 
        avatar={avatar} 
        onClick={handleGoToCatalog}
      />
    }
  }

  return (
    <>            
      {getSongPageInfo()}
    </>
  );
}

export default SongPage;