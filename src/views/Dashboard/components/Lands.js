import React, { memo, useEffect, useState } from "react";
import PropTypes from "prop-types";
// import Table from "components/Table/Table.js";
import { makeStyles } from "@material-ui/core/styles";
import TablePagination from "@material-ui/core/TablePagination";
import Table from "@material-ui/core/Table";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import CardBody from "components/Card/CardBody.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import { landStyles as styles } from "../styles";
import Land from "./Land";
import { useOrdering } from "../../hooks";
import Loading from "components/Loading";

const useStyles = makeStyles(styles);

const TopLands = ({
  lands: { data, loading },
  updatedAt,
  loadLands,
  addresses
}) => {
  const classes = useStyles();
  const [order, setOrder] = useOrdering();
  const [currentPage, setCurrentPage] = useState(0);
  useEffect(() => {
    loadLands({ address_names: addresses, page: currentPage, order });
  }, [currentPage, order]);

  const handlePageChange = (_, page) => {
    setCurrentPage(page);
  };

  const renderData = () => {
    if (loading) {
      return (
        <tr>
          <td>
            <Loading type="textRow" />
          </td>
          <td>
            <Loading type="textRow" />
          </td>
          <td>
            <Loading type="textRow" />
          </td>
          <td>
            <Loading type="textRow" />
          </td>
          <td>
            <Loading type="textRow" />
          </td>
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
            <TableRow hover className={classes.clickable}>
              <TableCell
                className={`${classes.tableCell} ${classes.tableHeadCell}`}
                onClick={() => setOrder("total_price")}
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
                onClick={() => setOrder("acreage")}
              >
                m²
              </TableCell>
              <TableCell
                className={`${classes.tableCell} ${classes.tableHeadCell}`}
                onClick={() => setOrder("square_meter_price")}
              >
                Price/m²
              </TableCell>
              <TableCell
                className={`${classes.tableCell} ${classes.tableHeadCell}`}
                onClick={() => setOrder("history_price")}
              >
                Updated times
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>{renderData()}</TableBody>
        </Table>
      </CardBody>
    </Card>
  );
};

TopLands.propTypes = {
  lands: PropTypes.object.isRequired,
  updatedAt: PropTypes.string.isRequired,
  loadLands: PropTypes.func.isRequired,
  addresses: PropTypes.array.isRequired
};

export default memo(TopLands);
