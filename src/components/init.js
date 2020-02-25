import React from 'react';
import '../global.css'
import logo from '../images/logo dany.gif';


class Init extends React.Component {
    render() {
        return <div className="container-principal">
            <div className="init-section-name" >
                <img src={logo} alt="" className="gifLogo" />
            </div>
        </div>
    }
}

export default Init;