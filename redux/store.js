import { createStore, applyMiddleware } from "redux";
import { HYDRATE, createWrapper } from "next-redux-wrapper";
import { composeWithDevTools } from "redux-devtools-extension";
import thunkMiddleware from "redux-thunk";
import reducers from "./reducers";

const bindMiddleware = (middleware) => {
    if (process.env.NODE_ENV !== "production") {
        return composeWithDevTools(applyMiddleware(...middleware));
    }
    return applyMiddleware(...middleware);
};

const reducer = (state, action) => {
    if (action.type === HYDRATE) {
        return {
            ...state,
            ...action.payload,
        };
    } else {
        return reducers(state, action);
    }
};

const initStore = () => {
    return createStore(reducer, bindMiddleware([thunkMiddleware]));
};

export const wrapper = createWrapper(initStore);
