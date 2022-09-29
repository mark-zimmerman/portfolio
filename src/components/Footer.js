import ReactDom from "react-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import {  } from '@fortawesome/free-solid-svg-icons'
import { faReact, faNodeJs, faJs, faHtml5, faCss3, faGit, faGithub, faLinkedinIn} from "@fortawesome/free-brands-svg-icons"

const Footer = () => {
    const openInNewTab = url => {
        window.open(url, '_blank', 'noopener,noreferrer');}
    return (
        <div className="footer-contact-icons">
            <div className="footer-contact-icon-wrapper">
                <div className="footer-line footer-line-1"></div>
                <FontAwesomeIcon title="Github" className="contact-icon" icon={faGithub} onClick={() => openInNewTab('https://github.com/mark-zimmerman')}/>
                <FontAwesomeIcon title="Linkedin" className="contact-icon" icon={faLinkedinIn} onClick={() => openInNewTab('https://www.linkedin.com/in/mark-zimmerman-494692249/')}/>
                <div className="footer-line footer-line-2"></div>
            </div>
        </div>
    )
}

export default Footer;