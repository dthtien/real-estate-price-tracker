import { createSelector } from "reselect";
import { initialState } from "./reducer";

const selectDashBoard = state => state.landDetail || initialState;

const makeSelectLandDetail = () =>
  createSelector(
    selectDashBoard,
    selectDashBoardState => selectDashBoardState.land
  );

const makeSelectHistoryPrices = () =>
  createSelector(
    selectDashBoard,
    selectDashBoardState => selectDashBoardState.historyPrices
  );

export { makeSelectLandDetail, makeSelectHistoryPrices };
