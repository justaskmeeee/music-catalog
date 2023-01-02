import { createSelector } from "@reduxjs/toolkit";

export const catalogSelector = (state) => state.catalog.songs;
export const modalSelector = (state) => state.modal.modalIsOpen;
export const songItemSelector = (state) => state.modal.songItemIsOpen;
export const currentSongSelector = (state) => state.catalog.currentSong;
export const routeSongValueSelector = (state) => state.catalog.routeSongValue;
export const filterValueSelector = (state) => state.catalog.filterValue;

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

export const getCountOfSongs = createSelector(
  catalogSelector,
  (songs) => songs.length
)