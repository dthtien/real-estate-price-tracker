import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import { useTranslation } from "react-i18next";
import reducer, {
  reducerName as key,
  load,
  loadLands,
  loadPriceLoggers,
  saga,
  makeSelectAddressDetail,
  makeSelectLands,
  makeSelectPriceLoggers
} from "./duck";
import { Header, Lands, Addresses } from "./components";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardBody from "components/Card/CardBody.js";
import { LineChart } from "components/Charts";

import reducerInjector from "utils/reducerInjector";
import { createStructuredSelector } from "reselect";
import { connect } from "react-redux";
import { compose } from "redux";
import styles from "./styles";
import { useOrdering } from "../../hooks";
import Loading from "components/Loading";
import CustomHeader from "components/Header";
import PriceLoggers from "./components/PriceLoggers";
import GridContainer from "components/Grid/GridContainer";
import GridItem from "components/Grid/GridItem";

const useStyles = makeStyles(styles);

const Show = ({
  match: { params },
  load,
  loadLands,
  address: { data, loading },
  lands,
  priceLoggers,
  loadPriceLoggers
}) => {
  const classes = useStyles();
  const { t } = useTranslation();
  const [order, setOrder] = useOrdering();

  useEffect(() => {
    load({ ...params, order });
  }, [params, order]);

  if (loading) {
    return <Loading ready={!loading} />;
  }
  if (data) {
    const { attributes } = data;
    const { sub_addresses } = attributes;
    const chartData = sub_addresses.map(
      ({ id, attributes: { name, price } }) => ({
        name,
        id,
        price
      })
    );

    return (
      <div>
        <CustomHeader title={attributes.name} />
        <Header
          classes={classes}
          title={attributes.name}
          price={attributes.price}
          updatedAt={attributes.logged_date}
          landsCount={attributes.lands_count}
          landsCountRatio={attributes.lands_count_ratio}
          priceRatio={attributes.price_ratio}
          newLandsCount={attributes.new_lands_count}
        />
        {sub_addresses.length > 0 && (
          <Card chart>
            <CardHeader className={classes.chartContent}>
              <LineChart data={chartData} chartKey="price" />
            </CardHeader>
            <CardBody>
              <h4 className={classes.cardTitle}>{t("chartTitle")}</h4>
            </CardBody>
          </Card>
        )}
        <GridContainer>
          {sub_addresses.length > 0 && (
            <GridItem xs={12} sm={12} md={6}>
              <Addresses
                addresses={attributes.sub_addresses}
                updatedAt={attributes.logged_date}
                ordering={setOrder}
              />
            </GridItem>
          )}
          <GridItem xs={12} sm={12} md={6}>
            <PriceLoggers
              priceLoggers={priceLoggers}
              loadPriceLoggers={loadPriceLoggers}
              addressId={params.id}
            />
          </GridItem>
        </GridContainer>
        <Lands
          updatedAt={attributes.logged_date}
          loadLands={loadLands}
          addresses={[params.id]}
          lands={lands}
          landsCount={attributes.lands_count}
        />
      </div>
    );
  }

  return <h1>{t("Data not found")}</h1>;
};

Show.propTypes = {
  match: PropTypes.object.isRequired,
  load: PropTypes.func.isRequired,
  loadPriceLoggers: PropTypes.func.isRequired,
  loadLands: PropTypes.func.isRequired,
  address: PropTypes.object.isRequired,
  lands: PropTypes.object.isRequired,
  priceLoggers: PropTypes.object.isRequired
};

const mapStateToProps = createStructuredSelector({
  address: makeSelectAddressDetail(),
  lands: makeSelectLands(),
  priceLoggers: makeSelectPriceLoggers()
});

const mapDispatchToProps = {
  load,
  loadLands,
  loadPriceLoggers
};

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps
);

const withReducer = reducerInjector({ key, reducer, saga });

export default compose(
  withConnect,
  withReducer
)(Show);
