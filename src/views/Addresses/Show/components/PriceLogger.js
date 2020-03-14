import React, { memo } from "react";
import PropTypes from "prop-types";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import numeral from "numeral";

const PriceLogger = ({ priceLogger, classes }) => {
  return (
    <TableRow className={classes.landDetail} hover>
      <TableCell className={`${classes.tableCell} ${classes.tableHeadCell}`}>
        {priceLogger.created_at}
      </TableCell>
      <TableCell className={`${classes.tableCell} ${classes.tableHeadCell}`}>
        {numeral(priceLogger.price).format("0,0")} VND
      </TableCell>
      <TableCell className={`${classes.tableCell} ${classes.tableHeadCell}`}>
        {numeral(priceLogger.lands_count).format("0,0")}
      </TableCell>
    </TableRow>
  );
};

PriceLogger.propTypes = {
  priceLogger: PropTypes.object.isRequired,
  classes: PropTypes.object.isRequired
};

export default memo(PriceLogger);
