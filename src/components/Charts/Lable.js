import React, { memo } from "react";
import PropTypes from "prop-types";
import numeral from "numeral";

const CustomizedLabel = ({ x, y, stroke, value }) => (
  <text
    x={x}
    y={y}
    dy={-4}
    fill={stroke}
    fontSize={11}
    textAnchor="middle"
    fontWeight="bold"
  >
    {numeral(value).format("0a")}
  </text>
);

CustomizedLabel.propTypes = {
  x: PropTypes.number.isRequired,
  y: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
  stroke: PropTypes.string
};

export default memo(CustomizedLabel);
