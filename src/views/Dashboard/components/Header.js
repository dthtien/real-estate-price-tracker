import React from "react";
import PropTypes from "prop-types";
// @material-ui/icons
import numeral from "numeral";
// core components
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import { useTranslation } from "react-i18next";

const Header = ({ classes, attrs }) => {
  const { t } = useTranslation();
  return (
    <GridContainer>
      <GridItem xs={12} sm={6} md={2}>
        <Card>
          <CardHeader stats>
            <p className={classes.cardCategory}>{t("land_only_price")}</p>
            <h3 className={`${classes.cardTitle} ${classes.priceNumber}`}>
              {numeral(attrs.land_only_price).format("0,0")} VND
            </h3>
          </CardHeader>
        </Card>
      </GridItem>
      <GridItem xs={12} sm={6} md={2}>
        <Card>
          <CardHeader stats>
            <p className={classes.cardCategory}>{t("apartment_price")} (m²)</p>
            <h3 className={`${classes.cardTitle} ${classes.priceNumber}`}>
              {numeral(attrs.apartment_price).format("0,0")} VND
            </h3>
          </CardHeader>
        </Card>
      </GridItem>
      <GridItem xs={12} sm={6} md={2}>
        <Card>
          <CardHeader stats>
            <p className={classes.cardCategory}>{t("house_price")} (m²)</p>
            <h3 className={`${classes.cardTitle} ${classes.priceNumber}`}>
              {numeral(attrs.house_price).format("0,0")} VND
            </h3>
          </CardHeader>
        </Card>
      </GridItem>
      <GridItem xs={12} sm={6} md={2}>
        <Card>
          <CardHeader stats>
            <p className={classes.cardCategory}>{t("farm_price")} (m²)</p>
            <h3 className={`${classes.cardTitle} ${classes.priceNumber}`}>
              {numeral(attrs.farm_price).format("0,0")} VND
            </h3>
          </CardHeader>
        </Card>
      </GridItem>
      <GridItem xs={12} sm={6} md={2}>
        <Card>
          <CardHeader stats>
            <p className={classes.cardCategory}>{t("Total selling lands")}</p>
            <h3 className={`${classes.cardTitle} ${classes.priceNumber}`}>
              {numeral(attrs.lands_count).format("0,0")}
            </h3>
          </CardHeader>
        </Card>
      </GridItem>
      <GridItem xs={12} sm={6} md={2}>
        <Card>
          <CardHeader stats>
            <p className={classes.cardCategory}>{t("New lands")}</p>
            <h3 className={`${classes.cardTitle} ${classes.priceNumber}`}>
              {numeral(attrs.new_lands_count).format("0,0")}
            </h3>
          </CardHeader>
        </Card>
      </GridItem>
    </GridContainer>
  );
};

Header.propTypes = {
  classes: PropTypes.object.isRequired,
  attrs: PropTypes.object.isRequired,
  updatedAt: PropTypes.string.isRequired
};

export default Header;
