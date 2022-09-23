import React, {useState, useEffect} from "react";
import ReactDom from "react-dom";
import { NavLink} from "react-router-dom"
const Header = () => {
    return (
        <div className="header">
            <div className="logo">
                <div className="logo-inner">
                    <p>MZ</p>
                </div>
            </div>
            <div className="nav-links"> 
                <div>
                    <NavLink to="/" className="nav-link" activeClassName="active">Home</NavLink>
                </div>
                <div>
                    <NavLink to="/#banner" className="nav-link" activeClassName="active" onClick={()=> {const anchor = document.querySelector('#about')
anchor.scrollIntoView({ behavior: 'smooth', block: 'center' })}}>About</NavLink>
                </div>
                <div>
                    <NavLink to="/posts" className="nav-link" activeClassName="active" onClick={()=> {const anchor = document.querySelector('#projects')
anchor.scrollIntoView({ behavior: 'smooth', block: 'center' })}}>Portfolio</NavLink>
                </div>
            </div>  
        </div>
    )
}

export default Header;