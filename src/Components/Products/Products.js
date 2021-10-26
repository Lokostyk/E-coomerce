import React,{useEffect,useRef,useState} from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
import ProductsContainer from './subcomponents/ProductsContainer'

gsap.registerPlugin(ScrollTrigger)
export default function Products() {
    let filters = useRef(null)
    const [downPrice,setDownPrice] = useState("")
    const [upPrice,setUpPrice] = useState("")
    const [chosenProducts,setChosenProducts] = useState()
    const [search,setSearch] = useState("")

    useEffect(()=>{
        const navbar = document.querySelector(".navbar")
        navbar.style.position = "relative"
        document.querySelector("#all").checked = true
    },[])
    //Animations
    useEffect(()=>{

    },[])
    return (
        <main className="productsContainer">
            <section className="breadcrumb">
                <a>Home</a><span>/</span><a>All</a>
            </section>
            <section className="search">
                <input value={search} onChange={e=>setSearch(e.target.value)}/>
            </section>
            <section className="filter">
                <div className="stickyScroll" ref={e=>filters=e}>
                <div className="priceRange">
                    <h2>Price range</h2>
                    <div>
                        <input type="number" value={downPrice} onChange={e=>setDownPrice(e.target.value)}/>
                        <span>-</span>
                        <input type="number" value={upPrice} onChange={e=>setUpPrice(e.target.value)}/>
                    </div>
                </div>
                <span style={{width: "80%",margin:"0 auto",display:"flex",borderTop:"1px solid grey"}}></span>
                <form>
                    <h2>Select from</h2>
                    <div>
                        <input type="radio" name="products" id="all" onChange={e=>setChosenProducts(e.target.id)}/>
                        All
                    </div>
                    <div>
                        <input type="radio" name="products" id="boots" onChange={e=>setChosenProducts(e.target.id)}/>
                        Boots
                    </div>
                    <div>
                        <input type="radio" name="products" id="jackets" onChange={e=>setChosenProducts(e.target.id)}/>
                        Jackets
                    </div>
                    <div>
                        <input type="radio" name="products" id="t-shirts" onChange={e=>setChosenProducts(e.target.id)}/>
                        T-shirts
                    </div>
                    <div>
                        <input type="radio" name="products" id="trousers" onChange={e=>setChosenProducts(e.target.id)}/>
                        Trousers
                    </div>
                </form>
                <span style={{width: "80%",margin:"0 auto",display:"flex",borderTop:"1px solid grey"}}></span>
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
                </div>
            </section>
            <section className="products">
                <ProductsContainer chosenProducts={chosenProducts} downPrice={downPrice} upPrice={upPrice} search={search}/>
            </section>
        </main>
    )
}
