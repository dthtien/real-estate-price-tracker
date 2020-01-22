import React from "react";
import PropTypes from "prop-types";
import numeral from "numeral";
import Slider from "@material-ui/core/Slider";
import Typography from "@material-ui/core/Typography";
import { useTranslation } from "react-i18next";

const Filter = ({
  classes,
  priceRange,
  handlePriceChange,
  acreageRange,
  handleAcreageChange
}) => {
  const { t } = useTranslation();
  return (
    <form className={classes.filterForm}>
      <div className={classes.priceSlider}>
        <Slider
          value={priceRange}
          onChange={handlePriceChange}
          valueLabelDisplay="auto"
          aria-labelledby="range-slider"
          valueLabelFormat={value => numeral(value).format("0a")}
          max={10 ** 11}
          min={0}
          color="secondary"
        />
        <Typography id="range-slider" gutterBottom>
          {t("Price")}: {numeral(priceRange[0]).format("0,0")} VND &#8594;{" "}
          {numeral(priceRange[1]).format("0,0")} VND
        </Typography>
      </div>
      <div className={classes.priceSlider}>
        <Slider
          value={acreageRange}
          onChange={handleAcreageChange}
          valueLabelDisplay="auto"
          aria-labelledby="acreage-range-slider"
          valueLabelFormat={value => numeral(value).format("0a")}
          max={300}
          min={0}
          color="secondary"
        />
        <Typography id="acreage-range-slider" gutterBottom>
          {t("Acreage")}: {numeral(acreageRange[0]).format("0,0")} m² &#8594;{" "}
          {numeral(acreageRange[1]).format("0,0")} m²
        </Typography>
      </div>
    </form>
  );
};

Filter.propTypes = {
  classes: PropTypes.object.isRequired,
  priceRange: PropTypes.array.isRequired,
  handlePriceChange: PropTypes.func.isRequired,
  acreageRange: PropTypes.array.isRequired,
  handleAcreageChange: PropTypes.func.isRequired
};

export default Filter;
