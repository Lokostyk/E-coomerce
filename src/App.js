import React,{useEffect} from "react";
import gsap from "gsap";
import { Provider } from 'react-redux'
import store from "./Redux/store"
import {Route,useLocation} from "react-router-dom"

import Main from "./Components/Home/Main"
import Navbar from "./Components/Navbar/Navbar";
import Basket from "./Components/Basket/Basket";
import Products from "./Components/Products/Products";

function App() {
  const {hash,pathname} = useLocation()

  useEffect(()=>{
    const navbar = document.querySelector(".navbar").style
    if(pathname !== "/"){
      navbar.maxHeight = "200px"
      navbar.overflow = "visible"
      navbar.position = "relative"
    }else{
      navbar.position = "fixed"
    }
    if(hash !== ""){
      const element = document.querySelector(`${hash}`)
      if(element) {
        element.scrollIntoView({behavior:"smooth"})
      }
    }else {
      window.scrollTo(0,0)
    }
    document.addEventListener("scroll",addNav)
  },[hash,pathname])
  const addNav = () =>{
    gsap.to(document.querySelector(".navbar"),{duration:1,maxHeight:"200px",overflow:"visible"})
    document.removeEventListener("scroll",addNav)
  }
  return (
      <Provider store={store}>
        <Navbar />
        <Route path="/" exact component={Main} />
        <Route path="/basket" component={Basket}/>
        <Route path="/products" component={Products}/>
      </Provider>
  );
}

export default App;
