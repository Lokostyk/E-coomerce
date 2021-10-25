import React,{useEffect,useRef,useState} from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
import ProductsContainer from './subcomponents/ProductsContainer'

gsap.registerPlugin(ScrollTrigger)
export default function Products() {
    let filters = useRef(null)
    const [downPrice,setDownPrice] = useState()
    const [upPrice,setUpPrice] = useState()
    const [chosenProducts,setChosenProducts] = useState()

    useEffect(()=>{
        document.querySelector("#All").checked = true
        document.querySelector(".navbar").style.position = "relative"
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
                <input />
            </section>
            <section className="filter">
                <div className="stickyScroll" ref={e=>filters=e}>
                <div className="priceRange">
                    <h2>Price range</h2>
                    <div>
                        <input value={downPrice} onChange={e=>setDownPrice(e.value)}/>
                        <span>-</span>
                        <input value={upPrice} onChange={e=>setUpPrice(e.value)}/>
                    </div>
                </div>
                <span style={{width: "80%",margin:"0 auto",display:"flex",borderTop:"1px solid grey"}}></span>
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
                <ProductsContainer />
            </section>
        </main>
    )
}
