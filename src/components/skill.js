import React from 'react';

import iconFirebase from '../images/firebase-icon.svg';
import iconReact from '../images/reactjs-iconsvg.svg';
import iconGithub from '../images/github.svg';
import "./styles/skill.css"

class Skill extends React.Component {
    render() {
        return (
            <div>
                <h3>Skill</h3>
                <div className="row">
                    <div className="col-1">
                        <img src={iconFirebase} alt="logo firebase" />
                    </div>
                    <div className="col-1">
                        <img src={iconReact} alt="logo react" />
                    </div>
                    <div className="col-1">
                        <img src={iconGithub} alt="logo github" />
                    </div>
                </div>
            </div>
        )
    }
}

export default Skill;