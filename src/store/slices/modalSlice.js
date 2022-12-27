import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  modalIsOpen: false,
  songItemIsOpen: false,
}

export const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    setModalVisibility(state, action) {
      state.modalIsOpen = action.payload;
    },
    setSongItemVisibility(state, action) {
      state.songItemIsOpen = action.payload;
    }
  }
})

export const { setModalVisibility, setSongItemVisibility } = modalSlice.actions;
export default modalSlice.reducer;