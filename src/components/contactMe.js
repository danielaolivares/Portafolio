import React from 'react';

import './styles/contactMe.css'
import iconGithub from '../images/github.svg';
import iconlinkedIn from '../images/linkedIn.svg';
import iconCurriculum from '../images/curriculum.svg';

class ContactMe extends React.Component {
    render() {
        return (
            <div>
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
                        <a href="file:///C:/Users/Dani%20Olivares/Desktop/daniela_olivares_cv2.pdf" target="blank"><img src={iconCurriculum} alt="logo curiculum" className="icon" /></a>
                    </div>
                </div>
            </div>
        )
    }
}

export default ContactMe;