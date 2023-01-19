import { configureStore } from "@reduxjs/toolkit";
import modalSlice from "./slices/modalSlice";
import songSlice from "./slices/songSlice";
import createSagaMiddleware from "@redux-saga/core";
import rootSaga from "./sagas/songSaga";

const sagaMiddleware = createSagaMiddleware();
const store = configureStore({
  reducer: {
    modal: modalSlice,
    catalog: songSlice,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(sagaMiddleware),
})

sagaMiddleware.run(rootSaga);

export default store;