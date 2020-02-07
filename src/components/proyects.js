import React from 'react';

import imgCipher from '../images/cipher2.mp4';
import "./styles/proyects.css"

class Proyect extends React.Component {
    render() {
        return (
            <div className="container-principal-proyects">
                <h3>Proyectos</h3>
                <div className="container-proyects">

                    <h3 className="title-proyect-cipher"><br /> C <br /> I <br /> P <br /> H <br /> E <br /> R <br /></h3>
                    <p className="container-desciption"> Primer acercamiento a lenguaje a JavaScript (ES6), en este proyecto cree un juego para niños, las tecnologías utilizadas fueron  GitHub, Trello, HTML, y CSS.</p>
                    <video src={imgCipher} width="30%" height="50%" autoPlay loop ></video>
                </div>
            </div>
        )
    }
}
export default Proyect;