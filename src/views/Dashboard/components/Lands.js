import React, { memo, useEffect, useState } from "react";
import PropTypes from "prop-types";
// import Table from "components/Table/Table.js";
import { makeStyles } from "@material-ui/core/styles";
import TablePagination from "@material-ui/core/TablePagination";
import Table from "@material-ui/core/Table";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TextField from "@material-ui/core/TextField";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import CardBody from "components/Card/CardBody.js";
import { useTranslation } from "react-i18next";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import Tooltip from "@material-ui/core/Tooltip";
import { withRouter } from "react-router-dom";
import qs from "query-string";

import { landStyles as styles } from "../styles";
import Land from "./Land";
import { useOrdering } from "../../hooks";
import Loading from "components/Loading";
import { truncate, toQueryString } from "utils";
import Filter from "./Filter";
import { useClassification, useRange } from "../duck/hook";

const useStyles = makeStyles(styles);

const TopLands = ({
  lands: { data, loading },
  loadLands,
  addresses,
  history,
  location: { search }
}) => {
  const searchingParams = qs.parse(search);
  const defaultRange = [0, 0];
  const classes = useStyles();
  const { t } = useTranslation();
  const [order, setOrder] = useOrdering();
  const [priceRange, setPriceRange] = useRange(
    searchingParams.price_range || defaultRange
  );
  const [acreageRange, setAcreageRange] = useRange(
    searchingParams.acreage_range || defaultRange
  );
  const [fontLengthRange, setFrontLengthRange] = useRange(
    searchingParams.front_length_range || defaultRange
  );
  const [classifications, setClassifications] = useClassification(
    searchingParams
  );
  let initialKeyword = searchingParams.keyword;
  if (initialKeyword && initialKeyword.includes('"')) {
    initialKeyword = JSON.parse(initialKeyword);
  }

  const [keyword, setKeyword] = useState(initialKeyword || "");
  const [currentPage, setCurrentPage] = useState(
    Number(searchingParams.page || 0)
  );
  const parsingParams = (condition = {}) => ({
    address_names: addresses,
    page: currentPage,
    order,
    price_range: priceRange,
    acreage_range: acreageRange,
    front_length_range: fontLengthRange,
    keyword,
    ...condition
  });

  const today = new Date();

  useEffect(() => {
    let params = parsingParams();

    if (classifications.length > 0) {
      params = {
        ...params,
        classifications
      };
    }

    loadLands(params);
  }, [
    currentPage,
    order,
    priceRange,
    acreageRange,
    fontLengthRange,
    classifications,
    keyword
  ]);

  const handleConditionChange = condition => {
    const pathname = window.location.pathname;
    if (pathname.includes("dashboard")) return;

    const queryString = toQueryString(parsingParams(condition));
    history.push({
      pathname: window.location.pathname,
      search: queryString
    });
  };

  const handlePageChange = (_, page) => {
    const newPage = Number(page);
    setCurrentPage(newPage);
    handleConditionChange({ page: newPage });
  };

  const handlePriceChange = (_, newValue) => {
    setPriceRange(newValue);
    handleConditionChange({ price_range: newValue });
  };

  const handleAcreageChange = (_, newValue) => {
    setAcreageRange(newValue);
    handleConditionChange({ acreage_range: newValue });
  };

  const handleKeywordChange = e => {
    const value = e.target.value;
    setKeyword(value);
    handleConditionChange({ keyword: value });
  };

  const handleFrontLengthChange = (_, newValue) => {
    setFrontLengthRange(newValue);
    handleConditionChange({ front_length_range: newValue });
  };

  const handleClassificationsChange = event => {
    const value = event.target.value;
    setClassifications(value);
    handleConditionChange({ classifications: value });
  };

  const renderData = () => {
    if (loading) {
      return (
        <tr>
          <td key={1}>
            <Loading type="textRow" />
          </td>
          <td key={2}>
            <Loading type="textRow" />
          </td>
          <td key={3}>
            <Loading type="textRow" />
          </td>
          <td key={4}>
            <Loading type="textRow" />
          </td>
          <td key={5}>
            <Loading type="textRow" />
          </td>
          <td key={6}>
            <Loading type="textRow" />
          </td>
          <td key={7}>
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
              count={data.lands_count}
              rowsPerPage={25}
              page={currentPage}
              onChangePage={handlePageChange}
              rowsPerPageOptions={[]}
              component="div"
            />
          )}
          <TextField
            name="keyword"
            label={t("Keyword")}
            variant="outlined"
            value={keyword}
            className={classes.searchInput}
            onChange={handleKeywordChange}
          />
          <h4 className={classes.cardTitleWhite}>{t("Lands")}</h4>
          <p className={classes.cardCategoryWhite}>
            {t("Updated at")} {today.toDateString()}
          </p>
        </div>
        <Filter
          classes={classes}
          priceRange={priceRange}
          handlePriceChange={handlePriceChange}
          acreageRange={acreageRange}
          handleAcreageChange={handleAcreageChange}
          fontLengthRange={fontLengthRange}
          handleFrontLengthChange={handleFrontLengthChange}
          classifications={classifications}
          handleClassificationsChange={handleClassificationsChange}
        />
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
              <TableCell
                className={`${classes.tableCell} ${classes.tableHeadCell}`}
                onClick={() => setOrder("classification")}
              >
                <Tooltip title={t("Classification")}>
                  <p>{truncate(t("Classification"))}</p>
                </Tooltip>
              </TableCell>
              <TableCell
                className={`${classes.tableCell} ${classes.tableHeadCell}`}
                onClick={() => setOrder("front_length")}
              >
                <Tooltip title={t("Front length")}>
                  <p>{truncate(t("Front length"))}</p>
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
  history: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired,
  loadLands: PropTypes.func.isRequired,
  addresses: PropTypes.array
};

export default memo(withRouter(TopLands));
