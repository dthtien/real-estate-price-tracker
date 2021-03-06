/*!

=========================================================
* Material Dashboard React - v1.8.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-dashboard-react
* Copyright 2019 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/material-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
// @material-ui/icons
import React from "react";
import Dashboard from "@material-ui/icons/Dashboard";
import Person from "@material-ui/icons/Person";
import LibraryBooks from "@material-ui/icons/LibraryBooks";
import BubbleChart from "@material-ui/icons/BubbleChart";
import Notifications from "@material-ui/icons/Notifications";
// core components/views for Admin layout
import UserProfile from "views/UserProfile/UserProfile.js";
import TableList from "views/TableList/TableList.js";
import Typography from "views/Typography/Typography.js";
import Icons from "views/Icons/Icons.js";
import NotificationsPage from "views/Notifications/Notifications.js";
import loadable from "./utils/loadable";
import Loading from "components/Loading";

const dashboardRoutes = [
  {
    path: "/app/dashboard",
    name: "Dashboard",
    icon: Dashboard,
    component: loadable(() => import("views/Dashboard"), {
      fallback: <Loading />
    })
  },
  {
    path: "/app/lands/:id",
    name: "LandDetails",
    component: loadable(() => import("views/Lands/Show"), {
      fallback: <Loading />
    }),
    hide: true
  },
  {
    path: "/app/addresses/:id",
    name: "AddressDetails",
    component: loadable(() => import("views/Addresses/Show"), {
      fallback: <Loading />
    }),
    hide: true
  },
  {
    path: "/app/cv",
    name: "About me",
    icon: Person,
    component: UserProfile
  },
  {
    path: "/table",
    name: "Table List",
    icon: "content_paste",
    component: TableList,
    hide: process.env.NODE_ENV !== "development"
  },
  {
    path: "/typography",
    name: "Typography",
    icon: LibraryBooks,
    component: Typography,
    hide: process.env.NODE_ENV !== "development"
  },
  {
    path: "/app/icons",
    name: "Icons",
    icon: BubbleChart,
    component: Icons,
    hide: process.env.NODE_ENV !== "development"
  },
  {
    path: "/notifications",
    name: "Notifications",
    icon: Notifications,
    component: NotificationsPage,
    layout: "/admin",
    hide: process.env.NODE_ENV !== "development"
  }
];

export default dashboardRoutes;
