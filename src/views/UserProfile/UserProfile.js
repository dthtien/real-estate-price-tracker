import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// core components
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import Card from "components/Card/Card.js";
import CardAvatar from "components/Card/CardAvatar.js";
import CardBody from "components/Card/CardBody.js";

import avatar from "assets/img/profile.jpg";
import cv from "assets/img/cv.pdf";
import CustomHeader from "components/Header";

const styles = {
  cardCategoryWhite: {
    color: "rgba(255,255,255,.62)",
    margin: "0",
    fontSize: "14px",
    marginTop: "0",
    marginBottom: "0"
  },
  cardTitleWhite: {
    color: "#FFFFFF",
    marginTop: "0px",
    minHeight: "auto",
    fontWeight: "300",
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    marginBottom: "3px",
    textDecoration: "none"
  },
  cvFile: {
    minHeight: 700
  }
};

const useStyles = makeStyles(styles);

function UserProfile() {
  const classes = useStyles();
  return (
    <div>
      <CustomHeader
        title={"dthtien - Full stack developer (<strong>Rails/React</strong>)"}
      />
      <GridContainer>
        <GridItem xs={12} sm={12} md={8}>
          <iframe src={cv} width="100%" className={classes.cvFile} />
        </GridItem>

        <GridItem xs={12} sm={12} md={4}>
          <Card profile>
            <CardAvatar profile>
              <a href="#pablo" onClick={e => e.preventDefault()}>
                <img src={avatar} alt="..." />
              </a>
            </CardAvatar>
            <CardBody profile>
              <h6 className={classes.cardCategory}>
                Full stack developer (<strong>Rails/React</strong>)
              </h6>
              <i>A goal is something that goes away when you hit it</i>
            </CardBody>
          </Card>
        </GridItem>
      </GridContainer>
    </div>
  );
}

export default UserProfile;
