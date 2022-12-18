import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  modalIsOpen: false,
}

export const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    setModalVisibility(state, action) {
      state.modalIsOpen = action.payload;
    },
  }
})

export const { setModalVisibility } = modalSlice.actions;
export default modalSlice.reducer;