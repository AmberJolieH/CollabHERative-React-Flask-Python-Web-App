import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import showcaseReducer from "./showcase";
import sessionReducer from './session'
import chatReducer from "./chat"
import userReducer from "./users"

const rootReducer = combineReducers({
    session: sessionReducer,
    showcases: showcaseReducer,
    chat: chatReducer,
    users: userReducer
});

let enhancer;

if (process.env.NODE_ENV === "production") {
    enhancer = applyMiddleware(thunk);
} else {
    const logger = require("redux-logger").default;
    const composeEnhancers =
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
    enhancer = composeEnhancers(applyMiddleware(thunk, logger));
}

const configureStore = (preloadedState) => {
    return createStore(rootReducer, preloadedState, enhancer);
};

export default configureStore;
