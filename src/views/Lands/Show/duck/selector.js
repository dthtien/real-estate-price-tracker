import { createSelector } from "reselect";
import { initialState } from "./reducer";

const selectLand = state => state.landDetail || initialState;

const makeSelectLandDetail = () =>
  createSelector(
    selectLand,
    selectLandState => selectLandState.land
  );

const makeSelectHistoryPrices = () =>
  createSelector(
    selectLand,
    selectLandState => selectLandState.historyPrices
  );

const makeSelectUser = () =>
  createSelector(
    selectLand,
    selectLandState => selectLandState.user
  );

export { makeSelectLandDetail, makeSelectHistoryPrices, makeSelectUser };
