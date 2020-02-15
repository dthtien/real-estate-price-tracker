import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import GridContainer from "components/Grid/GridContainer";
import GridItem from "components/Grid/GridItem";
import PropTypes from "prop-types";
import Carousel, { Modal, ModalGateway } from "react-images";
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
    paddingBottom: 15,
    display: "block",
    width: "100%"
  },
  image: {
    width: 200,
    height: 200,
    cursor: "pointer"
  }
}));

const ImageGridList = ({ images }) => {
  const classes = useStyles();
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const handleImageClicked = index => {
    setIsOpen(true);
    setCurrentIndex(index);
  };
  const renderingImages = images.map(image => ({ src: image.origin }));
  const toggleModal = () => setIsOpen(!isOpen);
  return (
    <div className={classes.root}>
      <h4 className={classes.title}>{t("Preview Images")}</h4>
      <GridContainer className={classes.gridList}>
        {images.map((image, index) => (
          <GridItem key={image.thumb} md={2} sm={6} xs={12}>
            <img
              src={image.thumb}
              alt={image.thumb}
              className={classes.image}
              onClick={() => handleImageClicked(index)}
            />
          </GridItem>
        ))}
        <ModalGateway>
          {isOpen ? (
            <Modal onClose={toggleModal}>
              <Carousel currentIndex={currentIndex} views={renderingImages} />
            </Modal>
          ) : null}
        </ModalGateway>
      </GridContainer>
    </div>
  );
};

ImageGridList.propTypes = {
  images: PropTypes.array.isRequired
};

export default ImageGridList;
