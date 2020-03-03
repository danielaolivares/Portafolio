import React from 'react';
import '../global.css'
import logo from '../images/logo dany.gif';


class Init extends React.Component {
    render() {
        return (
            <div className="init-section-name" >
                <img src={logo} alt="" className="gifLogo" />
                <div id="navegador">
                    <ul>
                        <li><a href="#AboutMe">Sobre mi</a></li>
                        <li><a href="#Proyect">Proyectos</a></li>
                        <li><a href="#Skill">Skills</a></li>
                        <li><a href="#ContactMe">Contactame</a></li>
                    </ul>
                </div>

            </div>
        )
    }
}

export default Init;