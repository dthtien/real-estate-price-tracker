import React from "react";
import PropTypes from "prop-types";
import SearchIcon from "@material-ui/icons/SearchRounded";
import AddressNameSelector from "./AddressNameSelector";
import { Button } from "@material-ui/core";

const SearchForm = ({ handleAddressesInputChange, classes, onSubmit }) => {
  return (
    <form className={classes.searchForm} onSubmit={onSubmit}>
      <AddressNameSelector
        handleSelectChange={handleAddressesInputChange}
        className={classes.addressInput}
      />
      <Button variant="outlined" className={classes.searchButton} type="submit">
        <SearchIcon />
      </Button>
    </form>
  );
};

SearchForm.propTypes = {
  handleAddressesInputChange: PropTypes.func.isRequired,
  classes: PropTypes.object.isRequired,
  onSubmit: PropTypes.func.isRequired
};

export default SearchForm;
