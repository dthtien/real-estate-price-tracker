import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import {
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  ComposedChart
} from "recharts";
import CustomTooltip from "./Tooltip";
import CustomizedXAxisTick from "./XAxisTick";
import CustomizedYAxisTick from "./YAxisTick";

const styles = {
  chartFluid: {
    width: "100%",
    minWidth: 500,
    height: "60vh"
  }
};

function ChartWrapper(props) {
  const { classes, data, children } = props;

  return (
    <div className={classes.chartFluid}>
      <ResponsiveContainer>
        <ComposedChart data={data}>
          <XAxis
            dataKey="name"
            tick={<CustomizedXAxisTick />}
            hide={data.length > 11}
            interval={0}
            axisLine
          />
          <YAxis
            axisLine
            tickLine
            tickSize={4}
            tick={<CustomizedYAxisTick />}
          />
          <CartesianGrid stroke="#eee" strokeDasharray="3 3" />
          <Tooltip content={<CustomTooltip />} />
          {children}
        </ComposedChart>
      </ResponsiveContainer>
    </div>
  );
}

ChartWrapper.propTypes = {
  classes: PropTypes.object.isRequired,
  data: PropTypes.array.isRequired,
  handleOnClickChart: PropTypes.func.isRequired,
  chartKey: PropTypes.string.isRequired,
  children: PropTypes.element.isRequired
};

ChartWrapper.defaultProps = {
  handleOnClickChart: () => {}
};

const withStyle = withStyles(styles);

export default withStyle(ChartWrapper);
