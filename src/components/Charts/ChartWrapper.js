import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import {
  XAxis,
  YAxis,
  CartesianGrid,
  CartesianAxis,
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
    height: 300
  }
};

function ChartWrapper(props) {
  const { classes, data, children } = props;

  return (
    <div className={classes.chartFluid}>
      <ResponsiveContainer>
        <ComposedChart width={800} height={300} data={data}>
          <XAxis
            dataKey="name"
            padding={{ right: 5 }}
            interval={0}
            tick={<CustomizedXAxisTick />}
            hide={data.length > 11}
            orientation="bottom"
            axisLine
          />
          <YAxis
            axisLine
            tickSize={4}
            tickLine
            padding={{ top: 100 }}
            tick={<CustomizedYAxisTick />}
          />
          <CartesianGrid vertical={false} strokeDasharray="3 3" />
          <CartesianAxis vertical={false} />
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
