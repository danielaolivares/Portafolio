import React from 'react';

import ScrollableAnchor from "react-scrollable-anchor"
import imgCipher from '../images/cipher2.mp4';
import iconGithub from '../images/github.svg';
import '../global.css'

class Proyect extends React.Component {
    render() {
        return (
            <ScrollableAnchor>
                <div className="container-principal-proyects">
                    <div className="title-proyects"><h1>Proyectos</h1>
                        <h3 className="title-proyect-cipher">CIPHER</h3>
                        <p>GitHub/Trello/HTML5/CSS3</p>
                        <div className="links-to-projects">
                            <a href="https://github.com/danielaolivares/SCL011-Cipher" target="blank"><img src={iconGithub} alt="logo github" className="logo-github" /></a>
                            <a href="https://danielaolivares.github.io/SCL011-Cipher/src/index.html" target="blank" className="direction">DEMO</a>
                        </div>
                    </div>
                    <div className="container-description"  >
                        <p > Primer acercamiento a lenguaje JavaScript (ES6), en este proyecto cree un juego para niños mayores de 8 años en donde deben cifrar respuestas de adivinanzas y decifrar mensajes secretos.</p>
                        <video className="gif-cipher" src={imgCipher} autoPlay loop ></video>
                    </div>
                </div>
            </ScrollableAnchor>
        )
    }
}
export default Proyect;