import { takeLatest, call, put, all } from "redux-saga/effects";
import { LOAD, LOAD_HISTORY_PRICES, LOAD_USER } from "./types";
import { getLand, getHistoryPrices, getUser } from "./api";
import {
  loadSuccess,
  loadError,
  loadHistoryPricesSuccess,
  loadHistoryPricesError,
  loadUserSuccess,
  loadUserError
} from "./actions";

function* loadSaga(action) {
  try {
    const response = yield call(getLand, action.payload);
    yield put(loadSuccess(response.data));
  } catch (e) {
    put(loadError(e));
  }
}

function* loadHistoryPricesSaga(action) {
  try {
    const response = yield call(getHistoryPrices, action.payload);
    yield put(loadHistoryPricesSuccess(response));
  } catch (e) {
    put(loadHistoryPricesError(e));
  }
}

function* loadUserSaga(action) {
  try {
    const response = yield call(getUser, action.payload);
    yield put(loadUserSuccess(response));
  } catch (e) {
    put(loadUserError(e));
  }
}

export default function* saga() {
  yield all([
    takeLatest(LOAD, loadSaga),
    takeLatest(LOAD_HISTORY_PRICES, loadHistoryPricesSaga),
    takeLatest(LOAD_USER, loadUserSaga)
  ]);
}
