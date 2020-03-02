import React from 'react';

import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Init from '../components/init';
import AboutMe from '../components/aboutMe';
import Proyect from '../components/proyects';
import Social from '../components/proyectsSocial'
import Skill from '../components/skill';
import ContactMe from '../components/contactMe';

class PrincipalPage extends React.Component {
    render() {
        return (

            <BrowserRouter>
                <Init />
                <AboutMe />
                <Proyect />
                <Social />
                <Skill />
                <ContactMe />
            </BrowserRouter>
        )
    }
}
export default PrincipalPage;