import React from 'react';

import logoLaboratoria from '../images/labortoria.jpg';
import perfil from "../images/perfil.JPG";
import './styles/aboutMe.css';


class AboutMe extends React.Component {
    render() {
        return (
            <div className="container-principal-about-me">
                <div className="container-about-me">
                    <h3>Sobre mi</h3>
                    <img src={perfil} className="init-section-avatar" alt="profile " />
                    <p> Desarrolladora Front-End egresada de <img src={logoLaboratoria} alt="logo laboratoria" className="logoLaboratoria" />, entusiasta de nuevos aprendizajes y desafíos. Me encanta trabajar en equipo, destaco mi responsabilidad, adaptabilidad a trabajar bajo presión, proactividad, perseverante y empatía. </p>
                </div>
            </div>
        )
    }
}
export default AboutMe;