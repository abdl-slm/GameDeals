import { combineReducers } from "redux";
import { quoteReducer } from "./quoteReducer";
import { dealsReducer, singleDealReducer } from "./dealsReducer";

const rootReducer = combineReducers({
    quoteReducer,
    dealsReducer,
    singleDealReducer
})

export default rootReducer ;