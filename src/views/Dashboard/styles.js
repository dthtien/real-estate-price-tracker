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

export const landStyles = {
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
  }
};

export default styles;
