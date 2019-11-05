import React from "react";
import AsyncSelect from "react-select/async";
import makeAnimated from "react-select/animated";
import PropTypes from "prop-types";
import { getUnique } from "utils";
import { getAddressNames } from "../duck/api";

const animatedComponents = makeAnimated();

// eslint-disable-next-line arrow-body-style
const loadOptions = inputValue => {
  return getAddressNames({ q: inputValue }).then(response => {
    const suggestions = response.data.map(({ attributes }) => ({
      label: attributes.name,
      value: attributes.alias_name
    }));

    return getUnique(suggestions, "value");
  });
};

const AddressNamesSelector = ({ options, handleSelectChange, className }) => (
  <AsyncSelect
    components={animatedComponents}
    cacheOptions
    loadOptions={loadOptions}
    defaultOptions={options}
    isMulti
    onChange={handleSelectChange}
    defaultValue={options}
    className={className}
  />
);

AddressNamesSelector.propTypes = {
  defaultValue: PropTypes.array,
  options: PropTypes.array,
  handleSelectChange: PropTypes.func.isRequired,
  className: PropTypes.string.isRequired
};

export default AddressNamesSelector;
