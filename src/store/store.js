import {applyMiddleware, createStore} from "redux";
import {composeWithDevTools} from "redux-devtools-extension";
import config from "../config";
import {loadState, saveState} from "./localStorage";
import rootReducer from "./reducers/rootReducer";
import thunk from "redux-thunk";

const persistedState = loadState();
const store = config.isProduction()
    ? createStore(rootReducer, persistedState, applyMiddleware(thunk))
    : createStore(rootReducer, persistedState, composeWithDevTools(applyMiddleware(thunk)));

store.subscribe(() => {
    saveState(store.getState());
});

export default store;
