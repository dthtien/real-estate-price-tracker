/* eslint-disable react/prop-types */
import React from "react";
import "./BackgroundImage.scss";

function BackgroundImage({ image, opacity }) {
  return (
    <div
      className="BackgroundImage"
      style={{
        "--image": `url(${image})`,
        "--opacity": opacity
      }}
    />
  );
}

export default BackgroundImage;
