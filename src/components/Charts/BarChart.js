import React from "react";
import PropTypes from "prop-types";
import { Bar } from "recharts";
import { createMuiTheme } from "@material-ui/core/styles";
import CharWrapper from "./ChartWrapper";
import { yellowCyanTheme } from "utils/themePalette";
import blue from "@material-ui/core/colors/blue";
const theme = createMuiTheme(yellowCyanTheme);
const color = {
  main: theme.palette.primary.main,
  secondary: theme.palette.secondary.main,
  third: blue[500]
};

const BarChart = props => {
  const { chartKey } = props;

  return (
    <CharWrapper {...props}>
      <Bar
        dataKey={chartKey}
        strokeWidth={1}
        fill={color.secondary}
        stroke={color.main}
      />
    </CharWrapper>
  );
};

BarChart.propTypes = {
  chartKey: PropTypes.string.isRequired
};

export default BarChart;
