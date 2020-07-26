import React from 'react';

import { Avatar, Space } from 'antd';
import Flip from 'react-reveal/Flip';
import { MailTwoTone, GithubOutlined } from '@ant-design/icons';
import { Link } from "@reach/router"

function AboutProject() {



    return (
        <div className="AboutProject_container">
            <div className="centered">
                <h1 className="big">About the project</h1>
                <h3 className="margins"> This web is part of the end-of-degree in<br />
                    Computer Science of
                    <Link to="/about_author"> the author</Link>
                    .
                </h3>

                <Flip top cascade>
                    <img id="cardExample" src={require("./assets/cards/images/_5s.jpg")} alt="card example"
                    />
                </Flip>
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

export default AboutProject;