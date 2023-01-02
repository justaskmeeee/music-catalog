import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from 'uuid';


const initialState = {
  songs: JSON.parse(localStorage.getItem('songs')) || [],
  currentSong: {},
  routeSongValue: {},
  filterValue: JSON.parse(localStorage.getItem('filter-value')) || '',
}

export const songSlice = createSlice({
  name: 'catalog',
  initialState,
  reducers: {
    addSong(state, action) {
      const song = {
        title: action.payload.title,
        album: action.payload.album,
        artist: action.payload.artist,
        duration: action.payload.duration,
        genre: action.payload.genre,
        id: uuidv4(),
      }

      state.songs.push(song);
      localStorage.setItem('songs', JSON.stringify(state.songs));
    },
    getCurrentSong(state, action) {
      state.currentSong = state.songs.find(song => song.id === action.payload.id);
    },
    editCurrentSong(state, action) {
      state.currentSong = {...state.currentSong, ...action.payload};
    },
    clearCurrentSongValue(state) {
      state.currentSong = {};
    }, 
    removeCurrentSong(state) {
      state.songs = state.songs.filter(song => song.id !== state.currentSong.id);
      localStorage.setItem('songs', JSON.stringify(state.songs));
    },
    saveEditedSongValues(state, action) {
      state.songs = state.songs.map(song => {
        if (song.id === action.payload) {
          return {...song, ...state.currentSong}
        } 

        return song;
      })
      localStorage.setItem('songs', JSON.stringify(state.songs));
    },
    changeFilterValue(state, action) {
      state.filterValue = action.payload;
      localStorage.setItem('filter-value', JSON.stringify(state.filterValue));
    },
    getSongValueByIndex(state, action) {
      state.routeSongValue = state.songs[action.payload - 1];
    }
  }
})

export const { 
  addSong, 
  getCurrentSong, 
  editCurrentSong,
  clearCurrentSongValue, 
  removeCurrentSong,
  saveEditedSongValues,
  changeFilterValue,
  getSongValueByIndex,
} = songSlice.actions;

export default songSlice.reducer;