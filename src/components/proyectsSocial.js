import React from 'react';

import '../global.css'
import imgSocial from '../images/imgSocial.mp4';

class Social extends React.Component {
    render() {
        return (
            <div className="container-principal-social">
                <div className="container-proyect-social"  >
                    <h3 className="title-proyect-social"> R <br /> E<br />D<br /><br />S<br />O <br />C<br />I<br />A<br />L </h3>

                    <p className="container-description-social"> Una red social creada con React, utilizando firebase en esta red social, se puede loguear, crear post, subir fotos, dar like, etc</p>
                    <video className="gif-social" src={imgSocial} autoPlay loop></video>
                </div>
            </div>
        )
    }
}
export default Social;