import React from 'react';

import "./styles/init.css";
import perfil from "../images/perfil.JPG"


class Init extends React.Component {
    render() {
        return <div className="container-principal">
            <div className="init-section-name" >
                <img src={perfil} className="init-section-avatar" alt="profile picture" />

            </div>
        </div>
    }
}

export default Init;