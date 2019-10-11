import { takeLatest } from "redux-saga/effects";
const initialState = {
  loading: false,
  error: false,
  data: null
};

const LOAD = "user/LOAD";

export const load = payload => ({
  type: LOAD,
  payload
});

export const reducerName = "userProfile";
// reducer
export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    default:
      return state;
  }
}

// Saga
// eslint-disable-next-line require-yield
function* loadSaga() {
  console.log("got it at User Profile");
}

export function* saga() {
  yield takeLatest(LOAD, loadSaga);
}
