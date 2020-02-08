import React from 'react';

import "./styles/init.css";
import logo from '../images/daniela.gif';


class Init extends React.Component {
    render() {
        return <div className="container-principal">
            <div className="init-section-name" >
                <img src={logo} alt="" className="videoLogo" />
            </div>
        </div>
    }
}

export default Init;