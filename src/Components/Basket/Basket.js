import React from "react"
import { useSelector } from "react-redux"
import EmptyBasket from "./subcomponents/EmptyBasket"

export default function Basket() {
    const basket = useSelector((state)=>state.basket.contents)
    
    return (
        <div className="basketContainer">
            <div className="preview">
                <p>YOOOO</p>
                <div className="square"/>
                <p>YOOOO
                </p>
                <div className="square"/>
                <p>YOOOO</p>
            </div>
            <div className="basket">
                <div className="basketItem">ytyt</div>

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
            {/* {basket.length===0?
                <EmptyBasket />:""
            } */}
        </div>
    )
}
