import {
  LOAD,
  LOAD_ERROR,
  LOAD_SUCCESS,
  LOAD_LANDS,
  LOAD_LANDS_SUCCESS,
  LOAD_LANDS_ERROR
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
