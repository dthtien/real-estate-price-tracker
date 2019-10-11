import { takeLatest } from "redux-saga/effects";
const initialState = {
  loading: false,
  error: false,
  data: null
};

const LOAD = "app/LOAD";

export const load = payload => ({
  type: LOAD,
  payload
});

export const reducerName = "dashBoard";
// reducer
export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case LOAD:
      return {
        loading: true,
        error: false,
        data: null
      };
    default:
      return state;
  }
}

// Saga
// eslint-disable-next-line require-yield
function* loadSaga() {
  console.log("got it");
}

export function* saga() {
  yield takeLatest(LOAD, loadSaga);
}
