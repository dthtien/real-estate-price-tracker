import React, { memo } from "react";
import PropTypes from "prop-types";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import numeral from "numeral";
import { withRouter } from "react-router-dom";
import { capitalize } from "utils";

const Address = ({ address, classes, history }) => {
  return (
    <TableRow
      onClick={() => history.push(`/addresses/${address.slug}`)}
      className={classes.addressDetail}
      hover
    >
      <TableCell className={`${classes.tableCell} ${classes.tableHeadCell}`}>
        {capitalize(address.name)}
      </TableCell>
      <TableCell className={`${classes.tableCell} ${classes.tableHeadCell}`}>
        {numeral(address.price).format("0a")} VND/m²
      </TableCell>
      <TableCell className={`${classes.tableCell} ${classes.tableHeadCell}`}>
        {numeral(address.lands_count).format("0a")}
      </TableCell>
    </TableRow>
  );
};

Address.propTypes = {
  address: PropTypes.object.isRequired,
  classes: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired
};

export default memo(withRouter(Address));
