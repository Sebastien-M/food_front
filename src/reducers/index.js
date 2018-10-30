import connection from "./connection";
import account from "./account";
import recipe from "./recipes"
import combineReducers from "redux/src/combineReducers";

export default combineReducers({connection, account, recipe});
