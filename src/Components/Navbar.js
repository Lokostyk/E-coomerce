import React from 'react'
import {Link} from "react-router-dom"

export default function Navbar() {
    return (
        <nav className="navbar">
            <a className="logo">
                <img src="pictures/logo.png" />
                <div/>
                <p>JourneyEmpire</p>
            </a>
            <ul>
                <li><Link to="/#field" className="navLink">Products</Link></li>
                <li><Link to="/" className="navLink">About Us</Link></li>
                <li><Link to="/" className="navLink">Contact</Link></li>
                <li><Link to="/" className="navLink">Info</Link></li>
            </ul>
            <div className="cart">
                <img src="pictures/shopping-bag.png"/>
                <span>0</span>
            </div>
        </nav>
    )
}
