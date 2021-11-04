import React from "react"
import { useSelector } from "react-redux"

import BasketItem from "./subcomponents/BasketItem"

export default function Basket() {
    const basket = useSelector((state)=>state.basket.contents)

    return (
        <section className="basketContainer">
            <div className="preview">
                <p>Your Bag</p>
                <p>Payment {"&"} Delivery</p>
                <p>Ready</p>
            </div>
            <div className="basket">
                {basket.length===0?
                    <img src="/pictures/emptyCart.png" className="emptyBasketImg"/>:
                    basket.map((item)=>{
                        return <BasketItem key={item.id} item={item}/>
                    })
                }
            </div>
            <div className="summary">
                <div className="stickyScroll" style={{top:"10vh"}}>
                <h1>Summary</h1>
                <div className="productSumContainer">
                    {basket.map(item=>{
                        return (
                            <div key={item.id} className="productSumPreview">
                                <p>{item.name}<span>X{item.quantity}</span></p>
                                <p>
                                    {Math.round((Number(item.price)*Number(item.quantity))*100)/100}
                                    <span style={{color:"#e6a519"}}>$</span>
                                </p>
                            </div>
                        )
                    })}
                </div>
                {basket.length > 0?
                    <hr style={{width:"90%",borderTop:"1px solid grey",margin:"0 auto"}}/>:""}
                <div className="total">
                    <p>Total</p>
                    <p>{basket.reduce((sum,item)=>{
                        return Math.round((sum + (Number(item.price)*Number(item.quantity)))*100)/100
                    },0)}<span style={{color:"#e6a519"}}>$</span>
                    </p>
                </div>
                <button>Checkout</button>
                </div>
            </div>
        </section>
    )
}
