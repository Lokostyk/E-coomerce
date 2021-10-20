import React from 'react'

export default function BestSellerItem(props) {
    const item = props.item

    return (
        <div className="itemPreview">
            <img src={item.img}/>
            <div></div>
            <span>{item.price}</span>
        </div>
    )
}
