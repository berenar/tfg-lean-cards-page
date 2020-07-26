import React from 'react';

import { Avatar, Space } from 'antd';
import Flip from 'react-reveal/Flip';

import {
    MailTwoTone,
    GithubOutlined,
} from '@ant-design/icons';


function AboutAuthor(props) {
    return (
        <div className="AboutAuthor_container">

            <div className="centered">
                <h1 className="big">About the author</h1>
                <Flip top cascade>
                    <Avatar
                        size={150}
                        src={require("./assets/photo_me.jpg")}
                    />
                </Flip>
                <h2>{props.author}</h2>
                <div className="icons-list">
                    <Space>
                        <MailTwoTone twoToneColor="#D4AF37" height="4em" />
                        <GithubOutlined />
                    </Space>
                </div>
            </div>

        </div>

    )
}

export default AboutAuthor;