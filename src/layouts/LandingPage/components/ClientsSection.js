/* eslint-disable react/prop-types */
import React from "react";
import Section from "./Section";
import SectionHeader from "./SectionHeader";
import Clients from "./Clients";
import bdsImage from "assets/img/bds.jpg";
import chototImage from "assets/img/chotot.png";
import mogiImage from "assets/img/mogi.svg";
import cafelandImage from "assets/img/cafeland.png";

function ClientsSection(props) {
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
        <Clients
          items={[
            {
              name: "batdongsan",
              image: bdsImage,
              width: "120px"
            },
            {
              name: "chotot",
              image: chototImage,
              width: "135px"
            },
            {
              name: "mogi",
              image: mogiImage,
              width: "110px"
            },
            {
              name: "cafeland",
              image: cafelandImage,
              width: "135px"
            }
          ]}
        />
      </div>
    </Section>
  );
}

export default ClientsSection;
