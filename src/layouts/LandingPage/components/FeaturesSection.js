/* eslint-disable react/prop-types */
import React from "react";
import Section from "./Section";
import SectionHeader from "./SectionHeader";
import Features from "./Features";
import uptodateImg from "assets/img/uptodate.svg";
import convenientImg from "assets/img/convenient.svg";
import alwaysUpdateImg from "assets/img/always_update.svg";
import havingFun from "assets/img/having_fun.svg";

function FeaturesSection(props) {
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
              title: "Data update every day",
              description:
                "Data is crawled everyday from a lot of sites. The price will be close to the market price",
              image: uptodateImg
            },
            {
              title: "Convenient",
              description:
                "You can get data from chat bot, web application, and the social network applications",
              image: convenientImg
            },
            {
              title: "Always update",
              description:
                "You can register to receive the notification via facebook messager about the good deal or custom condition",
              image: alwaysUpdateImg
            },
            {
              title: "Support 24/7",
              description:
                "Give me more requirement if you want. I need requirement <3",
              image: havingFun
            }
          ]}
        />
      </div>
    </Section>
  );
}

export default FeaturesSection;
