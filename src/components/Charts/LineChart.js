import React from "react";
import PropTypes from "prop-types";
import { Line } from "recharts";
import { createMuiTheme } from "@material-ui/core/styles";
import CharWrapper from "./ChartWrapper";
import { yellowCyanTheme } from "utils/themePalette";
import CustomizeLabel from "./Label";
const theme = createMuiTheme(yellowCyanTheme);
const color = {
  main: theme.palette.primary.main,
  secondary: theme.palette.secondary.main
};

const LineChart = props => {
  const { chartKey } = props;

  return (
    <CharWrapper {...props}>
      <Line
        dataKey={chartKey}
        strokeWidth={5}
        stroke={color.main}
        label={<CustomizeLabel />}
      />
    </CharWrapper>
  );
};

LineChart.propTypes = {
  chartKey: PropTypes.string.isRequired
};

export default LineChart;