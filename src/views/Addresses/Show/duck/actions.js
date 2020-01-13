import {
  LOAD,
  LOAD_ERROR,
  LOAD_SUCCESS,
  LOAD_LANDS,
  LOAD_LANDS_SUCCESS,
  LOAD_LANDS_ERROR,
  LOAD_PRICE_LOGGERS,
  LOAD_PRICE_LOGGERS_SUCCESS,
  LOAD_PRICE_LOGGERS_ERROR
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

export const loadLands = payload => ({
  type: LOAD_LANDS,
  payload
});

export const loadLandsSuccess = payload => ({
  type: LOAD_LANDS_SUCCESS,
  payload
});

export const loadLandsError = payload => ({
  type: LOAD_LANDS_ERROR,
  payload
});

export const loadPriceLoggers = payload => ({
  type: LOAD_PRICE_LOGGERS,
  payload
});

export const loadPriceLoggersSuccess = payload => ({
  type: LOAD_PRICE_LOGGERS_SUCCESS,
  payload
});

export const loadPriceLoggersError = payload => ({
  type: LOAD_PRICE_LOGGERS_ERROR,
  payload
});
