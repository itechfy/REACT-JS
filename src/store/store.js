import { compose, applyMiddleware } from "redux";
import { createStore } from "redux";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { logger } from "redux-logger";
import { rootReducer } from "./root-reducer";

const thunk = require("redux-thunk").default; // thunk-middleware
const middleWares = [logger, thunk];

// To apply multiple store enhancers, we use compose
const composedEnhancer = compose(applyMiddleware(...middleWares));

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["cart"],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

// create(reducers,[preloaded_state], enhancers)
export const store = createStore(persistedReducer, undefined, composedEnhancer);

// enhancers provide additional functionality to add in redux-store
// such as Middlewares, time travel, persistence
// The only store enhancer that ships with Redux is applyMiddleware()

export const persistor = persistStore(store);
