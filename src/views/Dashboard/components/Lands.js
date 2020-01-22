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
import Slider from "@material-ui/core/Slider";
import numeral from "numeral";
import Typography from "@material-ui/core/Typography";
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
  const [priceRange, setPriceRange] = React.useState([0, 0]);
  const [currentPage, setCurrentPage] = useState(0);

  useEffect(() => {
    loadLands({
      address_names: addresses,
      page: currentPage,
      order,
      price_range: priceRange
    });
  }, [currentPage, order, priceRange]);

  const handlePageChange = (_, page) => {
    setCurrentPage(page);
  };

  const handlePriceChange = (_, newValue) => setPriceRange(newValue);

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
      <CardHeader color="info">
        <div className={classes.cardTitle}>
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
        </div>
        <form className={classes.filterForm}>
          <div className={classes.priceSlider}>
            <Slider
              value={priceRange}
              onChange={handlePriceChange}
              valueLabelDisplay="on"
              aria-labelledby="range-slider"
              valueLabelFormat={value => numeral(value).format("0a")}
              max={10 ** 11}
              min={0}
              color="secondary"
            />
            <Typography id="range-slider" gutterBottom>
              {t("Price")}: {numeral(priceRange[0]).format("0,0")} VND &#8594;{" "}
              {numeral(priceRange[1]).format("0,0")} VND
            </Typography>
          </div>
        </form>
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
              <TableCell
                className={`${classes.tableCell} ${classes.tableHeadCell}`}
                onClick={() => setOrder("post_date")}
              >
                <Tooltip title={t("Posted date")}>
                  <p>{truncate(t("Posted date"))}</p>
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
  updatedAt: PropTypes.string,
  loadLands: PropTypes.func.isRequired,
  addresses: PropTypes.array,
  landsCount: PropTypes.number.isRequired
};

export default memo(TopLands);
