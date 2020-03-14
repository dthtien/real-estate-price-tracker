import React from "react";
import PropTypes from "prop-types";
// @material-ui/icons
import Store from "@material-ui/icons/Store";
import FileCopy from "@material-ui/icons/FileCopy";
import InfoOutlined from "@material-ui/icons/InfoOutlined";
import Accessibility from "@material-ui/icons/Accessibility";
import numeral from "numeral";
// core components
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardIcon from "components/Card/CardIcon.js";
import { useTranslation } from "react-i18next";

const Header = ({ classes, averagePrice, landsCount, newLandsCount }) => {
  const { t } = useTranslation();
  return (
    <GridContainer>
      <GridItem xs={12} sm={6} md={3}>
        <Card>
          <CardHeader stats icon>
            <CardIcon color="info">
              <FileCopy />
            </CardIcon>
            <p className={classes.cardCategory}>{t("Average Price")} (m²)</p>
            <h3 className={`${classes.cardTitle} ${classes.priceNumber}`}>
              {numeral(averagePrice).format("0,0")} VND
            </h3>
          </CardHeader>
        </Card>
      </GridItem>
      <GridItem xs={12} sm={6} md={3}>
        <Card>
          <CardHeader stats icon>
            <CardIcon color="info">
              <Store />
            </CardIcon>
            <p className={classes.cardCategory}>{t("Total selling lands")}</p>
            <h3 className={`${classes.cardTitle} ${classes.priceNumber}`}>
              {numeral(landsCount).format("0,0")}
            </h3>
          </CardHeader>
        </Card>
      </GridItem>
      <GridItem xs={12} sm={6} md={3}>
        <Card>
          <CardHeader stats icon>
            <CardIcon color="info">
              <InfoOutlined />
            </CardIcon>
            <p className={classes.cardCategory}>{t("New lands")}</p>
            <h3 className={`${classes.cardTitle} ${classes.priceNumber}`}>
              {newLandsCount}
            </h3>
          </CardHeader>
        </Card>
      </GridItem>
      <GridItem xs={12} sm={6} md={3}>
        <Card>
          <CardHeader stats icon>
            <CardIcon color="info">
              <Accessibility />
            </CardIcon>
            <p className={classes.cardCategory}>{t("Followers")}</p>
            <h3 className={`${classes.cardTitle} ${classes.priceNumber}`}>
              +245
            </h3>
          </CardHeader>
        </Card>
      </GridItem>
    </GridContainer>
  );
};

Header.propTypes = {
  classes: PropTypes.object.isRequired,
  averagePrice: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  landsCount: PropTypes.number.isRequired,
  newLandsCount: PropTypes.number.isRequired,
  updatedAt: PropTypes.string.isRequired
};

export default Header;
