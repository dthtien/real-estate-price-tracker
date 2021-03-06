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
    paddingTop: 15
  },
  detailText: {
    fontWeight: "bold",
    textAlign: "center",
    fontSize: "1em",
    marginBlockStart: 0,
    marginBlockEnd: 0
  },
  chartContent: {
    overflowX: "auto"
  },
  priceRange: {
    marginTop: "1em"
  },
  detailLink: {
    float: "right",
    textTransform: "inherit",
    color: "##252525"
  },
  previewImages: {
    textAlign: "center"
  },
  description: {
    lineHeight: 2,
    marginBottom: 10,
    display: "block"
  },
  p10: {
    padding: "0 15px"
  }
};

export const historyPriceStyles = {
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
