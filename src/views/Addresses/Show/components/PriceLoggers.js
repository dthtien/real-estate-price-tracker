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
import { useTranslation } from "react-i18next";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import { landStyles as styles } from "views/Dashboard/styles";
import PriceLogger from "./PriceLogger";
import { useOrdering } from "views/hooks";
import Loading from "components/Loading";

const useStyles = makeStyles(styles);

const PriceLoggers = ({
  loadPriceLoggers,
  priceLoggers: { data, loading },
  addressId
}) => {
  const classes = useStyles();
  const { t } = useTranslation();
  const [order, setOrder] = useOrdering();
  const [currentPage, setCurrentPage] = useState(0);
  useEffect(() => {
    loadPriceLoggers({ id: addressId, page: currentPage, order });
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
      const {
        price_loggers: { data: price_loggers }
      } = data;
      return (
        <>
          {price_loggers.map(({ id, attributes }) => (
            <PriceLogger priceLogger={attributes} key={id} classes={classes} />
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
    <Card>
      <CardHeader color="warning" className={classes.cardTitle}>
        {data && (
          <TablePagination
            count={data.count}
            rowsPerPage={25}
            page={currentPage}
            onChangePage={handlePageChange}
            rowsPerPageOptions={[]}
            component="div"
          />
        )}
        <h4 className={classes.cardTitleWhite}>{t("History Price")}</h4>
      </CardHeader>
      <CardBody className={classes.tableContent}>
        <Table className={classes.tableResponsive}>
          <TableHead className={classes.blueTableHeader}>
            <TableRow hover className={classes.clickable}>
              <TableCell
                className={`${classes.tableCell} ${classes.tableHeadCell}`}
                onClick={() => setOrder("total_price")}
              >
                {t("Price")}
              </TableCell>
              <TableCell
                className={`${classes.tableCell} ${classes.tableHeadCell}`}
              >
                {t("Total selling lands")}
              </TableCell>
              <TableCell
                className={`${classes.tableCell} ${classes.tableHeadCell}`}
              >
                {t("Logging date")}
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>{renderData()}</TableBody>
        </Table>
      </CardBody>
    </Card>
  );
};

PriceLoggers.propTypes = {
  loadPriceLoggers: PropTypes.func.isRequired,
  priceLoggers: PropTypes.object,
  addressId: PropTypes.string.isRequired
};

export default memo(PriceLoggers);
