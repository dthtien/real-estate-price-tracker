import {
  LOAD,
  LOAD_ERROR,
  LOAD_SUCCESS,
  LOAD_HISTORY_PRICES,
  LOAD_HISTORY_PRICES_SUCCESS,
  LOAD_HISTORY_PRICES_ERROR
} from "./types";

export const load = payload => ({
  type: LOAD,
  payload
});

export const loadSuccess = payload => ({
  type: LOAD_SUCCESS,
  payload
});

export const loadError = payload => ({
  type: LOAD_ERROR,
  payload
});

export const loadHistoryPrices = payload => ({
  type: LOAD_HISTORY_PRICES,
  payload
});

export const loadHistoryPricesSuccess = payload => ({
  type: LOAD_HISTORY_PRICES_SUCCESS,
  payload
});

export const loadHistoryPricesError = payload => ({
  type: LOAD_HISTORY_PRICES_ERROR,
  payload
});
