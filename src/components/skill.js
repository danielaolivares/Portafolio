import React from 'react';

import iconFirebase from '../images/n_firebase-icon.svg';
import iconReact from '../images/n_reactjs-iconsvg.svg';
import iconGithub from '../images/n_github.svg';
import iconHtml5 from '../images/n_html5.svg';
import iconJS from '../images/n_java.svg';
import iconNode from '../images/n_node.svg';
import iconCss from '../images/n_css.svg';
import iconVisual from '../images/n_visual.svg';
import iconBootstrap from '../images/n_bootstrap.svg';
import iconNpm from '../images/n_npm.svg';
import iconTrello from '../images/n_trello.svg';
import iconSlack from '../images/n_slack.svg';
import '../global.css'
import ScrollableAnchor from 'react-scrollable-anchor';

class Skill extends React.Component {
    render() {
        return (
            <ScrollableAnchor id="Skill">

                <div className=" container-skill">
                    <h3 >Skills</h3>
                    <div className="container-icons">
                        <img src={iconFirebase} alt="logo firebase" className="icon" />
                        <img src={iconReact} alt="logo react" className="icon" />
                        <img src={iconGithub} alt="logo github" className="icon" />
                        <img src={iconHtml5} alt="logo html5" className="icon" />
                        <img src={iconJS} alt="logo js" className="icon" />
                        <img src={iconNode} alt="logo nodejs" className="icon" />
                    </div>
                    <div className="container-icons">
                        <img src={iconCss} alt="logo css" className="icon" />
                        <img src={iconVisual} alt="logo visual" className="icon" />
                        <img src={iconBootstrap} alt="logo bootstrap" className="icon" />
                        <img src={iconNpm} alt="logo npm" className="icon" />
                        <img src={iconTrello} alt="logo trello" className="icon" />
                        <img src={iconSlack} alt="logo slack" className="icon" />
                    </div>
                </div>
            </ScrollableAnchor >
        )
    }
}

export default Skill;