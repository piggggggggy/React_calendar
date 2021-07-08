import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import { connectRouter } from "connected-react-router";
import { createBrowserHistory } from "history";
import Date from "./modulse/date";
import Calendar from "./modulse/calendar";

export const history = createBrowserHistory();

// root reducer
const rootReducer = combineReducers({
    date: Date,
    calendar: Calendar,
    router: connectRouter(history),
});


const middlewares = [thunk];
const env = process.env.NOD_ENV;
if (env === "development") {
    const {logger} = require("redux-logger");
    middlewares.push(logger);
}

const composeEnhancers =
  typeof window === "object" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
        // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
      })
    : compose;

const enhancer = composeEnhancers(applyMiddleware(...middlewares));
const store = (initialStore) => createStore(rootReducer, enhancer);

export default store();