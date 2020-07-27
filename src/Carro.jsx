import React from 'react';

import { Carousel } from 'antd';

function Carro() {
    return (
        <div className="Carousel_container">
            <Carousel autoplay pauseOnFocus speed="1000" swipeToSlide>
                <div>
                <h3>1</h3>
                <img className="mockup" src={require("./assets/Mockups/mockup_kaizen.png")} alt="" />
                </div>
                <div>
                <h3>2</h3>
                <img className="mockup" src={require("./assets/Mockups/mockup_jit.png")} alt="" />
                </div>
                <div>
                <h3>3</h3>
                <img className="mockup" src={require("./assets/Mockups/mockup_1_5s_front.png")} alt="" />
                </div>
                <div>
                <h3>5</h3>
                <img className="mockup" src={require("./assets/Mockups/mockup_2_5w2h.png")} alt="" />
                </div>
            </Carousel>
        </div>
    )
}

export default Carro;