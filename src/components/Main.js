import React, {useState, useEffect} from "react";
import ReactDom from "react-dom";
import { NavLink} from "react-router-dom"

const Header = () => {
    return (
        <div className="main">
            <div id="main-info-container">
                <div className="main-info">   
                    <p className="small-main-text head-font">Hi, I am</p>
                    <p className="big-main-text">Mark Zimmerman</p>
                    <p className="small-main-text">I'm a</p>
                    <p className="small-main-text">Full-Stack / Front-End</p>
                    <p className="medium-main-text">Software Developer</p>
                    <p className="small-main-text">from Cleveland, Ohio</p>
                </div>
            </div>
            <div id="main-img-container">
                <img className="main-svg" src = "dual-monitors.svg" alt="code"/>
            </div>
            
        </div>
    )
}

export default Header;