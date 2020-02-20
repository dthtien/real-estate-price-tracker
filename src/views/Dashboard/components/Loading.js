import React from "react";
import { districts } from "utils";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import Loading from "components/Loading";
import { useTranslation } from "react-i18next";

const useStyles = makeStyles(theme => ({
  root: {
    width: "100%",
    backgroundColor: theme.palette.background.paper
  },
  districtName: {
    textTransform: "capitalize"
  },
  loadingText: {
    marginLeft: 10,
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
      <Loading ready={false} />
      <List className={classes.root}>
        <h5 className={classes.loadingText}>{t("Loading") + "..."}</h5>
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
