import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
import React, { useRef, useEffect } from 'react'
import { connect } from 'react-redux'
import BestSellerItem from './subcomponents/BestSellerItem'

gsap.registerPlugin(ScrollTrigger)

function BestSellers(props) {
    let legendRef = useRef(null)
    useEffect(() => {
        const elemHeight = legendRef.getBoundingClientRect().height
        gsap.from(legendRef,{
            scrollTrigger:{trigger:legendRef,start:"top 100%",end:"top 90%",scrub:1},
            y:`${(elemHeight/2)+2}`,
            duration:.5
            })
    }, [legendRef])
    return (
        <fieldset id="field" className="bestSellers">
                <legend ref={(e)=>legendRef=e}>Best Sellers</legend>
                {props.bestSellers.map(item=>{
                    return <BestSellerItem key={item.id} item={item}/>
                })}
        </fieldset>
    )
}

const mapStateToProps = state => {
    return {
        bestSellers: state.bestSellers
    }
}

export default connect(mapStateToProps)(BestSellers)
