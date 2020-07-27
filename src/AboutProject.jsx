import React from 'react';

import Fade from 'react-reveal/Fade';
import Car from './Carro';
function AboutProject() {
    return (
        <div className="AboutProject_container">
            <Fade cascade>
                <div>
                    <div className="centered">
                        <h1 className="big">About the project</h1>
                        <h3 className="margins"> This web is part of the end-of-degree project in
                        Computer Science about instroducing Lean to software-related companies.<br /><br />
                        They will be used to instruct them on how to apply Lean methodologies
                        to create more value for their customers with fewer resources.
                        <br /><br />
                        This project is available on <a href="https://github.com/berenar/tfg-lean-cards-page">GitHub</a>.
                        </h3>
                        <Car></Car>
                    </div>
                </div>
            </Fade>
        </div>
    )
}

export default AboutProject;