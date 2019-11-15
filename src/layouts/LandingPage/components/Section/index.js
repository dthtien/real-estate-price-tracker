/* eslint-disable react/prop-types */
import React from "react";
import BackgroundImage from "../BackgroundImage";
import "./Section.scss";

function Section(props) {
  const {
    color,
    size,
    backgroundImage,
    backgroundImageOpacity,
    children,
    // Passed to section element
    ...otherProps
  } = props;

  return (
    <section
      className={
        "SectionComponent hero section is-block is-relative" +
        (color ? ` is-${color}` : "") +
        (size ? ` is-${size}` : "")
      }
      {...otherProps}
    >
      {backgroundImage && (
        <BackgroundImage
          image={backgroundImage}
          opacity={backgroundImageOpacity}
        />
      )}

      {children}
    </section>
  );
}

export default Section;
