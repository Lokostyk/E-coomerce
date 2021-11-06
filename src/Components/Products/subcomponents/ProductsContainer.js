import React,{useEffect,useState} from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

function ProductsContainer({bestSellers,chosenProducts,downPrice,upPrice,search,gender}) {
    const [productsAfterSearch,setProductsAfterSearch] = useState(bestSellers)
    const [finalProducts,setFinalProducts] = useState([])

    //Search and price range
    useEffect(() => {
        const dPrice = downPrice?Number(downPrice):0
        const uPrice = upPrice?Number(upPrice):Infinity
        const searchVar = search?search:""
        const reg = new RegExp(searchVar,"i")

        setProductsAfterSearch(bestSellers.filter(item=>(Number(item.price)>=dPrice&&Number(item.price)<=uPrice&&reg.test(item.name))))
    }, [bestSellers,downPrice,upPrice,search,chosenProducts,gender])
    //Selcet from and gender
    useEffect(()=>{
        const cProducts = chosenProducts?chosenProducts:"all"
        const genderVar = gender?gender:"both"
        setFinalProducts(
            productsAfterSearch.filter(item=>item.category===cProducts||cProducts==="all")
            .filter(item=>item.gender===genderVar||genderVar==="both"))
    },[chosenProducts,gender,productsAfterSearch])
    return (
        finalProducts.map(item=>{
            return (
                <>
                <Link to="/products/1" key={item.id} className="productsItem">
                    <img src={`${item.imgs[0]}`}/>
                    <p>{item.name}</p>
                    <span className="breaker"></span>
                    <p className="price">{item.price}<span>$</span></p>
                </Link>
                                <Link to="/products/1" key={item.id} className="productsItem">
                    <img src={`${item.imgs[0]}`}/>
                    <p>{item.name}</p>
                    <span className="breaker"></span>
                    <p className="price">{item.price}<span>$</span></p>
                </Link>
                                <Link to="/products/1" key={item.id} className="productsItem">
                    <img src={`${item.imgs[0]}`}/>
                    <p>{item.name}</p>
                    <span className="breaker"></span>
                    <p className="price">{item.price}<span>$</span></p>
                </Link>
                                <Link to="/products/1" key={item.id} className="productsItem">
                    <img src={`${item.imgs[0]}`}/>
                    <p>{item.name}</p>
                    <span className="breaker"></span>
                    <p className="price">{item.price}<span>$</span></p>
                </Link>
                                <Link to="/products/1" key={item.id} className="productsItem">
                    <img src={`${item.imgs[0]}`}/>
                    <p>{item.name}</p>
                    <span className="breaker"></span>
                    <p className="price">{item.price}<span>$</span></p>
                </Link>
                                <Link to="/products/1" key={item.id} className="productsItem">
                    <img src={`${item.imgs[0]}`}/>
                    <p>{item.name}</p>
                    <span className="breaker"></span>
                    <p className="price">{item.price}<span>$</span></p>
                </Link>
                                <Link to="/products/1" key={item.id} className="productsItem">
                    <img src={`${item.imgs[0]}`}/>
                    <p>{item.name}</p>
                    <span className="breaker"></span>
                    <p className="price">{item.price}<span>$</span></p>
                </Link>
                                <Link to="/products/1" key={item.id} className="productsItem">
                    <img src={`${item.imgs[0]}`}/>
                    <p>{item.name}</p>
                    <span className="breaker"></span>
                    <p className="price">{item.price}<span>$</span></p>
                </Link>
                                <Link to="/products/1" key={item.id} className="productsItem">
                    <img src={`${item.imgs[0]}`}/>
                    <p>{item.name}</p>
                    <span className="breaker"></span>
                    <p className="price">{item.price}<span>$</span></p>
                </Link>
                </>
            )
        })
    )
}

const mapStateToProps = state => {
    return {
        bestSellers: state.bestSeller.bestSellers
    }
}
export default connect(mapStateToProps)(ProductsContainer)