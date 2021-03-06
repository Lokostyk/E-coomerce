import ReactDOM from "react-dom";
import React from "react";
import App from "./App"
import "./Styles/style.scss"
import {BrowserRouter} from "react-router-dom"
import { Provider } from "react-redux";
import store from "./Redux/store"

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>
,document.querySelector("#root"))