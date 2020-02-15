import React from "react";
import PropTypes from "prop-types";
// @material-ui/icons
import Store from "@material-ui/icons/Store";
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
import Typography from "@material-ui/core/Typography";
import { Button } from "@material-ui/core";
import Contact from "./Contact";
const bdsUrl = "https://batdongsan.com.vn";
const Header = ({
  classes,
  title,
  totalPrice,
  feetSquare,
  feetSquarePrice,
  historyPricesData,
  description,
  sourceUrl,
  frontLength,
  classification,
  expiredDate,
  postedDate,
  agency,
  user,
  loadUserInfo
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
              <GridItem xs={12} sm={6} md={3}>
                <p className={classes.detailText}>
                  {t("Price")}/m²: {numeral(feetSquarePrice).format("0,0")}{" "}
                  VND/m²
                </p>
              </GridItem>
              <GridItem xs={12} sm={6} md={3}>
                {" "}
                <p className={classes.detailText}>
                  {t("Feet square")}: {feetSquare} m²
                </p>
              </GridItem>
              <GridItem xs={12} sm={6} md={3}>
                {" "}
                <p className={classes.detailText}>
                  {t("Agency")}: {agency ? t("Yes") : t("No")}
                </p>
              </GridItem>
              <GridItem xs={12} sm={6} md={3}>
                <p className={classes.detailText}>
                  {t("Price")}: {numeral(totalPrice).format("0,0")} VND
                </p>
              </GridItem>
              {historyPricesData && (
                <>
                  <GridItem xs={12} sm={6} md={4}>
                    <p className={classes.detailText}>
                      {t("Change times")}:{" "}
                      {numeral(historyPricesData.total_count).format("0,0")}
                    </p>
                  </GridItem>
                  <GridItem xs={12} sm={6} md={4}>
                    <p className={classes.detailText}>
                      {t("Highest price")}:{" "}
                      {numeral(historyPricesData.max_total_price).format("0,0")}{" "}
                      VND
                    </p>
                  </GridItem>
                  <GridItem xs={12} sm={6} md={4}>
                    <p className={classes.detailText}>
                      {t("Lowest price")}:{" "}
                      {numeral(historyPricesData.min_total_price).format("0,0")}{" "}
                      VND
                    </p>
                  </GridItem>
                </>
              )}
            </GridContainer>
          </CardBody>
          <CardFooter stats>
            <Typography variant="body1" className={classes.description}>
              {description}
            </Typography>
          </CardFooter>

          <GridContainer>
            <GridItem xs={12} sm={6} className={classes.moreInfo}>
              <Typography
                variant="body1"
                className={`${classes.description} ${classes.p10}`}
              >
                <strong>{t("Classification")}: </strong>
                {classification}
              </Typography>
              {frontLength !== 0 && (
                <Typography
                  variant="body1"
                  className={`${classes.description} ${classes.p10}`}
                >
                  <strong>{t("Front length")}: </strong>
                  {frontLength}m
                </Typography>
              )}

              {postedDate.length > 0 && (
                <Typography
                  variant="body1"
                  className={`${classes.description} ${classes.p10}`}
                >
                  <strong>{t("Posted Date")}: </strong>
                  {postedDate}
                </Typography>
              )}

              {expiredDate.length > 0 && (
                <Typography
                  variant="body1"
                  className={`${classes.description} ${classes.p10}`}
                >
                  <strong>{t("Expired Date")}: </strong>
                  {expiredDate}
                </Typography>
              )}
            </GridItem>
            <GridItem xs={12} sm={6} className={classes.moreInfo}>
              <Contact
                user={user}
                classes={classes}
                loadUserInfo={loadUserInfo}
              />
            </GridItem>
          </GridContainer>

          <Button
            href={bdsUrl + sourceUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={classes.detailLink}
          >
            {t("More detail")}...
          </Button>
        </Card>
      </GridItem>
    </GridContainer>
  );
};

Header.propTypes = {
  classes: PropTypes.object.isRequired,
  totalPrice: PropTypes.number.isRequired,
  feetSquare: PropTypes.number.isRequired,
  feetSquarePrice: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  updatedAt: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  historyPricesData: PropTypes.object,
  sourceUrl: PropTypes.string,
  frontLength: PropTypes.number,
  classification: PropTypes.string,
  agency: PropTypes.bool,
  expiredDate: PropTypes.string,
  postedDate: PropTypes.string,
  user: PropTypes.object,
  loadUserInfo: PropTypes.func.isRequired
};

export default Header;
