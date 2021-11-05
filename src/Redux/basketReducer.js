import {
    ADD_TO_BASKET,
    REOMVE_FROM_BASKET,
    INCREASE_ITEM_QUANTITY,
    FROM_STORAGE_TO_BASKET
} from "./basketTypes"

const initialState = {
    contents:[]
}

export const basketReducer = (state = initialState,action) => {
    switch(action.type){
        case ADD_TO_BASKET: return {
            contents:[action.payload,...state.contents]
        }
        case REOMVE_FROM_BASKET: return {
            contents:[...state.contents.filter(item=>item.id !== action.payload.id)]
        }
        case INCREASE_ITEM_QUANTITY: return {
            contents:[...state.contents.reduce((arr,item)=>{
                if(item.id === action.payload.id){
                    return [...arr,{...item,quantity:action.payload.quantity}]
                }else {
                    return [...arr,item]
                }
            },[])]
        }
        case FROM_STORAGE_TO_BASKET: return {
            contents:[...action.payload]
        }
        default: return state
    }
}