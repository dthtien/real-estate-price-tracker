/* eslint-disable react/prop-types */
import React from "react";
import "./styles/global.scss";
import { withRouter } from "react-router-dom";
import { useTranslation } from "react-i18next";
import Footer from "./components/Footer";
import HeroSection from "./components/HerroSection";
import ClientsSection from "./components/ClientsSection";
import FeaturesSection from "./components/FeaturesSection";
import logo from "assets/img/logo_landing.png";
import dashboard from "assets/img/dashboard.jpg";

function IndexPage({ history }) {
  const { t } = useTranslation();
  return (
    <>
      <HeroSection
        color="white"
        size="medium"
        backgroundImage=""
        backgroundImageOpacity={1}
        title="TopLands.tech"
        subtitle={t("introduction")}
        buttonText={t("startButton")}
        image={dashboard}
        buttonOnClick={() => {
          history.push("/app/dashboard");
        }}
      />
      <ClientsSection
        color="light"
        size="normal"
        backgroundImage=""
        backgroundImageOpacity={1}
        title=""
        subtitle=""
      />
      <FeaturesSection
        color="white"
        size="medium"
        backgroundImage=""
        backgroundImageOpacity={1}
        title={t("feature")}
        subtitle={t("featureTitle")}
      />
      <Footer
        color="light"
        size="normal"
        backgroundImage=""
        backgroundImageOpacity={1}
        copyright="© 2019 TopLands"
        logo={logo}
      />
    </>
  );
}

export default withRouter(IndexPage);
