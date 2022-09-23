import React, {useState, useEffect} from "react";
import ReactDom from "react-dom";
import { NavLink} from "react-router-dom"
const Banner = () => {
    const openInNewTab = url => {
        window.open(url, '_blank', 'noopener,noreferrer');}
    return (
        <div className="banner" id="projects">
            <h2 className="medium-main-text">My Work</h2>
            <div id="project-card-container">  
                <div className="project-card strangers-card" onClick={() => openInNewTab('https://6324de9061e5f400081defe4--cheery-sopapillas-b87876.netlify.app/')}>
                    <h3 >Stranger's Things</h3>
                </div>
                <div className="project-card truthy-card" onClick={()=> openInNewTab('https://truthy-jerseyz-outlet.herokuapp.com/')}>
                    <h3>Truthy Jerseyz Outlet</h3>
                </div>
                <div className="project-card connect-four-card" onClick={() => openInNewTab('https://charming-scone-2535b3.netlify.app/')}>
                    <h3>Connect Four</h3>
                </div>
                <div className="project-card fitness-tracker-card">
                    <h3>Fitness Tracker</h3>
                </div>
            </div>
        </div>
    )
}

export default Banner;