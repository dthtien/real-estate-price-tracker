import React from "react";
import PropTypes from "prop-types";
import ReactPlaceholder from "react-placeholder";
import "react-placeholder/lib/reactPlaceholder.css";

const Loading = ({ ready, type }) => {
  return (
    <ReactPlaceholder
      type={type}
      ready={ready}
      rows={9}
      showLoadingAnimation={true}
    >
      <h1>Loading</h1>
    </ReactPlaceholder>
  );
};

Loading.propTypes = {
  ready: PropTypes.bool,
  type: PropTypes.string
};

Loading.defaultProps = {
  type: "text",
  ready: false
};

export default Loading;
