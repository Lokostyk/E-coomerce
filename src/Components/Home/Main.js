import React,{useEffect,useRef} from 'react'
import gsap from 'gsap'
import { CSSRulePlugin } from "gsap/all";

import BestSellers from '../BestSellers/BestSellers'
import AboutUs from '../About.js/AboutUs';
import ProductsCategories from './subcomponents/ProductsCategories';

export default function Main() {
    let main = useRef(null)
    
    useEffect(()=>{
        const rule1 = CSSRulePlugin.getRule(".mainBackground .mainContent .mainBtn:before")
        const rule2 = CSSRulePlugin.getRule(".mainBackground .mainContent .mainBtn:after")
        
        const timeLine = gsap.timeline({defaults:{duration:1}})
        timeLine
            .from(main.querySelector(".mainTitle"),{opacity:0},.4)
            .from(main.querySelectorAll(".mainTxt"),{height:0})
            .to(main.querySelector(".mainBtn"),{padding: "1rem 4rem",maxWidth: "400px"})
            .to([rule1,rule2],{visibility:"visible",height:"100%",width:"100%"})
    },[])

    return (
        <>
            <div ref={el=>main=el} className="mainBackground">
                <div className="mainContent">
                    <p className="mainTitle">Go <span>&nbsp;out</span>door</p>
                    <div></div>
                    <div>
                        <p className="mainTxt">with <span>Confidence</span></p>
                        <p className="mainTxt">and <span>Comfort</span></p>
                        <button className="mainBtn">explore</button>
                    </div>
                </div>
                <img className="backgroundImage" src="/pictures/mountains1.jpg" alt="mountains"/>
            </div>
            <BestSellers />
            <ProductsCategories />
            <AboutUs />
        </>
    )
}
