import React from "react";
import { ReactReduxContext } from "react-redux";

import reducerRegistry from "./reducerRegistry";
import { sagaMiddleware } from "./createStore";

export default ({ key, reducer, saga }) => WrappedComponent => {
  class ReducerInjector extends React.Component {
    static WrappedComponent = WrappedComponent;

    static contextType = ReactReduxContext;

    static displayName = `withReducer(${WrappedComponent.displayName ||
      WrappedComponent.name ||
      "Component"})`;

    constructor(props, context) {
      super(props, context);
      reducerRegistry.register(key, reducer);
      if (saga) {
        sagaMiddleware.run(saga);
      }
    }

    render() {
      return <WrappedComponent {...this.props} />;
    }
  }

  return ReducerInjector;
};
