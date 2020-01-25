import React, { memo } from "react";
import PropTypes from "prop-types";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import numeral from "numeral";
import { Link } from "react-router-dom";
import { capitalize } from "utils";

const Land = ({ land, classes }) => {
  return (
    <TableRow className={classes.landDetail} hover>
      <TableCell className={`${classes.tableCell} ${classes.tableHeadCell}`}>
        {numeral(land.total_price).format("0a")} VND
      </TableCell>
      <TableCell className={`${classes.tableCell} ${classes.tableHeadCell}`}>
        <Link className={classes.link} to={`/app/lands/${land.slug}`}>
          {capitalize(land.title)}
        </Link>
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
      <TableCell className={`${classes.tableCell} ${classes.tableHeadCell}`}>
        {land.classification}
      </TableCell>
      <TableCell className={`${classes.tableCell} ${classes.tableHeadCell}`}>
        {land.front_length !== null &&
          land.front_length !== 0 &&
          `${land.front_length} m`}
      </TableCell>
    </TableRow>
  );
};

Land.propTypes = {
  land: PropTypes.object.isRequired,
  classes: PropTypes.object.isRequired
};

export default memo(Land);
