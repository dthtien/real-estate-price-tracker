import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import ReactGA from "react-ga";
import { Router, Route, Switch } from "react-router-dom";
import WebFont from "webfontloader";
import { Provider } from "react-redux";
import store from "./utils/createStore";
import "utils/i18n";
import { useTranslation } from "react-i18next";

// core components
import General from "layouts/General.js";
import LandingPage from "layouts/LandingPage";
import Privacy from "layouts/Privacy";

import "assets/css/material-dashboard-react.css?v=1.8.0";
import Header from "components/Header";

const hist = createBrowserHistory();
WebFont.load({
  google: {
    families: [
      "Inter:300,400,500,700,800",
      "sans-serif",
      "Material+Icons",
      "Raleway:700,800"
    ]
  }
});

ReactGA.initialize("UA-156171719-1");

const App = () => {
  const { t } = useTranslation();

  return (
    <Provider store={store}>
      <Header title={t("title")} />
      <Router history={hist}>
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route path="/app" component={General} />
          <Route path="/privacy" component={Privacy} />
        </Switch>
      </Router>
    </Provider>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
