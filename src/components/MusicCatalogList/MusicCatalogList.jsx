import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Song from "../Song";
import { catalogSelector } from "store/selectors";
import { getCurrentSong } from "store/slices/songSlice";
import SongAbout from "components/SongAbout";
import Modal from "components/UI/Modal";
import s from "./MusicCatalogList.module.scss";

const MusicCatalogList = () => {
  const songs = useSelector(catalogSelector);
  const [songModalIsOpen, setSongModalIsOpen] = useState(false);
  const [quickViewIsOpen, setQuickViewIsOpen] = useState(false);
  const dispatch = useDispatch();

  const handleShowQuickView = (id) => {
    dispatch(getCurrentSong({id}));
    setSongModalIsOpen(!songModalIsOpen);
    setQuickViewIsOpen(!quickViewIsOpen);
  }

  const handleCloseModal = () => {
    if (songModalIsOpen) {
      setSongModalIsOpen(!songModalIsOpen);
      setQuickViewIsOpen(!quickViewIsOpen);
    }
  }

  const getSongInfo = () => {
    if (quickViewIsOpen) return <SongAbout />
  }

  return (
    <>
      <ul>
        {songs.map(item => {
          return <Song 
                    key={item.id}
                    title={item.title}
                    album={item.album} 
                    artist={item.artist}
                    onView={() => handleShowQuickView(item.id)}
                  />
        })}
      </ul> 
      {songModalIsOpen &&
        <Modal onClose={handleCloseModal}>
          {getSongInfo()}
        </Modal>
      }
    </>
  );
}

export default MusicCatalogList;