import produce from "immer";
import {
  LOAD,
  LOAD_SUCCESS,
  LOAD_ERROR,
  LOAD_LANDS,
  LOAD_LANDS_SUCCESS,
  LOAD_LANDS_ERROR
} from "./types";

export const initialState = {
  address: {
    loading: false,
    error: false,
    data: null
  },
  lands: {
    loading: false,
    error: false,
    data: null
  }
};

export const reducerName = "addressesShow";

const reducer = (state = initialState, action = {}) =>
  produce(state, draft => {
    switch (action.type) {
      case LOAD:
        draft.address.loading = true;
        draft.address.error = false;
        draft.address.data = null;
        break;

      case LOAD_SUCCESS:
        draft.address.loading = false;
        draft.address.error = false;
        draft.address.data = action.payload;
        break;

      case LOAD_ERROR:
        draft.address.loading = false;
        draft.address.error = true;
        draft.address.data = null;
        break;

      case LOAD_LANDS:
        draft.lands.loading = true;
        draft.lands.error = false;
        draft.lands.data = null;
        break;

      case LOAD_LANDS_SUCCESS:
        draft.lands.loading = false;
        draft.lands.error = false;
        draft.lands.data = action.payload;
        break;

      case LOAD_LANDS_ERROR:
        draft.lands.loading = false;
        draft.lands.error = true;
        draft.lands.data = null;
        break;
    }
  });

export default reducer;
