import React from 'react'
import { connect } from 'react-redux'

function ProductsContainer({bestSellers}) { 
    return (
        bestSellers.map(item=>{
            return (
                <>
                <div className="productsItem">
                    <img src={`${item.img}`}/>
                    <p>Eultra warm booster</p>
                    <span className="breaker"></span>
                    <p className="price">49,99<span>$</span></p>
                </div>
                </>
            )
        })
    )
}

const mapStateToProps = state => {
    return {
        bestSellers: state.bestSellers
    }
}
export default connect(mapStateToProps)(ProductsContainer)