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
import Tooltip from "@material-ui/core/Tooltip";
import { landStyles as styles } from "../styles";
import Land from "./Land";
import { useOrdering } from "../../hooks";
import Loading from "components/Loading";
import { truncate } from "utils";

const useStyles = makeStyles(styles);

const TopLands = ({
  lands: { data, loading },
  updatedAt,
  loadLands,
  addresses,
  landsCount
}) => {
  const classes = useStyles();
  const { t } = useTranslation();
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
            count={landsCount}
            rowsPerPage={25}
            page={currentPage}
            onChangePage={handlePageChange}
            rowsPerPageOptions={[]}
            component="div"
          />
        )}
        <h4 className={classes.cardTitleWhite}>{t("Lands")}</h4>
        <p className={classes.cardCategoryWhite}>
          {t("Updated at")} {updatedAt}
        </p>
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
                {t("Description")}
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
                {t("Price")} (m²)
              </TableCell>
              <TableCell
                className={`${classes.tableCell} ${classes.tableHeadCell}`}
                onClick={() => setOrder("history_prices_count")}
              >
                <Tooltip title={t("Change times")}>
                  <p>{truncate(t("Change times"))}</p>
                </Tooltip>
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
  addresses: PropTypes.array,
  landsCount: PropTypes.number.isRequired
};

export default memo(TopLands);
