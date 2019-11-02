import React from "react";
import PropTypes from "prop-types";

const XAxisTick = ({ x, y, payload }) => (
  <g
    transform={`translate(${x},${y})`}
    style={{
      textAlign: "center",
      fontWeight: "bold"
    }}
  >
    <text
      x={0}
      y={0}
      dy={5}
      textAnchor="end"
      fill="#666"
      style={{ textTransform: "capitalize", fontSize: 10 }}
      transform="rotate(-10)"
    >
      {payload.value.length > 20 ? "" : payload.value}
    </text>
  </g>
);

XAxisTick.propTypes = {
  x: PropTypes.number,
  y: PropTypes.number,
  payload: PropTypes.object
};

export default XAxisTick;
