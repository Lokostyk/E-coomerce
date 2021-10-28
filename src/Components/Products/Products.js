import React,{useEffect,useRef,useState} from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
import ProductsContainer from './subcomponents/ProductsContainer'

gsap.registerPlugin(ScrollTrigger)
export default function Products() {
    let animationRef = useRef(null)
    const [search,setSearch] = useState("")
    const [downPrice,setDownPrice] = useState("")
    const [upPrice,setUpPrice] = useState("")
    const [chosenProducts,setChosenProducts] = useState()
    const [gender,setGender] = useState()

    window.scrollTo({top:0,behavior:"smooth"})
    useEffect(()=>{
        document.querySelector("#all").checked = true
    },[])
    //Animations
    useEffect(()=>{
        const animationFilter = animationRef.querySelector(".search")
        console.log(animationFilter.style)
        gsap.to(animationFilter,{scrollTrigger:{trigger:animationFilter,start:"top top",scrub:true},width:"40%",border:"1px solid grey",borderRadius:"2rem"})
    },[])
    return (
        <main className="productsContainer" ref={e=>animationRef=e}>
            <section className="breadcrumb">
                <a>Home</a><span>/</span><a>All</a>
            </section>
            <section className="search" style={{width:"90%"}}>
                <input value={search} onChange={e=>setSearch(e.target.value)}/>
            </section>
            <section className="filter">
                <div className="stickyScroll">
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
                        <input type="radio" name="products" id="all" onChange={e=>setChosenProducts(e.target.id)} defaultChecked/>
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
                        <input type="radio" name="gender" id="male" onChange={e=>setGender(e.target.id)}/>
                        Male
                    </div>
                    <div>
                        <input type="radio" name="gender" id="female" onChange={e=>setGender(e.target.id)}/>
                        Female
                    </div>
                    <div>
                        <input type="radio" name="gender" id="both" onChange={e=>setGender(e.target.id)} defaultChecked/>
                        Both
                    </div>
                </form>
                </div>
            </section>
            <section className="products">
                <ProductsContainer chosenProducts={chosenProducts} downPrice={downPrice} upPrice={upPrice} search={search} gender={gender}/>
            </section>
        </main>
    )
}
