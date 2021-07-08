import { createStore, combineReducers } from "redux";

import { connectRouter } from "connected-react-router";
import { createBrowserHistory } from "history";
import date from "./modulse/date";

export const history = createBrowserHistory();

// root reducer
const rootReducer = combineReducers({
    date: date,
    router: connectRouter(history),
});


const store = (initialStore) => createStore(rootReducer);

export default store();