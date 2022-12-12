import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from 'uuid';


const initialState = {
  songs: JSON.parse(localStorage.getItem('songs')) || [],
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
    }
  }
})

export const { addSong } = songSlice.actions;
export default songSlice.reducer;