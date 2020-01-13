import React, { memo } from "react";
import PropTypes from "prop-types";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import numeral from "numeral";
import { withRouter } from "react-router-dom";
import { capitalize } from "utils";

const Land = ({ land, classes, history }) => {
  return (
    <TableRow
      onClick={() => history.push(`/app/lands/${land.slug}`)}
      className={classes.landDetail}
      hover
    >
      <TableCell className={`${classes.tableCell} ${classes.tableHeadCell}`}>
        {numeral(land.total_price).format("0a")} VND
      </TableCell>
      <TableCell className={`${classes.tableCell} ${classes.tableHeadCell}`}>
        {capitalize(land.title)}
      </TableCell>
      <TableCell className={`${classes.tableCell} ${classes.tableHeadCell}`}>
        {land.acreage} m²
      </TableCell>
      <TableCell className={`${classes.tableCell} ${classes.tableHeadCell}`}>
        {numeral(land.square_meter_price).format("0a")} VND/m²
      </TableCell>
      <TableCell className={`${classes.tableCell} ${classes.tableHeadCell}`}>
        {land.change_times}
      </TableCell>
      <TableCell className={`${classes.tableCell} ${classes.tableHeadCell}`}>
        {land.post_date}
      </TableCell>
    </TableRow>
  );
};

Land.propTypes = {
  land: PropTypes.object.isRequired,
  classes: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired
};

export default memo(withRouter(Land));
