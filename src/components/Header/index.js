import React from "react";
import PropTypes from "prop-types";
import { Helmet } from "react-helmet";
import { titleize } from "utils";
import { useTranslation } from "react-i18next";

const Header = ({ title }) => {
  const { t } = useTranslation();

  return (
    <Helmet>
      <meta charSet="utf-8" />
      <title>{titleize(title || t("title"))}</title>
      <link rel="toplands" href={window.location.href} />
    </Helmet>
  );
};

Header.propTypes = {
  title: PropTypes.string
};

export default Header;
