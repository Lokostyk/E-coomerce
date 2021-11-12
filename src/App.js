import React,{useEffect} from "react";
import gsap from "gsap";
import {Route,useLocation} from "react-router-dom"
import { useDispatch, useSelector } from "react-redux";

import { FROM_STORAGE_TO_BASKET } from "./Redux/basketTypes";

import Main from "./Components/Home/Main"
import Navbar from "./Components/Navbar/Navbar";
import Basket from "./Components/Basket/Basket";
import Products from "./Components/Products/Products";
import Product from "./Components/ProductPage/Product";
import Info from "./Components/Info/Info";

function App() {
  const {pathname} = useLocation()
  const dispatch = useDispatch()
  const basket = useSelector((state)=>state.basket.contents)

  //Adding and importing from localStorage
  useEffect(()=>{
    const basketFromStorage = JSON.parse(window.localStorage.getItem("basket"))
    if(basket.length === 0 && basketFromStorage){
      dispatch({type:FROM_STORAGE_TO_BASKET,payload:basketFromStorage})
    }
  },[])
  useEffect(()=>{
    if(basket.length === 0) return
    window.localStorage.setItem("basket",JSON.stringify(basket))
  },[basket])
  //Navbar adjustments
  useEffect(()=>{
    const navbar = document.querySelector(".navbar").style
    if(pathname !== "/"){
      navbar.maxHeight = "200px"
      navbar.overflow = "visible"
      navbar.position = "relative"
    }else{
      navbar.position = "fixed"
    }
    document.addEventListener("scroll",addNav)
  },[pathname])
  const addNav = () =>{
    gsap.to(document.querySelector(".navbar"),{duration:1,maxHeight:"200px",overflow:"visible"})
    document.removeEventListener("scroll",addNav)
  }
  return (
      <>
        <Navbar />
        <Route path="/" exact component={Main} />
        <Route path="/basket" component={Basket}/>
        <Route path="/products" exact component={Products}/>
        <Route path="/products/:id"  component={Product}/>
        <Route path="/info" component={Info} />
      </>
  );
}

export default App;
