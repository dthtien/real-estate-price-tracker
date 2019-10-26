import { LOAD, LOAD_ERROR, LOAD_SUCCESS } from "./types";

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
