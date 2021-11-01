import {ADD_TO_BASKET} from "./basketTypes"

const initialState = {
    contents:[]
}

export const basketReducer = (state = initialState,action) => {
    switch(action.type){
        case ADD_TO_BASKET: return {
            contents:[...state.contents,action.payload]
        }
        default: return state
    }
}