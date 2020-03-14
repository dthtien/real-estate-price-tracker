import React from "react";
import PropTypes from "prop-types";
import numeral from "numeral";
import { useTranslation } from "react-i18next";

const Tooltip = ({ active, payload, label }) => {
  const { t } = useTranslation();

  if (active && payload) {
    const priceList = () =>
      payload.map(data => (
        <div
          key={data.dataKey}
          style={{
            backgroundColor: "white",
            padding: 5,
            color: data.stroke
          }}
        >
          <p>
            {t(data.name)}: {numeral(data.value).format("0,0")}{" "}
            {data.dataKey.includes("count") ? "lands" : "VND/m²"}
          </p>
        </div>
      ));

    return (
      <div
        style={{
          backgroundColor: "white"
        }}
      >
        <p style={{ textTransform: "capitalize", fontWeight: "bold" }}>
          {label}
        </p>
        {priceList()}
      </div>
    );
  }

  return null;
};

Tooltip.propTypes = {
  active: PropTypes.bool,
  label: PropTypes.string,
  payload: PropTypes.array
};

export default Tooltip;
