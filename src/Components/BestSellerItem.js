import React from 'react'

export default function BestSellerItem(props) {
    const item = props.item

    return (
        <div className="itemPreview">
            <img src={item.img}/>
            <span></span>
            <span>{item.price}</span>
        </div>
    )
}
