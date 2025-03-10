import { applyMiddleware, Action, combineReducers } from "redux";
import { configureStore, Tuple } from "@reduxjs/toolkit";
import { createLogger } from "redux-logger";

import thunk from "redux-thunk";
import getRootReducer from "./reducers";

const logger = createLogger({
  collapsed: false,
  timestamp: true,
  level: {
    prevState: false,
    action: "log",
    nextState: false,
  },
  predicate: (_, action) => action.type,
});

function getStore() {
  //   const enabledMiddlewares = [thunk, logger].filter(Boolean);
  //   const middlewares = applyMiddleware(...enabledMiddlewares);
  //   const enabledMiddlewares = [thunk].filter(Boolean);
  //   const middlewares = applyMiddleware(thunk);

  const rootReducer = getRootReducer();

  //   const store = storeCreator(rootReducer, undefined, middlewares);

  const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
  });

  return store;
}

export default getStore;
