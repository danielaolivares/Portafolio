import React from 'react';

import perfil from "../images/perfil.JPG";
import '../global.css'


class AboutMe extends React.Component {
    render() {
        return (
            <div className="container-principal-about-me">
                <h3 className="title-about-me">Sobre mi</h3>
                <div className="container-about-me">
                    <img src={perfil} className="init-section-avatar" alt="profile " />
                    <article className="article-about-me"> Desarrolladora Front-End egresada de Laboratoria, entusiasta de nuevos aprendizajes y desafíos. Me encanta trabajar en equipo, destaco mi responsabilidad, adaptabilidad a trabajar bajo presión, proactividad, perseverante y empatía. </article>
                </div>
            </div>
        )
    }
}
export default AboutMe;