import React,{useEffect,useState} from 'react'
import { connect } from 'react-redux'

function ProductsContainer({bestSellers,chosenProducts,downPrice,upPrice,search}) {
    const [products,setProducts] = useState(bestSellers)
    useEffect(() => {
        console.log(!search)
        if(!search) setProducts(bestSellers)
        if(downPrice){
            setProducts(products.filter(item=>Number(item.price)>=Number(downPrice)))
        }
        // if(upPrice){
        //     setProducts(products.filter(item=>Number(item.price)<=Number(upPrice)))
        // }
        if(!search) return
        const reg = new RegExp(search,"i")
        setProducts(products.filter(item=>reg.test(item.name)))
    }, [bestSellers,chosenProducts,downPrice,upPrice,search]) 
    return (
        products.map(item=>{
            return (
                <div key={item.id} className="productsItem">
                    <img src={`${item.img}`}/>
                    <p>{item.name}</p>
                    <span className="breaker"></span>
                    <p className="price">{item.price}<span>$</span></p>
                </div>
            )
        })
    )
}

const mapStateToProps = state => {
    return {
        bestSellers: state.bestSellers
    }
}
export default connect(mapStateToProps)(ProductsContainer)