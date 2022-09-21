import React, {useState, useEffect} from "react";
import ReactDom from "react-dom";
import {Header, Main, Banner} from "./index"
import { BrowserRouter as Router, Route, Switch, Redirect} from "react-router-dom"
const App = () => {
    return (
        <div>
            <Router>
                <Header/>
                <Main/>
                <Banner/>
            </Router>
        </div>
    )
}

export default App;