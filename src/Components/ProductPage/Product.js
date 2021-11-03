import { nanoid } from 'nanoid'
import React,{useEffect, useRef, useState} from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { useLocation } from 'react-router'
import gsap from 'gsap'

import { ADD_TO_BASKET } from '../../Redux/basketTypes'

export default function Product() {
    let img = useRef(null)
    const {pathname} = useLocation()
    const id = Number(pathname.slice(pathname.lastIndexOf("/")+1))
    const productData = useSelector((state)=>state.bestSeller.bestSellers.filter(item=>item.id === id)[0])
    const dispatch = useDispatch()
    const [currentImg,setCurrentImg] = useState("/pictures/polar-black.jpg")

    useEffect(()=>{
        gsap.from(img,{opacity:0,duration:1})
    },[])
    return (
        <div className="productContainer">
            <div className="product">
                <img ref={e=>img=e} src={currentImg} />
                <div className="productInfo">
                    <h1>{productData.name}</h1>
                    <p>{productData.price}<span style={{color:"#e6a519"}}>$</span></p>
                    <p style={{fontWeight:"bold"}}>Colors</p>
                    <form>
                        {productData.colors.map((item,index)=>{
                            return (<input key={item} type="radio" name="colors" onClick={()=>setCurrentImg(productData.imgs[index])} style={{backgroundColor:item}}/>)
                        })}
                    
                    </form>
                    <button className="addBtn" onClick={()=>dispatch({type:ADD_TO_BASKET,payload:{id:nanoid(),currentImg,quantity:1,name:productData.name,price:productData.price}})}>Add to Bag</button>
                </div>
            </div>
        </div>
    )
}
