import React,{useEffect,useRef} from 'react'
import gsap from 'gsap'

import BestSellers from './BestSellers'

export default function Main() {
    let main = useRef(null)

    useEffect(()=>{
        const timeLine = gsap.timeline({defaults:{duration:1}})
        timeLine
            .from(main.querySelector(".mainTitle"),{opacity:0},.4)
            .from(main.querySelectorAll(".mainTxt"),{height:0})
            .to(main.querySelector(".mainBtn"),{padding: "0.5rem 3.5rem",maxWidth: "400px"})
            .to(main.querySelector(".mainBtn"),{border: "6px solid white"})
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
        </>
    )
}
