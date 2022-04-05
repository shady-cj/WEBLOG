import { combineReducers } from "redux";
import auth from "./auth";
import popup from "./popup";
export default combineReducers({
    auth,
    popup,
});
