import React from "react";
import PropTypes from "prop-types";
import { Helmet } from "react-helmet";
import { titleize } from "utils";
import { useTranslation } from "react-i18next";

const Header = ({ title }) => {
  const { t } = useTranslation();
  title = titleize(title || t("title"));
  return (
    <Helmet>
      <meta charSet="utf-8" />
      <title>{title}</title>
      <link rel="toplands" href={window.location.href} />
      <meta name="description" content={title} />
      <meta name="keywords" content={title.split(" ")} />
    </Helmet>
  );
};

Header.propTypes = {
  title: PropTypes.string
};

export default Header;
