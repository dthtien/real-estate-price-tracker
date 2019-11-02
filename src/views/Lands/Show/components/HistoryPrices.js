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
import { historyPriceStyles as styles } from "../styles";
import HistoryPrice from "./HistoryPrice";

const useStyles = makeStyles(styles);

const HistoryPrices = ({
  loadHistoryPrices,
  params,
  historyPrices: { loading, data },
  updatedAt
}) => {
  const classes = useStyles();
  console.log(classes);
  const [currentPage, setCurrentPage] = useState(0);
  const [priceOrdering, setPriceOrdering] = useState("desc");
  const [postedDateOrdering, setPostedDateOrdering] = useState("desc");
  useEffect(() => {
    handleLoadingHistoryPrices();
  }, [currentPage, priceOrdering, postedDateOrdering]);

  const handlePageChange = (_, page) => {
    setCurrentPage(page);
  };

  const handleOrdering = name => {
    let setStateFunc, ordering;
    if ("priceOrdering" === name) {
      setStateFunc = setPriceOrdering;
      ordering = priceOrdering === "desc" ? "asc" : "desc";
    } else {
      setStateFunc = setPostedDateOrdering;
      ordering = postedDateOrdering === "desc" ? "asc" : "desc";
    }

    setStateFunc(ordering);
  };

  const handleLoadingHistoryPrices = () => {
    loadHistoryPrices({
      ...params,
      page: currentPage,
      posted_date: postedDateOrdering,
      total_price: priceOrdering
    });
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
          {data.history_prices.map(history_price => (
            <HistoryPrice
              historyPrice={history_price}
              key={history_price.id}
              classes={classes}
            />
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
          <CardHeader color="info" className={classes.cardTitle}>
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
            <h4 className={classes.cardTitleWhite}>Price logs</h4>
            <p className={classes.cardCategoryWhite}>Updated at {updatedAt}</p>
          </CardHeader>
          <CardBody className={classes.tableContent}>
            <Table className={classes.tableResponsive}>
              <TableHead className={classes.blueTableHeader}>
                <TableRow hover>
                  <TableCell
                    className={`${classes.tableCell} ${classes.tableHeadCell}`}
                    onClick={() => handleOrdering("priceOrdering")}
                  >
                    Price
                  </TableCell>
                  <TableCell
                    className={`${classes.tableCell} ${classes.tableHeadCell}`}
                    onClick={() => handleOrdering("priceOrdering")}
                  >
                    Price/m²
                  </TableCell>
                  <TableCell
                    className={`${classes.tableCell} ${classes.tableHeadCell}`}
                    onClick={() => handleOrdering("postedDateOrdering")}
                  >
                    Posted date
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

HistoryPrices.propTypes = {
  historyPrices: PropTypes.object.isRequired,
  updatedAt: PropTypes.string.isRequired,
  loadHistoryPrices: PropTypes.func.isRequired,
  params: PropTypes.object.isRequired
};

export default memo(HistoryPrices);
