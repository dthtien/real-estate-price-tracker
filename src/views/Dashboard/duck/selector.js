import { createSelector } from "reselect";
import { initialState } from "./reducer";

const selectDashBoard = state => state.dashBoard || initialState;

const makeSelectLandDetails = () =>
  createSelector(
    selectDashBoard,
    selectDashBoardState => selectDashBoardState.landsDetails
  );

const makeSelectLands = () =>
  createSelector(
    selectDashBoard,
    selectDashBoardState => selectDashBoardState.lands
  );

export { makeSelectLandDetails, makeSelectLands };
