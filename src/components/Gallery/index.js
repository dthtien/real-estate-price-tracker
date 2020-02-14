import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import GridContainer from "components/Grid/GridContainer";
import GridItem from "components/Grid/GridItem";
import PropTypes from "prop-types";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";
import { useTranslation } from "react-i18next";

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    overflow: "hidden",
    backgroundColor: theme.palette.background.paper,
    padding: 10
  },
  gridList: {
    textAlign: "center"
  },
  title: {
    paddingBottom: 15
  }
}));

const ImageGridList = ({ images }) => {
  const classes = useStyles();
  const { t } = useTranslation();

  return (
    <div className={classes.root}>
      <h4 className={classes.title}>{t("Preview Images")}</h4>
      <GridContainer className={classes.gridList}>
        {images.map(image => (
          <GridItem key={image.thumb} md={2} sm={6} xs={12}>
            <Zoom>
              <img
                src={image.origin}
                alt={image.thumb}
                width={200}
                height={200}
              />
            </Zoom>
          </GridItem>
        ))}
      </GridContainer>
    </div>
  );
};

ImageGridList.propTypes = {
  images: PropTypes.array.isRequired
};

export default ImageGridList;
