import {ADD_TO_BASKET,REOMVE_FROM_BASKET,INCREASE_ITEM_QUANTITY} from "./basketTypes"

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
        default: return state
    }
}