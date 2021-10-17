import React from 'react'
import {Link} from "react-router-dom"

export default function Navbar() {
    return (
        <nav className="navbar">
            <ul>
                <li><Link to="/#field" className="navLink">Products</Link></li>
            </ul>
            <ul>
                <li><Link to="/" className="navLink">About Us</Link></li>
            </ul>
            <ul>
                <li><Link to="/" className="navLink">Contact</Link></li>
            </ul>
            <ul>
                <li><Link to="/" className="navLink">Info</Link></li>
            </ul>
        </nav>
    )
}
