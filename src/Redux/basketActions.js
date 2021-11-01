import {ADD_TO_BASKET} from "./basketTypes"

export const addToBasket = (id,img) => {
    return {
        type: ADD_TO_BASKET,
        payload: {
            id,
            img
        }
    }
}