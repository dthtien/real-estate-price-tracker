import React, { memo } from "react";
import PropTypes from "prop-types";
import GridContainer from "components/Grid/GridContainer.js";
// import Table from "components/Table/Table.js";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import GridItem from "components/Grid/GridItem.js";
import CardBody from "components/Card/CardBody.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import styles from "assets/jss/material-dashboard-react/components/tableStyle.js";
import Land from "./Land";

const useStyles = makeStyles(styles);

const TopLands = ({ lands, updatedAt }) => {
  const classes = useStyles();
  return (
    <GridContainer>
      <GridItem xs={12} sm={12} md={12}>
        <Card>
          <CardHeader color="warning">
            <h4 className={classes.cardTitleWhite}>Latest selling lands</h4>
            <p className={classes.cardCategoryWhite}>Updated at {updatedAt}</p>
          </CardHeader>
          <CardBody>
            <Table className={classes.tableResponsive}>
              <TableHead className={classes.blueTableHeader}>
                <TableRow>
                  <TableCell
                    className={`${classes.tableCell} ${classes.tableHeadCell}`}
                  >
                    Price
                  </TableCell>
                  <TableCell
                    className={`${classes.tableCell} ${classes.tableHeadCell}`}
                  >
                    Address
                  </TableCell>
                  <TableCell
                    className={`${classes.tableCell} ${classes.tableHeadCell}`}
                  >
                    m²
                  </TableCell>
                  <TableCell
                    className={`${classes.tableCell} ${classes.tableHeadCell}`}
                  >
                    Price/m²
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {lands.map(({ id, attributes }) => (
                  <Land land={attributes} key={id} classes={classes} />
                ))}
              </TableBody>
            </Table>
          </CardBody>
        </Card>
      </GridItem>
    </GridContainer>
  );
};

TopLands.propTypes = {
  lands: PropTypes.array.isRequired,
  updatedAt: PropTypes.string.isRequired
};

export default memo(TopLands);
