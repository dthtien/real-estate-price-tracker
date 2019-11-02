import React, { memo, useEffect, useState } from "react";
import PropTypes from "prop-types";
import GridContainer from "components/Grid/GridContainer.js";
// import Table from "components/Table/Table.js";
import { makeStyles } from "@material-ui/core/styles";
import TablePagination from "@material-ui/core/TablePagination";
import Table from "@material-ui/core/Table";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import GridItem from "components/Grid/GridItem.js";
import CardBody from "components/Card/CardBody.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import { landStyles as styles } from "../styles";
import Land from "./Land";

const useStyles = makeStyles(styles);

const TopLands = ({
  lands: { data, loading },
  updatedAt,
  loadLands,
  addresses
}) => {
  const classes = useStyles();
  useEffect(() => {
    loadLands({ address_names: addresses });
  }, []);

  const [currentPage, setCurrentPage] = useState(0);

  const handlePageChange = (_, page) => {
    setCurrentPage(page);
    loadLands({ address_names: addresses, page });
  };

  const renderData = () => {
    if (loading) {
      return (
        <tr>
          <td>Loading</td>
        </tr>
      );
    }

    if (data) {
      return (
        <>
          {data.lands.map(({ id, attributes }) => (
            <Land land={attributes} key={id} classes={classes} />
          ))}
        </>
      );
    }

    return (
      <tr>
        <td>Loading</td>
      </tr>
    );
  };

  return (
    <GridContainer>
      <GridItem xs={12} sm={12} md={12}>
        <Card>
          <CardHeader color="warning" className={classes.cardTitle}>
            {data && (
              <TablePagination
                count={data.total_count}
                rowsPerPage={25}
                page={currentPage}
                onChangePage={handlePageChange}
                rowsPerPageOptions={[]}
                component="div"
              />
            )}
            <h4 className={classes.cardTitleWhite}>Latest selling lands</h4>
            <p className={classes.cardCategoryWhite}>Updated at {updatedAt}</p>
          </CardHeader>
          <CardBody className={classes.tableContent}>
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
                  <TableCell
                    className={`${classes.tableCell} ${classes.tableHeadCell}`}
                  >
                    Updated times
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>{renderData()}</TableBody>
            </Table>
          </CardBody>
        </Card>
      </GridItem>
    </GridContainer>
  );
};

TopLands.propTypes = {
  lands: PropTypes.object.isRequired,
  updatedAt: PropTypes.string.isRequired,
  loadLands: PropTypes.func.isRequired,
  addresses: PropTypes.array.isRequired
};

export default memo(TopLands);
