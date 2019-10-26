import React, { memo } from "react";
import PropTypes from "prop-types";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import numeral from "numeral";

const Land = ({ land, classes }) => {
  return (
    <TableRow>
      <TableCell className={`${classes.tableCell} ${classes.tableHeadCell}`}>
        {numeral(land.total_price).format("0a")} VND
      </TableCell>
      <TableCell className={`${classes.tableCell} ${classes.tableHeadCell}`}>
        {land.title}
      </TableCell>
      <TableCell className={`${classes.tableCell} ${classes.tableHeadCell}`}>
        {land.acreage} m²
      </TableCell>
      <TableCell className={`${classes.tableCell} ${classes.tableHeadCell}`}>
        {numeral(land.square_meter_price).format("0a")} VND/m²
      </TableCell>
    </TableRow>
  );
};

Land.propTypes = {
  land: PropTypes.object.isRequired,
  classes: PropTypes.object.isRequired
};

export default memo(Land);
