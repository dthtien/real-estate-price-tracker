import React from "react";
import PropTypes from "prop-types";
// @material-ui/icons
import Store from "@material-ui/icons/Store";
import DateRange from "@material-ui/icons/DateRange";
import Update from "@material-ui/icons/Update";
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
import CardFooter from "components/Card/CardFooter.js";

const Header = ({
  classes,
  averagePrice,
  landsCount,
  newLandsCount,
  updatedAt
}) => {
  return (
    <GridContainer>
      <GridItem xs={12} sm={6} md={3}>
        <Card>
          <CardHeader color="warning" stats icon>
            <CardIcon color="warning">
              <FileCopy />
            </CardIcon>
            <p className={classes.cardCategory}>Average Price</p>
            <h3 className={`${classes.cardTitle} ${classes.priceNumber}`}>
              {numeral(averagePrice).format("0,0")} VND
            </h3>
          </CardHeader>
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
      <GridItem xs={12} sm={6} md={3}>
        <Card>
          <CardHeader color="info" stats icon>
            <CardIcon color="info">
              <Store />
            </CardIcon>
            <p className={classes.cardCategory}>Total selling lands</p>
            <h3 className={`${classes.cardTitle} ${classes.priceNumber}`}>
              {numeral(landsCount).format("0,0")}
            </h3>
          </CardHeader>
          <CardFooter stats>
            <div className={classes.stats}>
              <DateRange />
              Updated at {updatedAt}
            </div>
          </CardFooter>
        </Card>
      </GridItem>
      <GridItem xs={12} sm={6} md={3}>
        <Card>
          <CardHeader color="warning" stats icon>
            <CardIcon color="warning">
              <InfoOutlined />
            </CardIcon>
            <p className={classes.cardCategory}>New lands</p>
            <h3 className={`${classes.cardTitle} ${classes.priceNumber}`}>
              {newLandsCount}
            </h3>
          </CardHeader>
          <CardFooter stats>
            <div className={classes.stats}>
              <DateRange />
              Updated at {updatedAt}
            </div>
          </CardFooter>
        </Card>
      </GridItem>
      <GridItem xs={12} sm={6} md={3}>
        <Card>
          <CardHeader color="info" stats icon>
            <CardIcon color="info">
              <Accessibility />
            </CardIcon>
            <p className={classes.cardCategory}>Followers</p>
            <h3 className={`${classes.cardTitle} ${classes.priceNumber}`}>
              +245
            </h3>
          </CardHeader>
          <CardFooter stats>
            <div className={classes.stats}>
              <Update />
              Updated at {updatedAt}
            </div>
          </CardFooter>
        </Card>
      </GridItem>
    </GridContainer>
  );
};

Header.propTypes = {
  classes: PropTypes.object.isRequired,
  averagePrice: PropTypes.number.isRequired,
  landsCount: PropTypes.number.isRequired,
  newLandsCount: PropTypes.number.isRequired,
  updatedAt: PropTypes.string.isRequired
};

export default Header;
