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
  landsDetails: {
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

export const reducerName = "dashBoard";

const reducer = (state = initialState, action = {}) =>
  produce(state, draft => {
    switch (action.type) {
      case LOAD:
        draft.landsDetails.loading = true;
        draft.landsDetails.error = false;
        draft.landsDetails.data = null;
        break;

      case LOAD_SUCCESS:
        draft.landsDetails.loading = false;
        draft.landsDetails.error = false;
        draft.landsDetails.data = action.payload;
        break;

      case LOAD_ERROR:
        draft.landsDetails.loading = false;
        draft.landsDetails.error = true;
        draft.landsDetails.data = null;
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
