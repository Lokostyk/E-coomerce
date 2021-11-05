import {
    ADD_TO_BASKET,
    REOMVE_FROM_BASKET,
    INCREASE_ITEM_QUANTITY,
    FROM_STORAGE_TO_BASKET
} from "./basketTypes"

export const addToBasket = (id,img,quantity,price) => {
    return {
        type: ADD_TO_BASKET,
        payload: {
            id,
            img,
            quantity,
            price
        }
    }
}
export const removeFromBasket = (id) => {
    return {
        type: REOMVE_FROM_BASKET,
        payload:{
            id
        }
    }
}
export const increaseItemQuantity = (id,quantity) => {
    return {
        type: INCREASE_ITEM_QUANTITY,
        payload:{
            id,
            quantity
        }
    }
}
export const fromsStorageToBasket = (basket) => {
    return {
        type: FROM_STORAGE_TO_BASKET,
        payload:basket
    }
}