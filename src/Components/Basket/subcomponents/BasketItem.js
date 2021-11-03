import React, { useState } from 'react'

export default function BasketItem({item}) {
    const [numberOfItems,setNumberOfItems] = useState(1)

    return (
        <div className="itemContainer">
            <img src={item.currentImg} className="productImage"/>
            <p>ajdoajwidawod</p>
            <button onClick={()=>numberOfItems>1?setNumberOfItems(numberOfItems-1):null}>
                <img src="/pictures/minus.svg" className="controlBtn" />
            </button>
            <input type="number" value={numberOfItems} 
            onChange={e=>e.target.value>0?setNumberOfItems(Number(e.target.value)):setNumberOfItems(1)}
            onBlur={console.log("object")}
            />
            <button onClick={()=>setNumberOfItems(numberOfItems+1)}>
                <img src="/pictures/plus.svg" className="controlBtn"/>
            </button>
            <p className="price">0.00<span style={{color:"#e6a519"}}>$</span></p>
            <button>
                <img src="/pictures/delete.svg" className="deleteBtn"/>
            </button>
        </div>
    )
}
