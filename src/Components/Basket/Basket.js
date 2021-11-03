import React from "react"
import { useSelector } from "react-redux"

import BasketItem from "./subcomponents/BasketItem"
import EmptyBasket from "./subcomponents/EmptyBasket"

export default function Basket() {
    const basket = useSelector((state)=>state.basket.contents)
    
    return (
        <div className="basketContainer">
            <div className="preview">
                <p>Your Bag</p>
                <p>Payment {"&"} Delivery</p>
                <p>Ready</p>
            </div>
            <div className="basket">
                {basket.length===0?
                    <EmptyBasket />:
                    basket.map((item)=>{
                        return <BasketItem item={item}/>
                    })
                }
            </div>
            <div className="summary">
                <h1>Summary</h1>
                <span />
                <div>
                    <p>Total</p>
                    <p>0.00<span style={{color:"#e6a519"}}>$</span></p>
                </div>
                <button>Checkout</button>
            </div>
        </div>
    )
}
