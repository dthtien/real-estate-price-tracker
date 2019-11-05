import React, { memo } from "react";
import PropTypes from "prop-types";
// import Table from "components/Table/Table.js";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import CardBody from "components/Card/CardBody.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import { landStyles as styles } from "../styles";
import Address from "./Address";

const useStyles = makeStyles(styles);

const TopLands = ({ updatedAt, addresses }) => {
  const classes = useStyles();

  return (
    <Card>
      <CardHeader color="info" className={classes.cardTitle}>
        <h4 className={classes.cardTitleWhite}>Addresses</h4>
        <p className={classes.cardCategoryWhite}>Updated at {updatedAt}</p>
      </CardHeader>
      <CardBody className={classes.tableContent}>
        <Table className={classes.tableResponsive}>
          <TableHead className={classes.blueTableHeader}>
            <TableRow>
              <TableCell
                className={`${classes.tableCell} ${classes.tableHeadCell}`}
              >
                Name
              </TableCell>
              <TableCell
                className={`${classes.tableCell} ${classes.tableHeadCell}`}
              >
                Price
              </TableCell>
              <TableCell
                className={`${classes.tableCell} ${classes.tableHeadCell}`}
              >
                Selling lands
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {addresses.map(({ id, attributes }) => (
              <Address address={attributes} key={id} classes={classes} />
            ))}
          </TableBody>
        </Table>
      </CardBody>
    </Card>
  );
};

TopLands.propTypes = {
  updatedAt: PropTypes.string.isRequired,
  addresses: PropTypes.array.isRequired
};

export default memo(TopLands);
