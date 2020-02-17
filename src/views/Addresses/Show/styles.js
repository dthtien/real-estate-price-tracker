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
  titleText: {
    fontWeight: "bold",
    textTransform: "capitalize",
    float: "left"
  },
  priceInfoText: {
    fontWeight: "bold",
    marginTop: 10
  },
  detailText: {
    fontWeight: "bold",
    textAlign: "center",
    fontSize: "1.3em",
    marginBlockStart: 0,
    marginBlockEnd: 0,
    "& i": {
      fontSize: "0.7em",
      fontWeight: 300,
      "& span": {
        color: "#0ee80e"
      }
    }
  },
  chartContent: {
    overflowX: "auto"
  },
  priceRange: {
    marginTop: "1em"
  }
};

export const landsStyle = {
  ...tableCommonStyle,
  tableContent: {
    overflow: "auto",
    height: 500
  },
  tableHeadCell: {
    ...tableCommonStyle.tableHeadCell,
    cursor: "pointer"
  },
  cardTitle: {
    "& div": {
      float: "right",
      color: "white"
    }
  }
};

export default styles;
