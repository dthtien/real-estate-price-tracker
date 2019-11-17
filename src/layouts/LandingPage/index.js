/* eslint-disable react/prop-types */
import React from "react";
import "./styles/global.scss";
import { withRouter } from "react-router-dom";
import Footer from "./components/Footer";
import HeroSection from "./components/HerroSection";
import ClientsSection from "./components/ClientsSection";
import FeaturesSection from "./components/FeaturesSection";
import logo from "assets/img/favicon.ico";
import dashboard from "assets/img/dashboard.jpg";

function IndexPage({ history }) {
  return (
    <>
      <HeroSection
        color="white"
        size="medium"
        backgroundImage=""
        backgroundImageOpacity={1}
        title="TopLands.tech"
        subtitle="A statistic application about Ho Chi Minh real estate prices. Get you good real estate deal."
        buttonText="Get Started"
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
        title="Features"
        subtitle="The application is getting data from several real estate sites. Users can get more details about selling lands or districts."
      />
      <Footer
        color="light"
        size="normal"
        backgroundImage=""
        backgroundImageOpacity={1}
        copyright="© 2019 Company"
        logo={logo}
      />
    </>
  );
}

export default withRouter(IndexPage);
