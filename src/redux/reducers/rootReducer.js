import productReducers from "./productReducers";
import { combineReducers } from "redux";


const rootReducer = combineReducers({
        products:productReducers
})
export default rootReducer