import React from 'react';
import Fade from 'react-reveal/Fade';

function Homepage(props) {
    return (
        <div className="Homepage_container">
            <Fade cascade>
                <div>
                    <h1 className="big">
                        Are you ready<br></br>
                to start LEArNing ?
                </h1>

                    <h3>Lean Cards are a set of assets in the form of visual cards,
                    easy to read and understand, which add value to the reader
                    whether he wants to quickly understand Lean concepts or
                    learn how to apply them to an IT working environment.</h3>

                    <img className="mockup" src={require("./assets/Mockups/mockup_kaizen.png")} alt="" />
                </div>
            </Fade>
        </div>
    )
}

export default Homepage;