import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { useTranslation } from "react-i18next";
import { compose } from "redux";
import { makeStyles } from "@material-ui/core/styles";
import { createStructuredSelector } from "reselect";
import CustomHeader from "components/Header";

import reducer, {
  load,
  loadHistoryPrices,
  loadUser,
  reducerName,
  saga,
  makeSelectLandDetail,
  makeSelectHistoryPrices,
  makeSelectUser
} from "./duck";
import reducerInjector from "utils/reducerInjector";
import { Header, HistoryPrices } from "./components";

import styles from "./styles";
import Loading from "components/Loading";
import ImageGridList from "components/Gallery";
const useStyles = makeStyles(styles);

const Show = ({
  match: { params },
  load,
  landDetail: { data, loading },
  loadHistoryPrices,
  historyPrices,
  loadUser,
  user
}) => {
  useEffect(() => {
    load(params);
  }, [params]);
  const { t } = useTranslation();

  const classes = useStyles();

  const renderData = () => {
    if (loading) {
      return <Loading ready={!loading} />;
    }
    if (data) {
      const { attributes } = data;
      const { data: historyPricesData } = historyPrices;
      const loadUserInfo = () => {
        loadUser({ id: attributes.slug });
      };
      return (
        <div>
          <CustomHeader title={attributes.address} />
          <h3 className={classes.titleText}>{attributes.address}</h3>
          <Header
            classes={classes}
            title={attributes.title}
            totalPrice={attributes.total_price}
            user={user}
            feetSquare={attributes.acreage}
            feetSquarePrice={attributes.square_meter_price}
            updatedAt={attributes.updated_at}
            historyPricesData={historyPricesData}
            description={attributes.description}
            sourceUrl={attributes.source_url}
            frontLength={attributes.front_length}
            classification={attributes.classification}
            agency={attributes.attributes}
            expiredDate={attributes.expired_date}
            postedDate={attributes.post_date}
            loadUserInfo={loadUserInfo}
          />

          {attributes.images.length > 0 && (
            <div className={classes.previewImages}>
              <ImageGridList images={attributes.images} />
            </div>
          )}
          <HistoryPrices
            loadHistoryPrices={loadHistoryPrices}
            params={params}
            historyPrices={historyPrices}
            updatedAt={attributes.updated_at}
          />
        </div>
      );
    }

    return <h1>{t("Data not found")}</h1>;
  };
  return renderData();
};

Show.propTypes = {
  match: PropTypes.object.isRequired,
  load: PropTypes.func.isRequired,
  loadHistoryPrices: PropTypes.func.isRequired,
  landDetail: PropTypes.object.isRequired,
  historyPrices: PropTypes.object.isRequired,
  user: PropTypes.object,
  loadUser: PropTypes.func.isRequired
};

const withReducer = reducerInjector({ reducer, key: reducerName, saga });

const mapDispatchToProps = {
  load,
  loadHistoryPrices,
  loadUser
};

const mapStateToProps = createStructuredSelector({
  landDetail: makeSelectLandDetail(),
  historyPrices: makeSelectHistoryPrices(),
  user: makeSelectUser()
});

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps
);
export default compose(
  withReducer,
  withConnect
)(Show);
