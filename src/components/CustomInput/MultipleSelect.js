import React from "react";
import PropTypes from "prop-types";
import Input from "@material-ui/core/Input";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";
import Chip from "@material-ui/core/Chip";

const MultipleSelect = ({
  options,
  classes,
  handleChange,
  value,
  id,
  labelId,
  fullWidth
}) => (
  <Select
    labelId={labelId}
    id={id}
    multiple
    value={value}
    fullWidth={fullWidth}
    onChange={handleChange}
    input={<Input id="select-multiple-chip" />}
    renderValue={selected => (
      <div className={classes.chips}>
        {selected.map(selectedValue => (
          <Chip
            key={selectedValue}
            label={options[selectedValue]}
            className={classes.chip}
          />
        ))}
      </div>
    )}
  >
    {options.map((value, index) => (
      <MenuItem key={index} value={index}>
        {value}
      </MenuItem>
    ))}
  </Select>
);

MultipleSelect.defaultProps = {
  id: "multiple-select",
  labelId: "multiple-select-label",
  fullWidth: true
};

MultipleSelect.propTypes = {
  options: PropTypes.array.isRequired,
  classes: PropTypes.object.isRequired,
  handleChange: PropTypes.func.isRequired,
  value: PropTypes.array.isRequired,
  id: PropTypes.string,
  labelId: PropTypes.string,
  fullWidth: PropTypes.bool
};

export default MultipleSelect;
