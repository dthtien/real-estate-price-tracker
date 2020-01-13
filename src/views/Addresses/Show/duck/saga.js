import { takeLatest, call, put, all } from "redux-saga/effects";
import { LOAD, LOAD_LANDS, LOAD_PRICE_LOGGERS } from "./types";
import { getAddresses, getLands, getPriceLoggers } from "./api";
import {
  loadSuccess,
  loadError,
  loadLandsSuccess,
  loadLandsError,
  loadPriceLoggersSuccess,
  loadPriceLoggersError
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

function* loadPriceLoggersSaga(action) {
  try {
    const response = yield call(getPriceLoggers, action.payload);
    yield put(loadPriceLoggersSuccess(response));
  } catch (e) {
    yield put(loadPriceLoggersError(e));
  }
}

export default function* saga() {
  yield all([
    takeLatest(LOAD, loadSaga),
    takeLatest(LOAD_LANDS, loadLandsSaga),
    takeLatest(LOAD_PRICE_LOGGERS, loadPriceLoggersSaga)
  ]);
}
