import React, { memo, useEffect, useState } from "react";
import PropTypes from "prop-types";
import { useTranslation } from "react-i18next";
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
import Loading from "components/Loading";

const useStyles = makeStyles(styles);

const HistoryPrices = ({
  loadHistoryPrices,
  params,
  historyPrices: { loading, data },
  updatedAt
}) => {
  const classes = useStyles();
  const { t } = useTranslation();
  const [currentPage, setCurrentPage] = useState(0);
  const [priceOrdering, setPriceOrdering] = useState("desc");
  const [postedDateOrdering, setPostedDateOrdering] = useState("desc");
  useEffect(() => {
    loadHistoryPrices({
      ...params,
      page: currentPage,
      posted_date: postedDateOrdering,
      total_price: priceOrdering
    });
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

  const renderData = () => {
    if (loading) {
      return (
        <tr>
          <td>
            <Loading />
          </td>
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
        <td>
          <Loading />
        </td>
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
            <h4 className={classes.cardTitleWhite}>{t("Price logs")}</h4>
            <p className={classes.cardCategoryWhite}>
              {t("Updated at")} {updatedAt}
            </p>
          </CardHeader>
          <CardBody className={classes.tableContent}>
            <Table className={classes.tableResponsive}>
              <TableHead className={classes.blueTableHeader}>
                <TableRow hover>
                  <TableCell
                    className={`${classes.tableCell} ${classes.tableHeadCell}`}
                    onClick={() => handleOrdering("priceOrdering")}
                  >
                    {t("Price")}
                  </TableCell>
                  <TableCell
                    className={`${classes.tableCell} ${classes.tableHeadCell}`}
                    onClick={() => handleOrdering("priceOrdering")}
                  >
                    {t("Price")}/m²
                  </TableCell>
                  <TableCell
                    className={`${classes.tableCell} ${classes.tableHeadCell}`}
                    onClick={() => handleOrdering("postedDateOrdering")}
                  >
                    {t("Updated at")}
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
