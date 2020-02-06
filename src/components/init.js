import React from 'react';

import "./styles/init.css";
import perfil from "../images/perfil.JPG"


class Init extends React.Component {
    render() {
        return <div className="container-principal">
            <div className="init-section-name" >
                <img src={perfil} className="init-section-avatar" alt="foto perfil" />
                <h3><div>Daniela</div> <div>Miroslava </div><div>Olivares </div><div>Lemunao</div></h3>
            </div>
        </div>
    }
}

export default Init;