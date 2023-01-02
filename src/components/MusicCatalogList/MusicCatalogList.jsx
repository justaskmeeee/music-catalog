import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Song from "../Song";
import { currentSongSelector, filterSongs } from "store/selectors";
import { getCurrentSong, clearCurrentSongValue } from "store/slices/songSlice";
import Modal from "components/UI/Modal";
import SongAbout from "components/SongAbout";
import MusicForm from "components/MusicForm";
import { setSongItemVisibility } from "store/slices/modalSlice";
import { songItemSelector } from "store/selectors";
import SongNotFound from "components/SongNotFound";
import s from "./MusicCatalogList.module.scss";

const MusicCatalogList = () => {
  const songs = useSelector(filterSongs);
  const songIsOpen = useSelector(songItemSelector);
  const currentSong = useSelector(currentSongSelector);
  const [quickViewIsOpen, setQuickViewIsOpen] = useState(false);
  const [editingFormIsOpen, setEditingFormIsOpen] = useState(false);
  const dispatch = useDispatch();

  const handleQuickView = (id) => {
    dispatch(getCurrentSong({id}));
    dispatch(setSongItemVisibility(!songIsOpen));
    setQuickViewIsOpen(!quickViewIsOpen);
  }

  const handleEditingForm = (id) => {
    dispatch(getCurrentSong({id}));
    dispatch(setSongItemVisibility(!songIsOpen));
    setEditingFormIsOpen(!editingFormIsOpen);
  }
  
  const handleCloseSongItem = () => {
    dispatch(setSongItemVisibility(!songIsOpen));
    dispatch(clearCurrentSongValue());
    setQuickViewIsOpen(false);
    setEditingFormIsOpen(false);
  }

  const getChoosedSongInfo = () => {
    if (quickViewIsOpen) {
      return <SongAbout songItemValues={currentSong} />
    }

    if (editingFormIsOpen) {
      return <MusicForm 
              isOpen={handleCloseSongItem}
              isEditing={songIsOpen} 
              songItemValues={currentSong}
            />
    }
  }
  
  return (
    <>
      {songIsOpen &&
        <Modal onClose={handleCloseSongItem}>
          {getChoosedSongInfo()}
        </Modal>
      }
      <ul>
        {songs.length ? 
          (songs.map((item, index) => {
            const songIndex = index + 1;
            return <Song 
                      key={item.id}
                      title={item.title}
                      album={item.album} 
                      artist={item.artist}
                      index={songIndex}
                      onQuickView={() => handleQuickView(item.id)}
                      onEdit={() => handleEditingForm(item.id)}
                    />
          })) :
          <SongNotFound />
        }
      </ul> 
    </>
  );
}

export default MusicCatalogList;