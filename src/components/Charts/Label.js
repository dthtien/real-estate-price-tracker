import React, { memo } from "react";
import PropTypes from "prop-types";
import numeral from "numeral";

const CustomizedLabel = ({ x, y, value }) => (
  <text
    x={x}
    y={y}
    dy={-4}
    fill="#6b6b6b"
    fontSize={11}
    textAnchor="right"
    fontWeight="bold"
  >
    {numeral(value).format("0a")}
  </text>
);

CustomizedLabel.propTypes = {
  x: PropTypes.number.isRequired,
  y: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired
};

export default memo(CustomizedLabel);
