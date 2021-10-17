import React from 'react'
import { connect } from 'react-redux'
import BestSellerItem from './BestSellerItem'

function BestSellers(props) {
    return (
        <fieldset id="field" className="bestSellers">
            <legend>Best Sellers</legend>
            {props.bestSellers.map(item=>{
                return <BestSellerItem key={item.id} item={item}/>
            })}
        </fieldset>
    )
}

const mapStateToProps = state => {
    return {
        bestSellers: state.bestSellers
    }
}

export default connect(mapStateToProps)(BestSellers)
