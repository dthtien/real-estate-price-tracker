import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import reducer, {
  reducerName as key,
  load,
  loadLands,
  saga,
  makeSelectAddressDetail,
  makeSelectLands
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

const useStyles = makeStyles(styles);

const Show = ({
  match: { params },
  load,
  loadLands,
  address: { data, loading },
  lands
}) => {
  const classes = useStyles();

  useEffect(() => {
    load(params);
  }, [params]);

  if (loading) {
    return <h1>Loading</h1>;
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
        <Header
          classes={classes}
          title={attributes.name}
          price={attributes.price}
          updatedAt={attributes.logged_date}
          landsCount={attributes.lands_count}
          landsCountRatio={attributes.lands_count_ratio}
          priceRatio={attributes.price_ratio}
        />
        {sub_addresses.length > 0 && (
          <>
            <Card chart>
              <CardHeader className={classes.chartContent}>
                <LineChart data={chartData} chartKey="price" />
              </CardHeader>
              <CardBody>
                <h4 className={classes.cardTitle}>Average prices report</h4>
              </CardBody>
            </Card>
            <Addresses
              addresses={attributes.sub_addresses}
              updatedAt={attributes.logged_date}
            />
          </>
        )}
        <Lands
          updatedAt={attributes.logged_date}
          loadLands={loadLands}
          addresses={[params.id]}
          lands={lands}
        />
      </div>
    );
  }

  return <h1>Data not found</h1>;
};

Show.propTypes = {
  match: PropTypes.object.isRequired,
  load: PropTypes.func.isRequired,
  loadLands: PropTypes.func.isRequired,
  address: PropTypes.object.isRequired,
  lands: PropTypes.object.isRequired
};

const mapStateToProps = createStructuredSelector({
  address: makeSelectAddressDetail(),
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
)(Show);
