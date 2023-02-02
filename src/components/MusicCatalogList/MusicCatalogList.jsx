import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { currentSongSelector, filterSongs, isLoadingSelector, isShownSelector, songItemIsOpenSelector } from "store/selectors";
import { getCurrentSongValueFetch } from "store/slices/songSlice";
import Modal from "components/UI/Modal";
import Song from "../Song";
import SongAbout from "components/SongAbout";
import SongNotFound from "components/SongNotFound";
import MusicForm from "components/MusicForm";
import { setSongItemVisibility } from "store/slices/modalSlice";
import Loader from "components/UI/Loader";
import propTypes from 'prop-types';
import s from './MusicCatalogList.module.scss';

const MusicCatalogList = ({ isEmpty }) => {
  const songs = useSelector(filterSongs);
  const filteredSongsNotFound = songs.length === 0;
  const songModalIsOpen = useSelector(songItemIsOpenSelector);
  const currentSong = useSelector(currentSongSelector);
  const currentSongValueIsNotEmpty = Object.keys(currentSong).length !== 0;
  const [quickViewIsOpen, setQuickViewIsOpen] = useState(false);
  const [editingFormIsOpen, setEditingFormIsOpen] = useState(false);
  const catalogIsLoading = useSelector(isLoadingSelector);
  const songIsShown = useSelector(isShownSelector);
  const dispatch = useDispatch();

  const handleQuickView = (id) => {
    dispatch(getCurrentSongValueFetch(id));
    dispatch(setSongItemVisibility(!songModalIsOpen));
    setQuickViewIsOpen(!quickViewIsOpen);
  }

  const handleEditingForm = (id) => {
    dispatch(getCurrentSongValueFetch(id));
    dispatch(setSongItemVisibility(!songModalIsOpen));
    setEditingFormIsOpen(!editingFormIsOpen);
  }
  
  const handleCloseSongItem = () => {
    dispatch(setSongItemVisibility(!songModalIsOpen));
    setQuickViewIsOpen(false);
    setEditingFormIsOpen(false);
  }

  const getChoosedSongInfo = () => {
    if (quickViewIsOpen && songIsShown) {
      return <SongAbout songItemValues={currentSong} />
    }

    if (editingFormIsOpen && currentSongValueIsNotEmpty) {
      return <MusicForm 
              isOpen={handleCloseSongItem}
              isEditing={songModalIsOpen} 
              songItemValues={currentSong}
            />
    }
  }

  const getSongCatalog = () => {
    if (isEmpty) {
      return <SongNotFound caption='Каталог пуст' />
    } else if (!isEmpty && filteredSongsNotFound) {
      return <SongNotFound caption='Песня не найдена' /> 
    } else {
      return songs.map(item => {
        return <Song 
                  key={item.id}
                  title={item.title}
                  album={item.album} 
                  artist={item.artist}
                  id={item.id}
                  onQuickView={() => handleQuickView(item.id)}
                  onEdit={() => handleEditingForm(item.id)}
               />
      })
    }
  }
  
  return (
    <>
      {(songModalIsOpen && songIsShown) &&
        <Modal onClose={handleCloseSongItem}>
          {getChoosedSongInfo()}
        </Modal>
      }
      <ul className={s.list}>
        {catalogIsLoading ? 
          <Loader /> :
          getSongCatalog()
        } 
      </ul> 
    </>
  );
}

MusicCatalogList.propTypes = {
  isEmpty: propTypes.bool,
}

export default MusicCatalogList;