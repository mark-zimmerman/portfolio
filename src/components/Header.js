import React, {useState, useEffect} from "react";
import ReactDom from "react-dom";
import { NavLink} from "react-router-dom"
const Header = () => {
    return (
        <div className="header">
            <div className="logo">
                <div>
                    <p>MZ</p>
                </div>
            </div>
            <div className="nav-links"> 
                <div>
                    <NavLink to="/posts" className="nav-link" activeClassName="active" onClick={()=> setCreatePost(false)}>Home</NavLink>
                </div>
                <div>
                    <NavLink to="/posts" className="nav-link" activeClassName="active" onClick={()=> setCreatePost(false)}>About</NavLink>
                </div>
                <div>
                    <NavLink to="/posts" className="nav-link" activeClassName="active" onClick={()=> setCreatePost(false)}>Portfolio</NavLink>
                </div>
            </div>  
        </div>
    )
}

export default Header;