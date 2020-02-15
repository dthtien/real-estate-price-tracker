import React from "react";
import PropTypes from "prop-types";
import Typography from "@material-ui/core/Typography";
import { useTranslation } from "react-i18next";
import Button from "@material-ui/core/Button";

const Contact = ({ loadUserInfo, user, classes }) => {
  const { t } = useTranslation();
  const notFound = t("Not found");

  if (user) {
    console.log(user);
    const { attributes } = user;
    if (attributes) {
      return (
        <>
          <Typography
            variant="body1"
            className={`${classes.description} ${classes.p10}`}
          >
            <strong>{t("Name")}: </strong>
            {attributes.name || notFound}
          </Typography>
          <Typography
            variant="body1"
            className={`${classes.description} ${classes.p10}`}
          >
            <strong>{t("Email")}: </strong>
            {attributes.email || notFound}
          </Typography>
          <Typography
            variant="body1"
            className={`${classes.description} ${classes.p10}`}
          >
            <strong>{t("Phone number")}: </strong>
            {attributes.phone_number || notFound}
          </Typography>
        </>
      );
    }

    return (
      <Typography
        variant="body1"
        className={`${classes.description} ${classes.p10}`}
      >
        <strong>{t("Seller Information")}: </strong>
        {notFound}
      </Typography>
    );
  }

  return (
    <Button onClick={loadUserInfo} variant="outlined">
      {t("Seller Information")}
    </Button>
  );
};

Contact.propTypes = {
  loadUserInfo: PropTypes.func.isRequired,
  user: PropTypes.object,
  classes: PropTypes.object.isRequired
};

export default Contact;
