import { configureStore } from "@reduxjs/toolkit";
import modalSlice from "./slices/modalSlice";
import songSlice from "./slices/songSlice";

const store = configureStore({
  reducer: {
    modal: modalSlice,
    catalog: songSlice,
  }
})

export default store;