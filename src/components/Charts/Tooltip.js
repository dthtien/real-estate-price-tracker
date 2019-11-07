import React from "react";
import PropTypes from "prop-types";
import numeral from "numeral";

const Tooltip = ({ active, payload, label }) => {
  if (active && payload && payload[0]) {
    const { value, dataKey } = payload[0];
    return (
      <div
        style={{
          backgroundColor: "white",
          padding: 10,
          border: "1px solid gray",
          color: "black"
        }}
      >
        <p style={{ textTransform: "capitalize" }}>{label}</p>
        <p className="label">
          {numeral(value).format("0,0")}{" "}
          {dataKey.includes("count") ? "lands" : "VND/m²"}
        </p>
      </div>
    );
  }

  return null;
};

Tooltip.propTypes = {
  active: PropTypes.bool,
  label: PropTypes.string,
  payload: PropTypes.array
};

export default Tooltip;
