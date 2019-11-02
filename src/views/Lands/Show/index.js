import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { compose } from "redux";
import { makeStyles } from "@material-ui/core/styles";
import { createStructuredSelector } from "reselect";

import reducer, {
  load,
  loadHistoryPrices,
  reducerName,
  saga,
  makeSelectLandDetail
} from "./duck";
import reducerInjector from "utils/reducerInjector";
import { Header, HistoryPrices } from "./components";

import styles from "./styles";
import { makeSelectHistoryPrices } from "./duck/selector";
const useStyles = makeStyles(styles);

const Show = ({
  match: { params },
  load,
  landDetail: { data, loading },
  loadHistoryPrices,
  historyPrices
}) => {
  useEffect(() => {
    load(params);
  }, []);

  const classes = useStyles();

  const renderData = () => {
    if (loading) {
      return <h1>Loading</h1>;
    }
    if (data) {
      const { attributes } = data;
      return (
        <div>
          <h3 className={classes.titleText}>{attributes.address}</h3>
          <Header
            classes={classes}
            title={attributes.title}
            totalPrice={attributes.total_price}
            feetSquare={attributes.acreage}
            feetSquarePrice={attributes.square_meter_price}
            updatedAt={attributes.updated_at}
            historyPricesData={historyPrices.data}
          />
          <HistoryPrices
            loadHistoryPrices={loadHistoryPrices}
            params={params}
            historyPrices={historyPrices}
            updatedAt={attributes.updated_at}
          />
        </div>
      );
    }

    return <h1>Data not found</h1>;
  };
  return renderData();
};

Show.propTypes = {
  match: PropTypes.object.isRequired,
  load: PropTypes.func.isRequired,
  loadHistoryPrices: PropTypes.func.isRequired,
  landDetail: PropTypes.object.isRequired,
  historyPrices: PropTypes.object.isRequired
};

const withReducer = reducerInjector({ reducer, key: reducerName, saga });

const mapDispatchToProps = {
  load,
  loadHistoryPrices
};

const mapStateToProps = createStructuredSelector({
  landDetail: makeSelectLandDetail(),
  historyPrices: makeSelectHistoryPrices()
});

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps
);
export default compose(
  withReducer,
  withConnect
)(Show);
