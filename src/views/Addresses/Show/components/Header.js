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
  price,
  landsCount,
  landsCountRatio,
  priceRatio,
  updatedAt
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
              <GridItem xs={12} md={6}>
                <p className={classes.detailText}>
                  Price/m²: {numeral(price).format("0,0")} VND/m²{" "}
                  <i>
                    Increase ratio: <span>{priceRatio * 100}%</span>
                  </i>
                </p>
              </GridItem>
              <GridItem xs={12} md={6}>
                <p className={classes.detailText}>
                  Lands count: {numeral(landsCount).format("0,0")}{" "}
                  <i>
                    Increase ratio: <span>{landsCountRatio * 100}%</span>
                  </i>
                </p>
              </GridItem>
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
  price: PropTypes.number.isRequired,
  priceRatio: PropTypes.number.isRequired,
  landsCount: PropTypes.number.isRequired,
  landsCountRatio: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  updatedAt: PropTypes.string.isRequired
};

export default Header;
