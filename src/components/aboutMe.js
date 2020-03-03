import React from 'react';

import ScrollableAnchor from "react-scrollable-anchor"
import perfil from "../images/perfil.JPG";
import '../global.css'


class AboutMe extends React.Component {
    render() {
        return (
            <ScrollableAnchor id="AboutMe">
                <div className="container-principal-about-me">
                    <h3 className="title-about-me">Sobre mi</h3>
                    <div className="container-about-me">
                        <img src={perfil} className="init-section-avatar" alt="profile " />
                        <article className="article-about-me"> Desarrolladora Front-End egresada de Laboratoria, apenas tuve mi pimer acercamiento al código me enamoré de este, soy entusiasta de nuevos aprendizajes y desafíos. Me encanta trabajar en equipo, destaco mi responsabilidad, adaptabilidad a trabajar bajo presión, proactividad, perseverancia y empatía. <br>
                        </br> Desarrollé mi hábilidad de aprender a aprender, metodologia ágil y potencie mis habilidades blandas que son claves para crecer en el área digital. </article>
                    </div>
                </div>
            </ScrollableAnchor>
        )
    }
}
export default AboutMe;