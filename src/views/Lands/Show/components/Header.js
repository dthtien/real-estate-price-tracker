import React from "react";
import PropTypes from "prop-types";
// @material-ui/icons
import Store from "@material-ui/icons/Store";
import DateRange from "@material-ui/icons/DateRange";
import numeral from "numeral";
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
  totalPrice,
  feetSquare,
  feetSquarePrice,
  updatedAt,
  historyPricesData
}) => {
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
              <GridItem xs={12} sm={6} md={2}>
                <p className={classes.detailText}>
                  Price/m²: {numeral(feetSquarePrice).format("0,0")} VND/m²
                </p>
              </GridItem>
              <GridItem xs={12} sm={6} md={2}>
                {" "}
                <p className={classes.detailText}>
                  Feet square: {feetSquare} m²
                </p>
              </GridItem>
              <GridItem xs={12} sm={6} md={2}>
                <p className={classes.detailText}>
                  Price: {numeral(totalPrice).format("0,0")} VND
                </p>
              </GridItem>
              {historyPricesData && (
                <>
                  <GridItem xs={12} sm={6} md={2}>
                    <p className={classes.detailText}>
                      Change times:{" "}
                      {numeral(historyPricesData.total_count).format("0,0")}
                    </p>
                  </GridItem>
                  <GridItem xs={12} sm={6} md={2}>
                    <p className={classes.detailText}>
                      Highest price:{" "}
                      {numeral(historyPricesData.max_total_price).format("0,0")}{" "}
                      VND
                    </p>
                  </GridItem>
                  <GridItem xs={12} sm={6} md={2}>
                    <p className={classes.detailText}>
                      Lowest price:{" "}
                      {numeral(historyPricesData.min_total_price).format("0,0")}{" "}
                      VND
                    </p>
                  </GridItem>
                </>
              )}
            </GridContainer>
          </CardBody>
          <CardFooter stats>
            <div className={classes.stats}>
              <div className={classes.stats}>
                <DateRange />
                Updated at {updatedAt}
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
  totalPrice: PropTypes.number.isRequired,
  feetSquare: PropTypes.number.isRequired,
  feetSquarePrice: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  updatedAt: PropTypes.string.isRequired,
  historyPricesData: PropTypes.object
};

export default Header;
