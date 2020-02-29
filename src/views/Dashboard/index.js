import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
// react plugin for creating charts
import { connect } from "react-redux";
import { compose } from "redux";
import qs from "query-string";
// @material-ui/core
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
import ArrowUpward from "@material-ui/icons/ArrowUpward";
import AccessTime from "@material-ui/icons/AccessTime";
// core components
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import CardFooter from "components/Card/CardFooter.js";
import { capitalize } from "utils";
// rechart component
import reducer, {
  reducerName as key,
  load,
  loadLands,
  saga,
  makeSelectLandDetails,
  makeSelectLands
} from "./duck";
import { useOrdering } from "../hooks";
import { useTranslation } from "react-i18next";

import reducerInjector from "utils/reducerInjector";

import styles from "./styles";
import { createStructuredSelector } from "reselect";
import { Header, Lands, SearchForm, Addresses, Loading } from "./components";
import { LineChart } from "components/Charts";

const useStyles = makeStyles(styles);
function Dashboard({
  load,
  landsDetails: { data, loading },
  loadLands,
  lands,
  history,
  location: { search }
}) {
  const classes = useStyles();
  const params = qs.parse(search);
  const [order, setOrder] = useOrdering();
  useEffect(() => {
    load({ ...params, order });
  }, [search, order]);
  const { t } = useTranslation();
  const [addresses, setAddresses] = useState([]);

  const handleAddressNamesSelectorChange = adds => {
    setAddresses(adds || []);
    return adds;
  };

  const addressParsed = () => addresses.map(address => address.value);

  const handleSearch = e => {
    e.preventDefault();
    const address_names = addressParsed();

    history.push({
      pathname: "",
      search: `?${qs.stringify({ address_names })}`
    });
  };

  const renderingDashboard = () => {
    if (data) {
      let landsChart = [];
      let gotTime = null;
      let attrs = null;

      attrs = data.attributes;
      const subAddresses = attrs.children;
      landsChart = subAddresses.map(({ id, attributes }) => ({
        ...attributes,
        id
      }));

      let defaultAddresses = [];
      if (params.address_names) {
        defaultAddresses = subAddresses.map(
          ({ attributes: { alias_name, name } }) => ({
            value: alias_name,
            label: capitalize(name)
          })
        );
      }

      gotTime = attrs.latest_updated_price;
      return (
        <>
          <SearchForm
            handleAddressesInputChange={handleAddressNamesSelectorChange}
            classes={classes}
            onSubmit={handleSearch}
            options={defaultAddresses}
          />
          <GridContainer>
            <GridItem xs={12} sm={12} md={12}>
              <Card chart>
                <CardBody>
                  <div className={classes.chartContent}>
                    <LineChart data={landsChart} chartKey="price" />
                  </div>
                  <h4 className={classes.cardTitle}>{t("chartTitle")}</h4>
                  <p className={classes.cardCategory}>
                    <span className={classes.successText}>
                      <ArrowUpward className={classes.upArrowCardCategory} />
                      {attrs.price_ratio}%
                    </span>{" "}
                    {t("increase in yesterday")}.
                  </p>
                </CardBody>
                <CardFooter chart>
                  <div className={classes.stats}>
                    <AccessTime />
                    {t("Updated at")} {gotTime}
                  </div>
                </CardFooter>
              </Card>
            </GridItem>
          </GridContainer>
          <Header
            classes={classes}
            averagePrice={attrs.average_price}
            landsCount={attrs.lands_count}
            newLandsCount={attrs.new_lands_count}
            updatedAt={gotTime}
          />
          <Addresses
            addresses={subAddresses}
            updatedAt={gotTime}
            ordering={setOrder}
          />
        </>
      );
    }

    if (loading) {
      return <Loading />;
    }

    return <h1>{t("Data not found")}</h1>;
  };

  return (
    <>
      {renderingDashboard()}
      <Lands
        classes={classes}
        lands={lands}
        loadLands={loadLands}
        addresses={params.address_names}
      />
    </>
  )
}

Dashboard.propTypes = {
  load: PropTypes.func.isRequired,
  loadLands: PropTypes.func.isRequired,
  landsDetails: PropTypes.object.isRequired,
  lands: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired
};

const mapStateToProps = createStructuredSelector({
  landsDetails: makeSelectLandDetails(),
  lands: makeSelectLands()
});

const mapDispatchToProps = {
  load,
  loadLands
};

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps
);

const withReducer = reducerInjector({ key, reducer, saga });

export default compose(
  withConnect,
  withReducer
)(Dashboard);
