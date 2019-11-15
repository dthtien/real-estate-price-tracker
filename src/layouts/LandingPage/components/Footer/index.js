/* eslint-disable react/prop-types */
import React from "react";
import Section from "../Section";
import { Link } from "react-router-dom";
import "./Footer.scss";
import SocialLinks from "../SocialLinks";

function Footer(props) {
  return (
    <Section
      color={props.color}
      size={props.size}
      backgroundImage={props.backgroundImage}
      backgroundImageOpacity={props.backgroundImageOpacity}
    >
      <div className="FooterComponent__container container">
        <div className="brand left">
          <Link to="/">
            <img src={props.logo} alt="Logo" />
            TopLands
          </Link>
        </div>
        <div className="links right">
          <a href="https://www.visualcv.com/dthtien1/pdf/">About</a>
          <Link to="/privacy">Privacy</Link>
          <Link to="/contact">Contact</Link>
          <a
            target="_blank"
            href="https://medium.com"
            rel="noopener noreferrer"
          >
            Blog
          </a>
        </div>
        <div className="social-links right">
          <SocialLinks />
        </div>
        <div className="copyright left">{props.copyright}</div>
      </div>
    </Section>
  );
}

export default Footer;
