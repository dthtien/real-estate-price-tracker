import React from "react";
import PropTypes from "prop-types";
import numeral from "numeral";
import Slider from "@material-ui/core/Slider";
import Typography from "@material-ui/core/Typography";
import { useTranslation } from "react-i18next";
import MultipleSelect from "components/CustomInput/MultipleSelect";

const classificationOptions = [
  "Bán căn hộ chung cư",
  "Bán nhà riêng",
  "Bán nhà biệt thự, liền kề",
  "Bán nhà mặt phố",
  "Bán đất nền dự án",
  "Bán đất",
  "Bán trang trại, khu nghỉ dưỡng",
  "Bán kho, nhà xưởng",
  "Bán loại bất động sản khác"
];

const Filter = ({
  classes,
  priceRange,
  handlePriceChange,
  acreageRange,
  handleAcreageChange,
  fontLengthRange,
  handleFrontLengthChange,
  classifications,
  handleClassificationsChange
}) => {
  const { t } = useTranslation();
  return (
    <>
      <div className={classes.filterFormItem}>
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
      </div>

      <div className={classes.filterFormItem}>
        <div className={classes.priceSlider}>
          <Slider
            value={fontLengthRange}
            onChange={handleFrontLengthChange}
            valueLabelDisplay="auto"
            aria-labelledby="range-slider"
            valueLabelFormat={value => numeral(value).format("0a")}
            max={20}
            min={0}
            color="secondary"
          />
          <Typography id="range-slider" gutterBottom>
            {t("Front length")}: {numeral(fontLengthRange[0]).format("0,0")} m
            &#8594; {numeral(fontLengthRange[1]).format("0,0")} m
          </Typography>
        </div>
        <div className={classes.priceSlider}>
          <MultipleSelect
            options={classificationOptions}
            value={classifications}
            handleChange={handleClassificationsChange}
            classes={classes}
          />
        </div>
      </div>
    </>
  );
};

Filter.propTypes = {
  classes: PropTypes.object.isRequired,
  priceRange: PropTypes.array.isRequired,
  handlePriceChange: PropTypes.func.isRequired,
  acreageRange: PropTypes.array.isRequired,
  handleAcreageChange: PropTypes.func.isRequired,
  fontLengthRange: PropTypes.array.isRequired,
  handleFrontLengthChange: PropTypes.func.isRequired,
  classifications: PropTypes.array.isRequired,
  handleClassificationsChange: PropTypes.func.isRequired
};

export default Filter;
