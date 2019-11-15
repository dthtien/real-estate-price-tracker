import React from "react";
import PropTypes from "prop-types";
import { Helmet } from "react-helmet";
import { titleize } from "utils";

const Header = ({ title }) => (
  <Helmet>
    <meta charSet="utf-8" />
    <title>{titleize(title)}</title>
    <link rel="toplands" href={window.location.href} />
  </Helmet>
);

Header.propTypes = {
  title: PropTypes.string
};

Header.defaultProps = {
  title:
    "TopLands - A statistic application about Ho Chi Minh real estate prices"
};

export default Header;
