import React, { memo } from "react";
import PropTypes from "prop-types";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import numeral from "numeral";
import { Link } from "react-router-dom";
import { titleize } from "utils";

const Address = ({ address, classes }) => {
  return (
    <TableRow className={classes.addressDetail} hover>
      <TableCell className={`${classes.tableCell} ${classes.tableHeadCell}`}>
        <Link className={classes.link} to={`/app/addresses/${address.slug}`}>
          {titleize(address.name)}
        </Link>
      </TableCell>
      <TableCell className={`${classes.tableCell} ${classes.tableHeadCell}`}>
        {numeral(address.price).format("0a")} VND/m²
      </TableCell>
      <TableCell className={`${classes.tableCell} ${classes.tableHeadCell}`}>
        {numeral(address.lands_count).format("0,0")}
      </TableCell>
    </TableRow>
  );
};

Address.propTypes = {
  address: PropTypes.object.isRequired,
  classes: PropTypes.object.isRequired
};

export default memo(Address);
