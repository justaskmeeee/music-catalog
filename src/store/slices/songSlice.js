import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  songs: [],
  isLoading: false,
  isAdded: false,
  isRemoved: false,
  isOpened: false,
  isShown: false,
  currentSong: {},
  routeSongValue: {},
  filterValue: '',
}

export const songSlice = createSlice({
  name: 'catalog',
  initialState,
  reducers: {
    getSongsFetch(state) {
      state.isLoading = true;
    },
    getSongsSuccess(state, action) {
      state.songs = action.payload;
      state.isLoading = false;
    },
    getSongsFailure(state) {
      state.isLoading = false;
    },
    getAddSongFetch(state) {
      state.isAdded = true;
    },
    getAddSongSuccess(state, action) {
      const song = {
        title: action.payload.title,
        album: action.payload.album,
        artist: action.payload.artist,
        duration: action.payload.duration,
        genre: action.payload.genre,
        id: action.payload.id,
      }

      state.songs.push(song);
      state.isAdded = false;
    },
    getAddSongFailure(state) {
      state.isAdded = false;
    },
    getCurrentSongValueFetch(state) {
      state.currentSong = {};
      state.isShown = false;
    },
    getCurrentSongValueSuccess(state, action) {
      const currentSongValue = action.payload;
      state.currentSong = currentSongValue;
      state.isShown = true;
    },
    getCurrentSongValueFailure(state) {
      state.currentSong = {};
      state.isShown = false;
    },
    getEditSongFetch(state) {
      
    },
    getEditSongSuccess(state, action) {
      state.currentSong = {...state.currentSong, ...action.payload};
    },
    getEditSongFailure(state) {

    },
    getSaveEditedSongValuesFetch(state) {

    },
    getSaveEditedSongValuesSuccess(state, action) {
      const editingSongId = action.payload.id;
      const editedSongValue = action.payload;

      state.songs = state.songs.map(song => {
        if (song.id === editingSongId) {
          return {...song, ...editedSongValue}
        }

        return song;
      });
    },
    getSaveEditedSongValuesFailure(state) {

    },
    getRemoveCurrentSongFetch(state) {
      state.isRemoved = true;
    },
    getRemoveCurrentSongSuccess(state, action) {
      state.songs = state.songs.filter(song => song.id !== action.payload);
      state.isRemoved = false;
    },
    getRemoveCurrentSongFailure(state) {
      state.isRemoved = false;
    },
    getSongPageByIdFetch(state) {
      state.isLoading = true;
      state.isOpened = false;
    },
    getSongPageByIdSuccess(state, action) {
      const songValue = action.payload;
      state.routeSongValue = songValue;
      state.isLoading = false; 
      state.isOpened = true;
    },
    getSongPageByIdFailure(state) {
      state.isLoading = true;
      state.isOpened = false;
    },
    changeFilterValue(state, action) {
      state.filterValue = action.payload;
    },
  }
})

export const { 
  getSongsFetch,
  getSongsSuccess,
  getSongsFailure,
  getAddSongFetch,
  getAddSongSuccess,
  getAddSongFailure,
  getCurrentSongValueFetch,
  getCurrentSongValueSuccess,
  getCurrentSongValueFailure,
  getSaveEditedSongValuesFetch,
  getSaveEditedSongValuesSuccess,
  getSaveEditedSongValuesFailure,
  getRemoveCurrentSongFetch,
  getRemoveCurrentSongSuccess,
  getRemoveCurrentSongFailure,
  getSongPageByIdFetch,
  getSongPageByIdSuccess,
  getSongPageByIdFailure,
  getChangeFilterValueFetch,
  getChangeFilterValueSuccess,
  changeFilterValue,
} = songSlice.actions;

export default songSlice.reducer;