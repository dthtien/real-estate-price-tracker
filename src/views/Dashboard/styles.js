import common from "assets/jss/material-dashboard-react/views/dashboardStyle.js";
import tableCommonStyle from "assets/jss/material-dashboard-react/components/tableStyle.js";

const styles = {
  ...common,
  searchForm: {
    display: "flex"
  },
  addressInput: {
    width: "95%"
  },
  searchButton: {
    marginLeft: 5
  },
  priceNumber: {
    fontSize: 14,
    fontWeight: "bold"
  },
  chartContent: {
    overflowX: "auto"
  }
};

export const landStyles = theme => ({
  ...tableCommonStyle,
  tableContent: {
    overflow: "auto",
    height: 300
  },
  cardTitle: {
    "& div": {
      float: "right",
      color: "white"
    }
  },
  landDetail: {
    cursor: "pointer"
  },
  addressDetail: {
    cursor: "pointer"
  },
  clickable: {
    cursor: "pointer",
    textDecoration: "underline"
  },
  filterForm: {
    display: "flex",
    marginTop: 10,
    "& svg": {
      color: "white"
    },
    [theme.breakpoints.down("sm")]: {
      display: "block"
    }
  },
  priceSlider: {
    width: "50%",
    "&:first-child": {
      marginRight: 20
    },
    [theme.breakpoints.down("sm")]: {
      width: "100%"
    }
  }
});

export default styles;
