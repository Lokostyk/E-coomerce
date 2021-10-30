import React from "react"
import { Link } from "react-router-dom"

export default function ProductsCategories() {

    return (
        <div className="categories">
            <h1>Choose from</h1>
            <Link to="/products#boots">
                <h2>Boots</h2>
                <img src="pictures/boots.jpg"/>
            </Link>
            <Link to="/products#jackets">
                <h2>Jackets</h2>
                <img src="pictures/jacket.jpg"/>
            </Link>
            <Link to="/products#t-shirts">
                <h2>T-shirts</h2>
                <img src="pictures/t-shirt.webp"/>
            </Link>
            <Link to="/products#trousers">
                <h2>Trousers</h2>
                <img src="pictures/trousers.jpg"/>
            </Link>
        </div>
    )
}
