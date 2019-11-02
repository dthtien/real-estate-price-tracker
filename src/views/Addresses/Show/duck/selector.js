import { createSelector } from "reselect";
import { initialState } from "./reducer";

const selectAddressesShowState = state => state.addressesShow || initialState;

const makeSelectAddressDetail = () =>
  createSelector(
    selectAddressesShowState,
    selectAddressesShowStateState => selectAddressesShowStateState.address
  );

const makeSelectLands = () =>
  createSelector(
    selectAddressesShowState,
    selectAddressesShowStateState => selectAddressesShowStateState.lands
  );

export { makeSelectAddressDetail, makeSelectLands };
