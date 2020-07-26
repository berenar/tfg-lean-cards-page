import React from 'react';
import { Link } from "@reach/router"

//antd
import { List, Avatar, Space } from 'antd';
import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'

//mine
import api from './api_cards.json';

//animations
import Flip from 'react-reveal/Flip';

function CardsList() {

  const listData = [];

  for (let key in api.cards) {
    // console.log(key, api.cards[key]);
    listData.push({
      id: key,
      title: api.cards[key].title,
      description: api.cards[key].description,
      pdf: api.cards[key].pdf,
      picture: api.cards[key].foto
    })
  }

  const IconText = ({ icon, text }) => (
    <Space>
      {React.createElement(icon)}
      {text}
    </Space>
  );

  // Require images "dynamically"
  // Needed because of this https://github.com/facebook/react-native/issues/6391
  function dynamic_require(title) {
    switch (title) {
      case '5 S': return require("./assets/pics/5 S pic.png");
      case '5 W + 2 H': return require("./assets/pics/5 W + 2 H pic.png");
      case '5 W + 2 H Examples': return require("./assets/pics/5 W + 2 H Examples pic.png");
      case '7 Mudas': return require("./assets/pics/7 Mudas pic.png");
      case 'Jidoka': return require("./assets/pics/Jidoka pic.png");
      case 'JIT': return require("./assets/pics/JIT pic.png");
      case 'Kaizen': return require("./assets/pics/Kaizen pic.png");
      case 'Kanban': return require("./assets/pics/Kanban pic.png");
      case 'Poka-Yoke': return require("./assets/pics/Poka-Yoke pic.png");
      case 'Pull or Push': return require("./assets/pics/Pull or Push pic.png");
      case 'VSM': return require("./assets/pics/VSM pic.png");
    }
  }
  return (

    <div className="CardsList_container">
      <div className="centered">
        <h1 className="big">Available cards</h1>
      </div>
      
      <List
        itemLayout="vertical"
        size="large"
        pagination={{
          pageSize: 5,
        }}
        dataSource={listData}
        renderItem={item => (
          <Flip top>
            <Link to={`/cards_list/${item.id}`}>

              <List.Item
                key={item.title}
                extra={
                  <img
                    className="cardimg"
                    width={272}
                    alt="logo"
                    src={dynamic_require(item.title)}
                  />
                }
              >
                <List.Item.Meta
                  title={<h1>{item.title}</h1>}
                  description={<h3>{item.description}</h3>}
                />

              </List.Item>
            </Link>
            <br /><br />

          </Flip>
        )}
      />

    </div>
  );

}


export default CardsList;
