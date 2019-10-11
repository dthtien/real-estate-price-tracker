import { combineReducers, applyMiddleware, createStore, compose } from "redux";
import reducerRegistry from "./reducerRegistry";
import createSagaMiddleware from "redux-saga";

export const sagaMiddleware = createSagaMiddleware();

const initialState = {};
const enhancers = [];
const middleware = [sagaMiddleware];

if (process.env.NODE_ENV === "development") {
  // eslint-disable-next-line no-underscore-dangle
  const devToolsExtension = window.__REDUX_DEVTOOLS_EXTENSION__;

  if (typeof devToolsExtension === "function") {
    enhancers.push(devToolsExtension());
  }
}

const composedEnhancers = compose(
  applyMiddleware(...middleware),
  ...enhancers
);

const reducer = combineReducers(reducerRegistry.reducers);
const store = createStore(reducer, initialState, composedEnhancers);

const combine = reducers => {
  const reducerNames = Object.keys(reducers);
  Object.keys(initialState).forEach(item => {
    if (reducerNames.indexOf(item) === -1) {
      reducers[item] = (state = null) => state;
    }
  });

  return combineReducers(reducers);
};

reducerRegistry.emitChange = reducers =>
  store.replaceReducer(combine(reducers));

export default store;
