import React from 'react';

import { Avatar, Space } from 'antd';
import Flip from 'react-reveal/Flip';

import {
    MailTwoTone,
    GithubOutlined,
    LinkedinOutlined,
    ContactsOutlined,
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
                        <a href="mailto:bernatpericasserra97@gmail.com">
                            <MailTwoTone twoToneColor="#D4AF37" height="7em" />
                        </a>
                        <a href="https://github.com/berenar"><GithubOutlined /></a>
                        <a href="https://www.linkedin.com/in/bernatps/"><LinkedinOutlined /></a>
                        <a href="http://bernatpericas.com/"><ContactsOutlined /></a>
                    </Space>
                </div>
            </div>

        </div>

    )
}

export default AboutAuthor;