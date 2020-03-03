import React from 'react';

import '../global.css'
import imgSocial from '../images/imgSocial.mp4';
import iconGithub from '../images/github.svg';

class Social extends React.Component {
    render() {
        return (
            <div className="container-principal-social">
                <div className="container-description-social">
                    <p > Una red social creada para los fanático de las papas fritas, se trata de una Single-Page-Application (SPA) resposive, en donde puedes loguearte, escribir post e informar sobre tu "picada". </p>
                    <video className="gif-social" src={imgSocial} autoPlay loop></video>
                </div>
                <div>
                    <h3 className="title-proyect-social">RED SOCIAL </h3>
                    <p>HTML5/CSS3/Javascript/GitHub/Firebase/</p>
                    <div className="links-to-projects">
                        <a href="https://github.com/danielaolivares/SCL011-Social-Network" target="blank"><img src={iconGithub} alt="logo github" className="logo-github" /></a>
                        <a href="https://nataliabarriga.github.io/SCL011-Social-Network/src/index.html" target="blank" className="direction">DEMO</a>
                    </div>
                </div>
            </div>
        )
    }
}
export default Social;