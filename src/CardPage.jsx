import React from 'react';
import Tags from './Tags';
// https://ant.design/components/rate/
// https://ant.design/components/card/

import api from './api_cards.json';

import Disqus from "disqus-react";
import { Divider } from 'antd';

import Fade from 'react-reveal/Fade';

function CardPage(props) {

    // Get data from this specific card such as the title, description, pdf, picture
    const thisCard = api.cards[props.id];
    const cards = [
    '5 S',
    '5 W + 2 H',
    '5 W + 2 H Examples',
    '7 Mudas',
    'Jidoka',
    'JIT',
    'Kaizen',
    'Kanban',
    'Poka-Yoke',
    'Pull or Push'
    ];

    const resources = [
        'https://youtube.com/embed/8G1t_BdjGI0',
        'https://youtube.com/embed/yMjngIXE-40',
        'https://youtube.com/embed/yMjngIXE-40',
        'https://youtube.com/embed/SU01D-jTZcE',
        'https://youtube.com/embed/f97Nr4LS8l4',
        'https://youtube.com/embed/AH5Bn8iguNM',
        'https://youtube.com/embed/xNcO21FwMnk',
        'https://youtube.com/embed/Bcid33tgq8A',
        'https://youtube.com/embed/4RvHEkDOwUY',
        'https://youtube.com/embed/9OL7BMBa4ys'
    ];
    var cardsRes = {};
    for(var i = 0; i < cards.length; i++){
        cardsRes[cards[i]] = resources[i];
    }
    console.log(cardsRes);
    
    // Disqus
    const disqusShortname = "lean-cards"
    const disqusConfig = {
        url: window.location.href,
        identifier: "card-" + props.id,
        title: thisCard.title
    }
    console.log(window.location.href, "card-" + props.id, thisCard.title);
    // Require images "dynamically"
    // Needed because of this https://github.com/facebook/react-native/issues/6391
    function dynamic_require_pdf(title) {
        switch (title) {
            case '5 S': return require("./assets/cards/pdf/5 S.pdf");
            case '5 W + 2 H': return require("./assets/cards/pdf/5 W + 2 H.pdf");
            case '5 W + 2 H Examples': return require("./assets/cards/pdf/5 W + 2 H Examples.pdf");
            case '7 Mudas': return require("./assets/cards/pdf/7 Mudas.pdf");
            case 'Jidoka': return require("./assets/cards/pdf/Jidoka.pdf");
            case 'JIT': return require("./assets/cards/pdf/JIT.pdf");
            case 'Kaizen': return require("./assets/cards/pdf/Kaizen.pdf");
            case 'Kanban': return require("./assets/cards/pdf/Kanban.pdf");
            case 'Poka-Yoke': return require("./assets/cards/pdf/Poka-Yoke.pdf");
            case 'Pull or Push': return require("./assets/cards/pdf/Pull or Push.pdf");
            default: return require("./assets/cards/pdf/VSM.pdf");
        }
    }

    return (
        <div className="centered">
            <div className="CardPage_container">
                <Fade cascade>
                    <div>
                        <h1 className="big">{thisCard.title}</h1>
                        <h2 className="card_desc">{thisCard.description}</h2>
                        <br /><br /><br /><br />
                        <Divider><h2 className="pdf">Card</h2></Divider>
                        <iframe className="embeded_pdf" src={dynamic_require_pdf(thisCard.title)}></iframe>
                        <Divider>
                        <h2 className="resources">Related video</h2></Divider>
                        <iframe className="embeded_pdf" src={cardsRes[thisCard.title]} 
                        frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
                        allowFullScreen>
                        </iframe>
                        <Tags className="tags" />
                        <Disqus.DiscussionEmbed
                            className="disqus"
                            shortname={disqusShortname}
                            config={disqusConfig}
                        />
                    </div>
                </Fade>
            </div>
        </div>

    )
}

export default CardPage; 