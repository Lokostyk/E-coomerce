import {createStore} from "redux"
import { bestSellersReducer } from "./shopReducers"

const store = createStore(bestSellersReducer)

export default store