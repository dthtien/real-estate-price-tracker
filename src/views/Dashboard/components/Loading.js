import React from "react";
import { districts } from "utils";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import Spinner from "components/Loading/Spiner";

const useStyles = makeStyles(theme => ({
  root: {
    width: "100%",
    backgroundColor: theme.palette.background.paper
  },
  districtName: {
    textTransform: "capitalize"
  },
  loadingText: {
    marginBottom: 10,
    textAlign: "center"
  },
  item: {
    cursor: "pointer",
    textAlign: "center",
    "&:hover": {
      backgroundColor: "#eeeeee"
    }
  }
}));

const Placeholder = () => {
  const classes = useStyles();
  const { t } = useTranslation();

  return (
    <>
      <List className={classes.root}>
        <h5 className={classes.loadingText}>{t("Loading") + "..."}</h5>
        <div className={classes.loadingText}>
          <Spinner />
        </div>
        {districts.map(district => (
          <Link to={`/app/addresses/${district.slug}`} key={district.slug}>
            <ListItem className={classes.item}>
              <ListItemText
                className={classes.districtName}
                primary={district.name}
              />
            </ListItem>
          </Link>
        ))}
      </List>
    </>
  );
};

export default Placeholder;
