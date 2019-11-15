import React from "react";
import "./style.scss";

const SocialLinks = () => (
  <div className="social-buttons">
    <a
      href="https://github.com/dthtien/real-estate-price-tracker"
      className="social-btn entypo-github"
      target="_blank"
      rel="noopener noreferrer"
    >
      <div className="sr">Github - opens in new tab</div>
    </a>

    <a
      href="#"
      className="social-btn entypo-twitter"
      target="_blank"
      rel="noopener noreferrer"
    >
      <div className="sr">Twitter - opens in new tab</div>
    </a>

    <a
      href="https://www.facebook.com/TopLands-108385917287801"
      className="social-btn entypo-facebook"
      target="_blank"
      rel="noopener noreferrer"
    >
      <div className="sr">Facebook - opens in new tab</div>
    </a>

    <a
      href="#"
      className="social-btn entypo-instagrem"
      target="_blank"
      rel="noopener noreferrer"
    >
      <div className="sr">Instagram - opens in new tab</div>
    </a>
  </div>
);

export default SocialLinks;
