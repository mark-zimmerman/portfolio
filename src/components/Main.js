import React, {useState, useEffect} from "react";
import ReactDom from "react-dom";
import { NavLink} from "react-router-dom"
const Header = () => {
    return (
        <div className="main">
            <div id="main-info-container">
                <div className="main-info">   
                    <p className="small-main-text">Hi my name is</p>
                    <p className="big-main-text">Mark Zimmerman</p>
                    <p className="small-main-text">I'm a</p>
                    <p className="small-main-text">FullStack / Front End</p>
                    <p className="medium-main-text">Software Developer</p>
                </div>
            </div>
            <div id="main-img-container">
                <div className="main-img"></div>
            </div>
        </div>
    )
}

export default Header;