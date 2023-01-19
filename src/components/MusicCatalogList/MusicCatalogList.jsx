import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { currentSongSelector, filterSongs, isLoadingSelector, songItemSelector, isShownSelector } from "store/selectors";
import { getCurrentSongValueFetch } from "store/slices/songSlice";
import Modal from "components/UI/Modal";
import Song from "../Song";
import SongAbout from "components/SongAbout";
import MusicForm from "components/MusicForm";
import { setSongItemVisibility } from "store/slices/modalSlice";
import Loader from "components/UI/Loader";

const MusicCatalogList = () => {
  const songs = useSelector(filterSongs);
  const songIsOpen = useSelector(songItemSelector);
  const currentSong = useSelector(currentSongSelector);
  const currentSongValueIsNotEmpty = Object.keys(currentSong).length !== 0;
  const [quickViewIsOpen, setQuickViewIsOpen] = useState(false);
  const [editingFormIsOpen, setEditingFormIsOpen] = useState(false);
  const catalogIsLoading = useSelector(isLoadingSelector);
  const songIsShown = useSelector(isShownSelector);
  const dispatch = useDispatch();

  const handleQuickView = (id) => {
    dispatch(getCurrentSongValueFetch(id));
    dispatch(setSongItemVisibility(!songIsOpen));
    setQuickViewIsOpen(!quickViewIsOpen);
  }

  const handleEditingForm = (id) => {
    dispatch(getCurrentSongValueFetch(id));
    dispatch(setSongItemVisibility(!songIsOpen));
    setEditingFormIsOpen(!editingFormIsOpen);
  }
  
  const handleCloseSongItem = () => {
    dispatch(setSongItemVisibility(!songIsOpen));
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
              isEditing={songIsOpen} 
              songItemValues={currentSong}
            />
    }
  }
  
  return (
    <>
      {(songIsOpen && songIsShown) &&
        <Modal onClose={handleCloseSongItem}>
          {getChoosedSongInfo()}
        </Modal>
      }
      <ul>
        {!catalogIsLoading ? 
          (songs.map(item => {
            return <Song 
                      key={item.id}
                      title={item.title}
                      album={item.album} 
                      artist={item.artist}
                      id={item.id}
                      onQuickView={() => handleQuickView(item.id)}
                      onEdit={() => handleEditingForm(item.id)}
                    />
          })) :
          <Loader title='Загрузка...' />
        }
      </ul> 
    </>
  );
}

export default MusicCatalogList;