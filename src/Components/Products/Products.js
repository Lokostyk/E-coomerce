import React,{useEffect,useState} from 'react'

export default function Products() {
    const [downPrice,setDownPrice] = useState()
    const [upPrice,setUpPrice] = useState()
    const [chosenProducts,setChosenProducts] = useState()
    return (
        <main className="productsContainer">
            <div></div>
            <div className="search"></div>
            <section className="filter">
                <div className="price">
                    <h2>Price range</h2>
                    <div>
                        <input value={downPrice} onChange={e=>setDownPrice(e.value)}/>
                        <span>-</span>
                        <input value={upPrice} onChange={e=>setUpPrice(e.value)}/>
                    </div>
                </div>
                <form>
                    <h2>Select from</h2>
                    <div>
                        <input type="radio" name="products" id="All" onChange={e=>setChosenProducts(e.target.id)}/>
                        All
                    </div>
                    <div>
                        <input type="radio" name="products" id="Boots" onChange={e=>setChosenProducts(e.target.id)}/>
                        Boots
                    </div>
                    <div>
                        <input type="radio" name="products" id="Jackets" onChange={e=>setChosenProducts(e.target.id)}/>
                        Jackets
                    </div>
                    <div>
                        <input type="radio" name="products" id="T-shirts" onChange={e=>setChosenProducts(e.target.id)}/>
                        T-shirts
                    </div>
                    <div>
                        <input type="radio" name="products" id="Trousers" onChange={e=>setChosenProducts(e.target.id)}/>
                        Trousers
                    </div>
                </form>
            </section>
            <section className="products">
            </section>
        </main>
    )
}
