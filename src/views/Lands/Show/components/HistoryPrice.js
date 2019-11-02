import React, { memo } from "react";
import PropTypes from "prop-types";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import numeral from "numeral";

const HistoryPrice = ({ historyPrice, classes }) => {
  return (
    <TableRow className={classes.landDetail}>
      <TableCell className={`${classes.tableCell} ${classes.tableHeadCell}`}>
        {numeral(historyPrice.total_price).format("0,0")} VND
      </TableCell>
      <TableCell className={`${classes.tableCell} ${classes.tableHeadCell}`}>
        {numeral(historyPrice.square_meter_price).format("0,0")} VND/m²
      </TableCell>
      <TableCell className={`${classes.tableCell} ${classes.tableHeadCell}`}>
        {historyPrice.posted_date}
      </TableCell>
    </TableRow>
  );
};

HistoryPrice.propTypes = {
  historyPrice: PropTypes.object.isRequired,
  classes: PropTypes.object.isRequired
};

export default memo(HistoryPrice);
