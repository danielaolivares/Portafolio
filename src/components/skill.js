import React from 'react';

import iconFirebase from '../images/firebase-icon.svg';
import iconReact from '../images/reactjs-iconsvg.svg';
import iconGithub from '../images/github.svg';
import iconHtml5 from '../images/html5.svg';
import iconJS from '../images/java.svg';
import iconNode from '../images/node.svg';
import iconCss from '../images/css.svg';
import iconVisual from '../images/visual.svg';
import "./styles/skill.css"

class Skill extends React.Component {
    render() {
        return (
            <div className=" container-skill">
                <h3>Skill</h3>
                <div className="row">
                    <div className="col-1" >
                        <img src={iconFirebase} alt="logo firebase" className="icon" />
                    </div>
                    <div className="col-1">
                        <img src={iconReact} alt="logo react" className="icon" />
                    </div>
                    <div className="col-1">
                        <img src={iconGithub} alt="logo github" className="icon" />
                    </div>
                    <div className="col-1">
                        <img src={iconHtml5} alt="logo html5" className="icon" />
                    </div>
                    <div className="col-1">
                        <img src={iconJS} alt="logo js" className="icon" />
                    </div>
                </div>
                <div className="row">

                    <div className="col-1">
                        <img src={iconNode} alt="logo nodejs" className="icon" />
                    </div>
                    <div className="col-1">
                        <img src={iconCss} alt="logo css" className="icon" />
                    </div>
                    <div className="col-1">
                        <img src={iconVisual} alt="logo visual" className="icon" />
                    </div>
                </div>
            </div>

        )
    }
}

export default Skill;