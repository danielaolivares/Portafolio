import React from 'react';

import iconFirebase from '../images/firebase-icon.svg';
import iconReact from '../images/reactjs-iconsvg.svg';
import iconGithub from '../images/github.svg';
import iconHtml5 from '../images/html5.svg';
import iconJS from '../images/java.svg';
import iconNode from '../images/node.svg';
import iconCss from '../images/css.svg';
import iconVisual from '../images/visual.svg';
import iconBootstrap from '../images/bootstrap.svg';
import iconNpm from '../images/npm.svg';
import iconTrello from '../images/trello.svg';
import iconSlack from '../images/slack.svg';
import "./styles/skill.css"

class Skill extends React.Component {
    render() {
        return (
            <div className=" container-skill">
                <h3>Skills</h3>
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
                    <div className="col-1">
                        <img src={iconNode} alt="logo nodejs" className="icon" />
                    </div>
                    <div className="col-1">
                        <img src={iconCss} alt="logo css" className="icon" />
                    </div>
                    <div className="col-1">
                        <img src={iconVisual} alt="logo visual" className="icon" />
                    </div>
                    <div className="col-1">
                        <img src={iconBootstrap} alt="logo bootstrap" className="icon" />
                    </div>
                    <div className="col-1">
                        <img src={iconNpm} alt="logo npm" className="icon" />
                    </div>
                    <div className="col-1">
                        <img src={iconTrello} alt="logo trello" className="icon" />
                    </div>
                    <div className="col-1">
                        <img src={iconSlack} alt="logo slack" className="icon" />
                    </div>
                </div>


            </div>

        )
    }
}

export default Skill;