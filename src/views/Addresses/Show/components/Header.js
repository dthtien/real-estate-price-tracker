import React from "react";
import PropTypes from "prop-types";
// @material-ui/icons
import Store from "@material-ui/icons/Store";
import DateRange from "@material-ui/icons/DateRange";
import numeral from "numeral";
import { useTranslation } from "react-i18next";
// core components
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardIcon from "components/Card/CardIcon.js";
import CardFooter from "components/Card/CardFooter.js";
import CardBody from "components/Card/CardBody";

const Header = ({
  classes,
  title,
  price,
  landsCount,
  updatedAt,
  newLandsCount,
  landOnlyPrice,
  apartmentPrice,
  farmPrice,
  housePrice
}) => {
  const { t } = useTranslation();
  return (
    <GridContainer>
      <GridItem xs={12}>
        <Card>
          <CardHeader color="info" stats icon>
            <CardIcon color="info">
              <Store />
            </CardIcon>
            <h3 className={`${classes.cardTitle} ${classes.titleText}`}>
              {title}
            </h3>
          </CardHeader>
          <CardBody>
            <GridContainer>
              <GridItem xs={12} md={4}>
                <p className={classes.detailText}>
                  {t("New lands")}: {numeral(newLandsCount).format("0,0")}
                </p>
              </GridItem>
              <GridItem xs={12} md={4}>
                <p className={classes.detailText}>
                  {t("Price")}: {numeral(price).format("0,0")} VND/m²{" "}
                </p>
              </GridItem>
              <GridItem xs={12} md={4}>
                <p className={classes.detailText}>
                  {t("Lands")}: {numeral(landsCount).format("0,0")}{" "}
                </p>
              </GridItem>
            </GridContainer>
            <GridContainer>
              <GridItem xs={12} md={3}>
                <p className={classes.priceInfoText}>
                  {t("Land only price")}: {numeral(landOnlyPrice).format("0,0")}{" "}
                  VND/m²
                </p>
              </GridItem>
              <GridItem xs={12} md={3}>
                <p className={classes.priceInfoText}>
                  {t("Apartment Price")}:{" "}
                  {numeral(apartmentPrice).format("0,0")} VND/m²
                </p>
              </GridItem>
              <GridItem xs={12} md={3}>
                <p className={classes.priceInfoText}>
                  {t("House price")}: {numeral(housePrice).format("0,0")} VND/m²
                </p>
              </GridItem>
              <GridItem xs={12} md={3}>
                <p className={classes.priceInfoText}>
                  {t("Farm price")}: {numeral(farmPrice).format("0,0")} VND/m²
                </p>
              </GridItem>
            </GridContainer>
          </CardBody>
          <CardFooter stats>
            <div className={classes.stats}>
              <div className={classes.stats}>
                <DateRange />
                {t("Updated at")} {updatedAt}
              </div>
            </div>
          </CardFooter>
        </Card>
      </GridItem>
    </GridContainer>
  );
};

Header.propTypes = {
  classes: PropTypes.object.isRequired,
  price: PropTypes.string.isRequired,
  landsCount: PropTypes.number.isRequired,
  newLandsCount: PropTypes.number.isRequired,
  landOnlyPrice: PropTypes.number.isRequired,
  apartmentPrice: PropTypes.number.isRequired,
  farmPrice: PropTypes.number.isRequired,
  housePrice: PropTypes.number.isRequired,
  landsCountRatio: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  updatedAt: PropTypes.string
};

export default Header;
