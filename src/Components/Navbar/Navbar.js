import React from "react"
import {Link} from "react-router-dom"

export default function Navbar() {
    return (
        <nav className="navbar">
            <Link className="logo" to="/">
                <img src="pictures/logo.png" />
                <div/>
                <p>JourneyEmpire</p>
            </Link>
            <ul>
                <li>
                    <ul className="products">
                        <Link to="/#field" className="navLink" >Products</Link>
                        <div>
                        <li><Link to="/#field" className="subNavLink" >Boots</Link></li>
                        <li><Link to="/#field" className="subNavLink" >Jackets</Link></li>
                        <li><Link to="/#field" className="subNavLink" >T-shirts</Link></li>
                        <li><Link to="/#field" className="subNavLink" >Trousers</Link></li>
                        </div>
                    </ul>
                </li>
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
