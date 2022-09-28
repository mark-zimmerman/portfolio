import React, {useState, useEffect} from "react";
import ReactDom from "react-dom";
import {Header, Main, Banner, About} from "./index"
import handleViewport from 'react-in-viewport';
import { BrowserRouter as Router, Route, Switch, Redirect} from "react-router-dom"
const App = () => {
    return (
        <div id="app-container">
            <Router>
                <Header/>
                <div id="body">
                    <Main/>
                    <About/>
                    <Banner/>
                </div>
            </Router>
        </div>
    )
}

export default App;