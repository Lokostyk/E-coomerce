import React,{useEffect,useRef,useState} from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
import ProductsContainer from './subcomponents/ProductsContainer'
import { useLocation } from 'react-router'
import {hideSearch} from '../../SharedFunctions/mobileExpand'
import { Link } from 'react-router-dom'

gsap.registerPlugin(ScrollTrigger)
export default function Products() {
    const docWidth = document.body.clientWidth
    let animationRef = useRef(null)
    const {hash} = useLocation()
    const [search,setSearch] = useState("")
    const [downPrice,setDownPrice] = useState("")
    const [upPrice,setUpPrice] = useState("")
    const [chosenProducts,setChosenProducts] = useState()
    const [gender,setGender] = useState()
    
    window.scrollTo({top:0,behavior:"smooth"})
    useEffect(()=>{
        window.scrollTo({top:0,behavior:"smooth"})
    },[chosenProducts])
    useEffect(()=>{
        window.scrollTo(0,0)
        if(!hash) return
        document.querySelector(`${hash}`).checked = true
        setChosenProducts(hash.slice(1))
    },[hash])
    //Animations
    useEffect(()=>{
        const animationFilter = animationRef.querySelector(".search")
        gsap.to(animationFilter,{scrollTrigger:{trigger:animationFilter,start:"top top",scrub:true},width:`${docWidth>=800?"40%":"80%"}`,border:"1px solid grey",borderRadius:"2rem"})
    },[])
    return (
        <main className="productsContainer" ref={e=>animationRef=e}>
            <section className="breadcrumb">
                <Link to="/" style={{color:"black",textDecoration:"underline"}}>Home</Link><span>/</span><a>All</a>
            </section>
            <section className="search" style={{width:`${docWidth>=800?"90%":"100%"}`}}>
                <input value={search} onChange={e=>setSearch(e.target.value)}/>
            </section>
            <section className="filter">
                {docWidth<=800 && 
                    <button className="mobileSearchBtn" onClick={()=>hideSearch()}><img src="/pictures/arrow.svg"/></button>
                }
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
                        <input type="radio" name="products" id="all" onClick={e=>setChosenProducts(e.target.id)} defaultChecked/>
                        All
                    </div>
                    <div>
                        <input type="radio" name="products" id="boots" onClick={e=>setChosenProducts(e.target.id)}/>
                        Boots
                    </div>
                    <div>
                        <input type="radio" name="products" id="jackets" onClick={e=>setChosenProducts(e.target.id)}/>
                        Jackets
                    </div>
                    <div>
                        <input type="radio" name="products" id="t-shirts" onClick={e=>setChosenProducts(e.target.id)}/>
                        T-shirts
                    </div>
                    <div>
                        <input type="radio" name="products" id="trousers" onClick={e=>setChosenProducts(e.target.id)}/>
                        Trousers
                    </div>
                </form>
                <span style={{width: "80%",margin:"0 auto",display:"flex",borderTop:"1px solid grey"}}></span>
                <form>
                    <h2>Gender</h2>
                    <div>
                        <input type="radio" name="gender" id="male" onClick={e=>setGender(e.target.id)}/>
                        Male
                    </div>
                    <div>
                        <input type="radio" name="gender" id="female" onClick={e=>setGender(e.target.id)}/>
                        Female
                    </div>
                    <div>
                        <input type="radio" name="gender" id="both" onClick={e=>setGender(e.target.id)} defaultChecked/>
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
