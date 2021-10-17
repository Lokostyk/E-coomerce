import ReactDOM from "react-dom";
import App from "./App"
import "./Styles/style.scss"
import {BrowserRouter} from "react-router-dom"

ReactDOM.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>
,document.querySelector("#root"))