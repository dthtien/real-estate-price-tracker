/*eslint-disable*/
import React from "react";
import PropTypes from "prop-types";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import ListItem from "@material-ui/core/ListItem";
import List from "@material-ui/core/List";
import { useTranslation } from "react-i18next";
// core components
import styles from "assets/jss/material-dashboard-react/components/footerStyle.js";

const useStyles = makeStyles(styles);

export default function Footer(props) {
  const { i18n } = useTranslation();
  const changeLanguage = lng => {
    i18n.changeLanguage(lng);
  };

  const classes = useStyles();
  return (
    <footer className={classes.footer}>
      <div className={classes.container}>
        <div className={classes.left}>
          <List className={classes.list}>
            <ListItem className={classes.inlineBlock}>
              <a href="https://github.com/dthtien/real-estate-price-tracker" className={classes.block}>
                Github
              </a>
            </ListItem>
            <ListItem className={classes.inlineBlock}>
              <a
                href="https://www.visualcv.com/dthtien1"
                className={classes.block}
                target="_blank"
              >
                CV
              </a>
            </ListItem>
            <ListItem className={classes.inlineBlock}>
              <a onClick={() => changeLanguage("vn")} className={classes.block}>Tiếng Việt</a>
            </ListItem>
            <ListItem className={classes.inlineBlock}>
              <a onClick={() => changeLanguage("en")} className={classes.block}>English</a>
            </ListItem>
          </List>
        </div>
        <p className={classes.right}>
          <span>
            &copy; {1900 + new Date().getYear()}{" "}
            <a
              href="https://github.com/dthtien"
              target="_blank"
              className={classes.a}
            >
              dthtien
            </a>
            , made with love for a better web
          </span>
        </p>
      </div>
    </footer>
  );
}
