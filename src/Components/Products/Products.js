import React,{useEffect,useState} from 'react'
import ProductsContainer from './subcomponents/ProductsContainer'

export default function Products() {
    const [downPrice,setDownPrice] = useState()
    const [upPrice,setUpPrice] = useState()
    const [chosenProducts,setChosenProducts] = useState()
    console.log(chosenProducts)
    useEffect(()=>{
        document.querySelector("#All").checked = true
    },[])
    return (
        <main className="productsContainer">
            <section className="breadcrumb">
                <a>Home</a><span>/</span><a>All</a>
            </section>
            <section className="search">
                <input />
            </section>
            <section className="filter">
                <div className="price">
                    <h2>Price range</h2>
                    <div>
                        <input value={downPrice} onChange={e=>setDownPrice(e.value)}/>
                        <span>-</span>
                        <input value={upPrice} onChange={e=>setUpPrice(e.value)}/>
                    </div>
                </div>
                <span style={{width: "80%",display:"flex",alignSelf:"center",borderTop:"1px solid grey"}}></span>
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
                <span style={{width: "80%",display:"flex",alignSelf:"center",borderTop:"1px solid grey"}}></span>
                <form>
                    <h2>Gender</h2>
                    <div>
                        <input type="radio" name="gender" id="Male"/>
                        Male
                    </div>
                    <div>
                        <input type="radio" name="gender" id="Female"/>
                        Female
                    </div>
                    <div>
                        <input type="radio" name="gender" id="Both"/>
                        Both
                    </div>
                </form>
            </section>
            <section className="products">
                <ProductsContainer />
            </section>
        </main>
    )
}
