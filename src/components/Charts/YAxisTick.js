import React from "react";
import numeral from "numeral";
import PropTypes from "prop-types";

const YAxisTick = ({ x, y, payload }) => (
  <g transform={`translate(${x},${y})`}>
    <text
      x={0}
      y={0}
      dy={16}
      textAnchor="end"
      fill="#666"
      style={{
        textTransform: "capitalize",
        fontWeight: "bold"
      }}
    >
      {numeral(payload.value).format("0a")}
    </text>
  </g>
);

YAxisTick.propTypes = {
  x: PropTypes.number,
  y: PropTypes.number,
  payload: PropTypes.object
};

export default YAxisTick;
