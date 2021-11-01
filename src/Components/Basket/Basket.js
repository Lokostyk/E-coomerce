import React from "react"
import { useSelector } from "react-redux"
import EmptyBasket from "./subcomponents/EmptyBasket"

export default function Basket() {
    const basket = useSelector((state)=>state.basket.contents)
    
    return (
        <div>
            {basket.length===0?
                <EmptyBasket />:""
            }
        </div>
    )
}
