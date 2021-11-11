import React, { useEffect, useRef, useState } from "react"
import {Link} from "react-router-dom"
import { useSelector } from "react-redux"

export default function Navbar() {
    const basketItemCount = useSelector((state)=>state.basket.contents.length)
    const [mobileSidebar,setMobileSidebar] = useState(false)

    useEffect(()=>{
        const navbarOverflow = document.querySelector(".linksContainer").style
        if(mobileSidebar){
            setTimeout(()=>{
                navbarOverflow.overflow = "visible"
            },300)
            window.addEventListener("click",closeSidebar)
        }else {
            navbarOverflow.overflow = "hidden"
        }
    },[mobileSidebar])
    const closeSidebar = ()=>{
        setMobileSidebar(false)
        window.removeEventListener("click",closeSidebar)
    }
    return (
        <nav className={`navbar ${mobileSidebar?"activeNavbar":""}`}>
            <Link className="logo" to="/">
                <img src="/pictures/logo.png" />
                <div/>
                <p>JourneyEmpire</p>
            </Link>
            <button className="hamburgerBtn" onClick={()=>setMobileSidebar(true)}><img src="/pictures/hamburger.svg"/></button>
            <ul className="linksContainer">
                <li>
                    <ul className="products">
                        <Link to="/products#all" className="navLink" >Products</Link>
                        <div>
                        <li><Link to="/products#boots" className="subNavLink" >Boots</Link></li>
                        <li><Link to="/products#jackets" className="subNavLink" >Jackets</Link></li>
                        <li><Link to="/products#t-shirts" className="subNavLink" >T-shirts</Link></li>
                        <li><Link to="/products#trousers" className="subNavLink" >Trousers</Link></li>
                        </div>
                    </ul>
                </li>
                <li><Link to="/#aboutUs" className="navLink">About Us</Link></li>
                <li><Link to="/#contactContainer" className="navLink">Contact</Link></li>
                <li><Link to="/" className="navLink">Info</Link></li>
            </ul>
            <Link to="/basket" className="cart">
                <img src="/pictures/shopping-bag.png"/>
                <span>{basketItemCount}</span>
            </Link>
        </nav>
    )
}
