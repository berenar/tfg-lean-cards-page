import React from 'react';
import Flip from 'react-reveal/Flip';

function Homepage(props) {
    return (
        <div className="Homepage_container">
            <h1 className="big">Are you ready<br></br>
                to start <u>LEA</u>r<u>N</u>ing<br></br>
                with
                <Flip top>
                    <img id="logo" src={require("./assets/Logo_noback.png")} alt="logo" />
                </Flip>
                ?
                </h1>

            <h3>Lean Cards are a set of assets in the form of visual cards,
            easy to read and understand, which add value to the reader
            whether he wants to quickly understand Lean concepts or
            learn how to apply them to an IT working environment.</h3>
        </div>
    )
}

export default Homepage;