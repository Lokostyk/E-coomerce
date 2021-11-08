import React from 'react'
import { Link } from 'react-router-dom'

export default function BestSellerItem(props) {
    const item = props.item
    
    return (
        <Link to={`/products/${item.id}`}className="itemPreview">
            <img src={item.imgs[0]}/>
            <div></div>
            <span>{item.price}$</span>
        </Link>
    )
}
