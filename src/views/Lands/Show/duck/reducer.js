import produce from "immer";
import {
  LOAD,
  LOAD_SUCCESS,
  LOAD_ERROR,
  LOAD_HISTORY_PRICES,
  LOAD_HISTORY_PRICES_SUCCESS,
  LOAD_HISTORY_PRICES_ERROR
} from "./types";

export const initialState = {
  land: {
    loading: false,
    error: false,
    data: null
  },
  historyPrices: {
    loading: false,
    error: false,
    data: null
  }
};

export const reducerName = "landDetail";

const reducer = (state = initialState, action = {}) =>
  produce(state, draft => {
    switch (action.type) {
      case LOAD:
        draft.land.loading = true;
        draft.land.error = false;
        draft.land.data = null;
        break;

      case LOAD_SUCCESS:
        draft.land.loading = false;
        draft.land.error = false;
        draft.land.data = action.payload;
        break;

      case LOAD_ERROR:
        draft.land.loading = false;
        draft.land.error = true;
        draft.land.data = null;
        break;

      case LOAD_HISTORY_PRICES:
        draft.historyPrices.loading = true;
        draft.historyPrices.error = false;
        draft.historyPrices.data = null;
        break;

      case LOAD_HISTORY_PRICES_SUCCESS:
        draft.historyPrices.loading = false;
        draft.historyPrices.error = false;
        draft.historyPrices.data = action.payload;
        break;

      case LOAD_HISTORY_PRICES_ERROR:
        draft.historyPrices.loading = false;
        draft.historyPrices.error = true;
        draft.historyPrices.data = null;
        break;
    }
  });

export default reducer;
