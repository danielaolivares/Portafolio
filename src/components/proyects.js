import React from 'react';

import ScrollableAnchor from "react-scrollable-anchor"
import imgCipher from '../images/cipher2.mp4';
import '../global.css'

class Proyect extends React.Component {
    render() {
        return (
            <ScrollableAnchor id="Proyect">
                <div className="container-principal-proyects">
                    <div className="title-proyects">Proyectos</div>
                    <div className="container-proyect-cipher"  >
                        <h3 className="title-proyect-cipher"> C <br /> I<br />P<br />H<br />E<br />R</h3>

                        <p className="container-description"> Primer acercamiento a lenguaje a JavaScript (ES6), en este proyecto cree un juego para niños, las tecnologías utilizadas fueron  GitHub, Trello, HTML5, y CSS3.</p>
                        <video className="gif-cipher" src={imgCipher} autoPlay loop ></video>
                    </div>
                </div>
            </ScrollableAnchor>
        )
    }
}
export default Proyect;