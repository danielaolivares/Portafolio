import React from 'react';

import '../global.css'
import imgSocial from '../images/imgSocial.mp4';
import iconGithub from '../images/github.svg';

class Social extends React.Component {
    render() {
        return (
            <div className="container-principal-social">
                <div className="container-proyect-social"  >
                    <h3 className="title-proyect-social"> R <br /> E<br />D<br /><br />S<br />O <br />C<br />I<br />A<br />L </h3>

                    <p className="container-description-social"> Una red social creada con React, utilizando firebase en esta red social, se puede loguear, crear post, subir fotos, dar like, etc</p>
                    <div><a href="https://github.com/danielaolivares/SCL011-Social-Network" target="blank"><img src={iconGithub} alt="logo github" className="logo-github" /></a></div>
                    <div><a href="https://nataliabarriga.github.io/SCL011-Social-Network/src/index.html" target="blank" className="direction">DEMO</a></div>
                    <video className="gif-social" src={imgSocial} autoPlay loop></video>
                </div>
            </div>
        )
    }
}
export default Social;