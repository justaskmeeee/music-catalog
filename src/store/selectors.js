import { createSelector } from "@reduxjs/toolkit";

export const catalogSelector = (state) => state.catalog.songs;
export const modalSelector = (state) => state.modal.modalIsOpen;
export const songItemIsOpenSelector = (state) => state.modal.songItemIsOpen;
export const currentSongSelector = (state) => state.catalog.currentSong;
export const routeSongValueSelector = (state) => state.catalog.routeSongValue;
export const filterValueSelector = (state) => state.catalog.filterValue;
export const isLoadingSelector = (state) => state.catalog.isLoading;
export const isOpenedSelector = (state) => state.catalog.isOpened;
export const isNotFoundSelector = (state) => state.catalog.isNotFound;
export const isShownSelector = (state) => state.catalog.isShown;

export const filterSongs = createSelector(
  catalogSelector,
  filterValueSelector,
  (songs, filterValue) => songs.filter(song => {
    for (let key in song) {
      if (key === 'duration' || key === 'genre' || key === 'id') return;
      const songValue = song[key].toLowerCase();
      if (songValue.includes(filterValue.toLowerCase())) {
        return true;
      }
    }    
  })
)

export const isCatalogEmpty = createSelector(
  catalogSelector,
  (songs) => songs.length === 0
)