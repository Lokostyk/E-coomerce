import React from "react"
import {Link} from "react-router-dom"
import { useSelector } from "react-redux"

export default function Navbar() {
    const basketItemCount = useSelector((state)=>state.basket.contents.length)

    return (
        <nav className="navbar">
            <Link className="logo" to="/">
                <img src="/pictures/logo.png" />
                <div/>
                <p>JourneyEmpire</p>
            </Link>
            <ul>
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
                <li><Link to="/" className="navLink">About Us</Link></li>
                <li><Link to="/" className="navLink">Contact</Link></li>
                <li><Link to="/" className="navLink">Info</Link></li>
            </ul>
            <Link to="/basket" className="cart">
                <img src="/pictures/shopping-bag.png"/>
                <span>{basketItemCount}</span>
            </Link>
        </nav>
    )
}
