import React, {useState, useEffect, useRef} from "react";
import ReactDom from "react-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  } from '@fortawesome/free-solid-svg-icons'
import { faReact, faNodeJs, faJs, faHtml5, faCss3, faGit, faGithub} from "@fortawesome/free-brands-svg-icons"

const About = () => {
    const [skillsVisible, setSkillsVisible] = useState(false);
    const myRef = useRef();
    console.log('my skills are visible', skillsVisible)
    useEffect(()=> {
        const observer = new IntersectionObserver((entries)=> {
            const entry = entries[0];
            setSkillsVisible(entry.isIntersecting);
        })
        observer.observe(myRef.current);
    }, [])
    
    return (
        <div className="about" id="about">
            <h2 className="medium-main-text">About Me</h2>
            <div id="main-img-container">
                <img className="thinker-svg" src = "code-thinker.svg" alt="code"/>
            </div>
            <p ref={myRef} className="about-p">I'm a constant learner that enjoys the creative process and the daily pursuit of improving my skills. My ultimate goal is to become an expert in the field of software developement. I’m interested in joining a team of talented developers who work together to deliver quality products. 
            </p>
            <div class="skills-icons">    
                <FontAwesomeIcon title="ReactJS" className={`skills-icon ${skillsVisible ? "skills-animation" : ''}`} icon={faReact} />
                <FontAwesomeIcon title="Node.js" className={`skills-icon ${skillsVisible ? "skills-animation" : ''}`} icon={faNodeJs} />
                <FontAwesomeIcon title="JavaScript" className={`skills-icon ${skillsVisible ? "skills-animation" : ''}`} icon={faJs} />
                <FontAwesomeIcon title="HTML5" className={`skills-icon ${skillsVisible ? "skills-animation" : ''}`} icon={faHtml5} />
                <FontAwesomeIcon title="CSS3" className={`skills-icon ${skillsVisible ? "skills-animation" : ''}`} icon={faCss3} />
                <FontAwesomeIcon title="Git" className={`skills-icon ${skillsVisible ? "skills-animation" : ''}`} icon={faGit} />
                <FontAwesomeIcon title="Github" className={`skills-icon ${skillsVisible ? "skills-animation" : ''}`} icon={faGithub} />
            </div>
        </div>
    )
}

export default About;