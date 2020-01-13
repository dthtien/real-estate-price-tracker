import React, { memo } from "react";
import PropTypes from "prop-types";
// import Table from "components/Table/Table.js";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import { useTranslation } from "react-i18next";
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

const Addresses = ({ updatedAt, addresses, ordering }) => {
  const classes = useStyles();
  const { t } = useTranslation();

  return (
    <Card>
      <CardHeader color="info" className={classes.cardTitle}>
        <h4 className={classes.cardTitleWhite}>{t("Addresses")}</h4>
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
                onClick={() => {
                  ordering("name");
                }}
              >
                {t("Name")}
              </TableCell>
              <TableCell
                className={`${classes.tableCell} ${classes.tableHeadCell}`}
                onClick={() => {
                  ordering("avg_square_meter_price");
                }}
              >
                {t("Price")}
              </TableCell>
              <TableCell
                className={`${classes.tableCell} ${classes.tableHeadCell}`}
                onClick={() => {
                  ordering("lands_count");
                }}
              >
                {t("Selling lands")}
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

Addresses.defaultPropTypes = {
  ordering: () => {}
};

Addresses.propTypes = {
  updatedAt: PropTypes.string,
  addresses: PropTypes.array.isRequired,
  ordering: PropTypes.func
};

export default memo(Addresses);
