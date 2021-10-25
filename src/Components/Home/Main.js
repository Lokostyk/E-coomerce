import React,{useEffect,useRef} from 'react'
import gsap from 'gsap'
import { CSSRulePlugin } from "gsap/all";

import BestSellers from '../BestSellers/BestSellers'
import AboutUs from '../About.js/AboutUs';
import ProductsCategories from './subcomponents/ProductsCategories';

gsap.registerPlugin(CSSRulePlugin)
export default function Main() {
    let main = useRef(null)
    
    useEffect(()=>{
        document.querySelector(".navbar").style.position = "fixed"
        const rule1 = CSSRulePlugin.getRule(".mainBackground .mainContent .mainBtn:before")
        const rule2 = CSSRulePlugin.getRule(".mainBackground .mainContent .mainBtn:after")
        
        const timeLine = gsap.timeline({defaults:{duration:1}})
        timeLine
            .from(main.querySelector(".mainTitle"),{opacity:0},.4)
            .from(main.querySelectorAll(".mainTxt"),{height:0})
            .from(main.querySelector(".mainBtn"),{padding: "1rem 0rem",maxWidth: "0px"})
            .from([rule1,rule2],{visibility:"hidden",duration:.1})
            .from([rule1,rule2],{height:"0%",width:"0%"})
    },[])

    return (
        <>
            <div ref={el=>main=el} className="mainBackground">
                <img className="backgroundImage" src="/pictures/mountains1.jpg" alt="mountains"/>
                <div className="mainContent">
                    <p className="mainTitle">Go <span>&nbsp;out</span>door</p>
                    <div></div>
                    <div>
                        <p className="mainTxt">with <span>Confidence</span></p>
                        <p className="mainTxt">and <span>Comfort</span></p>
                        <button className="mainBtn">explore</button>
                    </div>
                </div>
            </div>
            <BestSellers />
            <ProductsCategories />
            <AboutUs />
        </>
    )
}
