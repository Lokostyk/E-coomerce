import React,{useEffect} from "react";
import gsap from "gsap";
import {Route,useLocation} from "react-router-dom"
import { useDispatch, useSelector } from "react-redux";

import { ADD_TO_BASKET } from "./Redux/basketTypes";

import Main from "./Components/Home/Main"
import Navbar from "./Components/Navbar/Navbar";
import Basket from "./Components/Basket/Basket";
import Products from "./Components/Products/Products";
import Product from "./Components/ProductPage/Product";

function App() {
  const {pathname} = useLocation()
  const dispatch = useDispatch()
  const basket = useSelector((state)=>state.basket.contents)

  useEffect(()=>{
    const basketFromStorage = JSON.parse(window.localStorage.getItem("basket"))
    if(basket.length === 0 && basketFromStorage){
      dispatch({type:ADD_TO_BASKET,payload:basketFromStorage})
    }
  },[])
  useEffect(()=>{
    if(basket.length === 0) return
    window.localStorage.setItem("basket",JSON.stringify(basket))
  },[basket])
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
      </>
  );
}

export default App;
