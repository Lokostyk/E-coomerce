import React from 'react'
import BestSellerItem from './BestSellerItem'

export default function BestSellers() {
    const itemList = [{id:1,img:"pictures/polar-brown.jpg",price:"49,99$"},{id:1,img:"pictures/polar-black.jpg",price:"49,99$"}]
    return (
        <fieldset className="bestSellers">
            <legend>Best Sellers</legend>
            <BestSellerItem />
        </fieldset>
    )
}
