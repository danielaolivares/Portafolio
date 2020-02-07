import React from 'react';
import Init from '../components/init';
import AboutMe from '../components/aboutMe';
import Proyect from '../components/proyects';
import Skill from '../components/skill'

class PrincipalPage extends React.Component {
    render() {
        return (
            <div>
                <Init />
                <AboutMe />
                <Proyect />
                <Skill />
                <ContactMe />
            </div>
        )
    }
}
export default PrincipalPage;