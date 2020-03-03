import React from 'react';

import './styles/contactMe.css'
import iconGithub from '../images/github.svg';
import iconlinkedIn from '../images/linkedIn.svg';
import iconCurriculum from '../images/curriculum.svg';
import ScrollableAnchor from "react-scrollable-anchor"

class ContactMe extends React.Component {
    render() {
        return (
            <ScrollableAnchor id="ContactMe">
                <div className="contact-me">
                    <h3>
                        Contactame!!
                </h3>
                    <div className="row" id="contacMe">
                        <div className="col-3">
                            <a href="https://github.com/danielaolivares/Portafolio" target="blank"><img src={iconGithub} alt="logo github" className="icon" /></a>
                        </div>
                        <div className="col-3">
                            <a href="https://www.linkedin.com/in/daniela-olivares-lemunao-466b44149/" target="blank"><img src={iconlinkedIn} alt="logo linkedIn" className="icon" /></a>
                        </div>
                        <div className="col-3">
                            <a href="src/doc/daniela_olivares_c2.pdf" download=""><img src={iconCurriculum} alt="logo curiculum" className="icon" /></a>
                        </div>
                    </div>
                </div>
            </ScrollableAnchor>
        )
    }
}

export default ContactMe;