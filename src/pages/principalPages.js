import React from 'react';
import Init from '../components/init';
import AboutMe from '../components/aboutMe';
import Proyect from '../components/proyects';
import Social from '../components/proyectsSocial'
import Skill from '../components/skill';
import ContactMe from '../components/contactMe';

class PrincipalPage extends React.Component {
    render() {
        return (
            <div>
                <Init />
                <AboutMe />
                <Proyect />
                <Social />
                <Skill />
                <ContactMe />
            </div>
        )
    }
}
export default PrincipalPage;