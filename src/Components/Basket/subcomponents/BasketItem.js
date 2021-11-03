import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { REOMVE_FROM_BASKET,INCREASE_ITEM_QUANTITY } from "../../../Redux/basketTypes"

export default function BasketItem({item}) {
    const dispath = useDispatch()
    const [numberOfItems,setNumberOfItems] = useState(Number(item.quantity))
    console.log(item)
    useEffect(()=>{
        dispath({type:INCREASE_ITEM_QUANTITY,payload:{id:item.id,quantity:numberOfItems}})    
    },[numberOfItems])
    return (
        <div className="itemContainer">
            <img src={item.currentImg} className="productImage"/>
            <p>{item.name}</p>
            <button onClick={()=>numberOfItems>1?setNumberOfItems(numberOfItems-1):null}>
                <img src="/pictures/minus.svg" className="controlBtn" />
            </button>
            <input type="number" value={numberOfItems} 
            onChange={e=>e.target.value>1?setNumberOfItems(Number(e.target.value)):setNumberOfItems("")}
            onBlur={e=>e.target.value===""?setNumberOfItems(1):null}/>
            <button onClick={()=>setNumberOfItems(numberOfItems+1)}>
                <img src="/pictures/plus.svg" className="controlBtn"/>
            </button>
            <p className="price">{item.price}<span style={{color:"#e6a519"}}>$</span></p>
            <button onClick={()=>dispath({type:REOMVE_FROM_BASKET,payload:{id:item.id}})}>
                <img src="/pictures/delete.svg" className="deleteBtn"/>
            </button>
        </div>
    )
}
