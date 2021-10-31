import React,{useEffect, useRef, useState} from 'react'
import { useSelector } from 'react-redux'
import { useLocation } from 'react-router'
import gsap from 'gsap'

export default function Product(props) {
    let img = useRef(null)
    const {pathname} = useLocation()
    const id = Number(pathname.slice(pathname.lastIndexOf("/")+1))
    const productData = useSelector((state)=>state.bestSellers.filter(item=>item.id === id)[0])
    const [currentImg,setCurrentImg] = useState("/pictures/jacket.jpg")

    useEffect(()=>{
        gsap.from(img,{opacity:0,duration:1})
    },[img,currentImg])
    return (
        <div className="productContainer">
            <div className="product">
                <img ref={e=>img=e} src={currentImg} />
                <div className="productInfo">
                    <h1>{productData.name}</h1>
                    <p>{productData.price}<span style={{color:"#e6a519"}}>$</span></p>
                    <p style={{fontWeight:"bold"}}>Colors</p>
                    <input type="radio" />
                    <button className="addBtn" onClick={()=>setCurrentImg("/pictures/trousers.jpg")}>Add to Bag</button>
                </div>
            </div>
        </div>
    )
}
