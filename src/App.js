import React, {useEffect} from "react";
import { Provider } from 'react-redux'
import store from "./Redux/store"
import {Route,useLocation} from "react-router-dom"

import Main from "./Components/Home/Main"
import Navbar from "./Components/Navbar/Navbar";

function App() {
  const {hash} = useLocation()

  useEffect(()=>{
    if(hash !== ""){
      const element = document.querySelector(`${hash}`)
      if(element) {
        element.scrollIntoView({behavior:"smooth"})
      }
    }else {
      window.scrollTo(0,0)
    }
    document.addEventListener("scroll",addNav)
  },[hash])
  const addNav = () =>{
    document.querySelector(".navbar").style.overflow = "visible"
    document.querySelector(".navbar").style.maxHeight = "200px"
    document.removeEventListener("scroll",addNav)
  }
  return (
      <Provider store={store}>
        <Navbar />
        <Route path="/" component={Main} />
      </Provider>
  );
}

export default App;
