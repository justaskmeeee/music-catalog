import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  formModalIsOpen: false,
}

export const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    setFormModalVisibility(state, action) {
      state.formModalIsOpen = action.payload;
    },
  }
})

export const { setFormModalVisibility } = modalSlice.actions;
export default modalSlice.reducer;