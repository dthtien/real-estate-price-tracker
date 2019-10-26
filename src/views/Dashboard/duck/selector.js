import { createSelector } from "reselect";
import { initialState } from "./reducer";

const selectDashBoard = state => state.dashBoard || initialState;

const makeSelectLandDetails = () =>
  createSelector(
    selectDashBoard,
    selectDashBoardState => selectDashBoardState.landsDetails
  );
export { makeSelectLandDetails };
