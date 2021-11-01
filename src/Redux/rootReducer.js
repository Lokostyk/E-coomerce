import {combineReducers} from "redux"
import { bestSellersReducer } from "./shopReducers";
import { basketReducer } from "./basketReducer";

const rootReducer = combineReducers({
    bestSeller: bestSellersReducer,
    basket: basketReducer
})

export default rootReducer