import React from "react";
import "assets/css/loader.css";

const Spinner = () => {
  return (
    <div className="lds-ripple">
      <div></div>
      <div></div>
    </div>
  );
};

Spinner.defaultProps = {
  type: "text",
  ready: false
};

export default Spinner;
