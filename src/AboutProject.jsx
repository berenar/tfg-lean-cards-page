import React from 'react';

import Flip from 'react-reveal/Flip';



function AboutProject() {
    return (
        <div className="AboutProject_container">
            <div className="centered">
                <h1 className="big">About the project</h1>
                <h3 className="margins"> This web is part of the end-of-degree project in 
                    Computer Science about Lean Cards.<br /><br />
                    They will be used to instruct software-related business how to apply 
                    Lean methodologies to create more value for customers with fewer resources.
                    <br/><br/>
                This project is available on <a href="https://github.com/berenar/tfg-lean-cards-page">GitHub</a>.
                </h3>
                <Flip top cascade>
                    <img id="lean-keywords" src={require("./assets/Lean-project-management.jpg")}
                        alt="lean keywords"
                    />
                </Flip>
            </div>
        </div>
    )
}

export default AboutProject;