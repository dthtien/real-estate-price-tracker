import { takeLatest, call, put } from "redux-saga/effects";
import { LOAD } from "./types";
import { getAddresses } from "./api";
import { loadSuccess, loadError } from "./actions";

// eslint-disable-next-line require-yield
function* loadSaga(action) {
  try {
    console.log(action.payload);
    const response = yield call(getAddresses, action.payload);
    yield put(loadSuccess(response.data));
  } catch (e) {
    put(loadError(e));
  }
}

export default function* saga() {
  yield takeLatest(LOAD, loadSaga);
}
