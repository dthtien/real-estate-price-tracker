/* eslint-disable react/prop-types */
import React from "react";
import { useTranslation } from "react-i18next";
import Section from "./Section";
import SectionHeader from "./SectionHeader";
import Features from "./Features";
import uptodateImg from "assets/img/uptodate.svg";
import convenientImg from "assets/img/convenient.svg";
import alwaysUpdateImg from "assets/img/always_update.svg";
import havingFun from "assets/img/having_fun.svg";

function FeaturesSection(props) {
  const { t } = useTranslation();
  return (
    <Section
      color={props.color}
      size={props.size}
      backgroundImage={props.backgroundImage}
      backgroundImageOpacity={props.backgroundImageOpacity}
    >
      <div className="container">
        <SectionHeader
          title={props.title}
          subtitle={props.subtitle}
          centered={true}
          size={3}
        />
        <Features
          items={[
            {
              title: t("firstFeature"),
              description: t("firstFeatureContent"),
              image: uptodateImg
            },
            {
              title: t("secondFeature"),
              description: t("secondFeatureContent"),
              image: convenientImg
            },
            {
              title: t("thirdFeature"),
              description: t("thirdFeatureContent"),
              image: alwaysUpdateImg
            },
            {
              title: t("fourthFeature"),
              description: t("fourthFeatureContent"),
              image: havingFun
            }
          ]}
        />
      </div>
    </Section>
  );
}

export default FeaturesSection;
