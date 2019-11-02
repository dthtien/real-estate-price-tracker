import { takeLatest, call, put, all } from "redux-saga/effects";
import { LOAD, LOAD_LANDS } from "./types";
import { getAddresses, getLands } from "./api";
import {
  loadSuccess,
  loadError,
  loadLandsSuccess,
  loadLandsError
} from "./actions";

function* loadSaga(action) {
  try {
    const response = yield call(getAddresses, action.payload);
    yield put(loadSuccess(response.data));
  } catch (e) {
    put(loadError(e));
  }
}

function* loadLandsSaga(action) {
  try {
    const response = yield call(getLands, action.payload);
    yield put(loadLandsSuccess(response));
  } catch (e) {
    put(loadLandsError(e));
  }
}

export default function* saga() {
  yield all([
    takeLatest(LOAD, loadSaga),
    takeLatest(LOAD_LANDS, loadLandsSaga)
  ]);
}
