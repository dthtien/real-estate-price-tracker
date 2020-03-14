import React from "react";
import PropTypes from "prop-types";
import { Line } from "recharts";
import { createMuiTheme } from "@material-ui/core/styles";
import CharWrapper from "./ChartWrapper";
import { yellowBlueTheme } from "utils/themePalette";
const theme = createMuiTheme(yellowBlueTheme);
const color = {
  land_only_price: theme.palette.primary.main,
  apartment_price: theme.palette.secondary.dark,
  house_price: theme.palette.primary.dark,
  farm_price: theme.palette.secondary.main
};

const LineChart = props => {
  const { chartKeys } = props;

  return (
    <CharWrapper {...props}>
      {chartKeys.map(chartKey => (
        <Line
          key={chartKey}
          dataKey={chartKey}
          strokeWidth={5}
          stroke={color[chartKey]}
        />
      ))}
    </CharWrapper>
  );
};

LineChart.propTypes = {
  chartKeys: PropTypes.array.isRequired
};

export default LineChart;
