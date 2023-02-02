import { 
  getAddSongFailure, getAddSongFetch, getAddSongSuccess, getChangeFilterValueFetch, getCurrentSongValueFailure, getCurrentSongValueFetch, getCurrentSongValueSuccess, getRemoveCurrentSongFailure, getRemoveCurrentSongFetch, getRemoveCurrentSongSuccess, getSaveEditedSongValuesFailure, getSaveEditedSongValuesFetch, getSaveEditedSongValuesSuccess, getSongPageByIdFailure, getSongPageByIdFetch, getSongPageByIdSuccess, getSongsFailure, getSongsFetch, getSongsSuccess, getChangeFilterValueSuccess 
} from 'store/slices/songSlice';
import { all, put, call, takeEvery, takeLatest } from 'redux-saga/effects';
import { deleteSong } from 'store/api/deleteSong';
import { fetchSongs } from 'store/api/fetchSongs';
import { addSongToCatalog } from 'store/api/addSongToCatalog';
import { getSongById } from 'store/api/getSongById';
import { editSong } from 'store/api/editSong';
import { searchSong } from 'store/api/searchSong';

function* workGetCatalogOfSongs() {
  try {
    const catalog = yield call(fetchSongs);
    yield put(getSongsSuccess(catalog));
  } catch (error) {
    yield put(getSongsFailure());
    console.log(error.message);
  }
}

function* workAddSongToCatalog({ payload }) {
  try {
    const songData = payload;
    const newSong = yield call(addSongToCatalog, songData);
    yield put(getAddSongSuccess(newSong))  
  } catch (error) {
    yield put(getAddSongFailure());
    console.log(error.message);
  }
}

function* workGetCurrentSongValueById({ payload }) {
  try {
    const songId = payload;
    const songValue = yield call(getSongById, songId);
    yield put(getCurrentSongValueSuccess(songValue));
  } catch (error) {
    yield put(getCurrentSongValueFailure());
    console.log(error.message);
  }
}

function* workEditSong({ payload }) {
  try {
    const songValue = payload;
    const updatedSongValue = yield call(editSong, songValue);
    yield put(getSaveEditedSongValuesSuccess(updatedSongValue))
  } catch (error) {
    yield put(getSaveEditedSongValuesFailure());
    console.log(error.message);
  }
}

function* workDeleteSongFromCatalog({ payload }) {
  try { 
    const songId = payload;
    const selectedSongRequest = yield call(deleteSong, songId);
    yield call(fetchSongs);
    yield put(getRemoveCurrentSongSuccess(songId));
  } catch (error) {
    yield put(getRemoveCurrentSongFailure());
    console.log(error.message);
  }
} 

function* workGetSongPageById({ payload }) {
  try {
    const songId = payload;
    const songPageData = yield call(getSongById, songId);
    yield put(getSongPageByIdSuccess({...songPageData}));
  } catch (error) {
    yield put(getSongPageByIdFailure());
    console.log(error.message);
  }
}

function* workSearchSong({ payload }) {
  try {
    const filterValue = payload;
    const result = yield call(searchSong, filterValue);
    yield put(getChangeFilterValueSuccess(filterValue));
  } catch (error) {
    console.log(error.message);
  }
}

function* watchGetCatalogOfSongs() {
  yield takeEvery(getSongsFetch.type, workGetCatalogOfSongs)
}

function* watchAddSongToCatalog() {
  yield takeLatest(getAddSongFetch.type, workAddSongToCatalog)
}

function* watchGetCurrentSongValueById() {
  yield takeEvery(getCurrentSongValueFetch.type, workGetCurrentSongValueById)
}

function* watchEditSong() {
  yield takeLatest(getSaveEditedSongValuesFetch.type, workEditSong);
}

function* watchDeleteSong() {
  yield takeEvery(getRemoveCurrentSongFetch.type, workDeleteSongFromCatalog)
}

function* watchGetSongPageById() {
  yield takeEvery(getSongPageByIdFetch.type, workGetSongPageById)
}

function* watchSearchSong() {
  yield takeEvery(getChangeFilterValueFetch.type, workSearchSong);
}

export default function* rootSaga() {
  yield all([
    watchGetCatalogOfSongs(),
    watchAddSongToCatalog(),
    watchGetCurrentSongValueById(),
    watchEditSong(),
    watchDeleteSong(),
    watchGetSongPageById(),
    watchSearchSong(),
  ])
}