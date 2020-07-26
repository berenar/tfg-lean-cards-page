import React from 'react';

import { Space } from 'antd';
import Flip from 'react-reveal/Flip';
import { MailTwoTone, GithubOutlined } from '@ant-design/icons';
import { Link } from "@reach/router"


function AboutProject() {
    return (
        <div className="AboutProject_container">
            <div className="centered">
                <h1 className="big">About the project</h1>
                <h3 className="margins"> This web is part of the end-of-degree project in 
                    Computer Science about Lean Cards.<br /><br />
                    They will be used to instruct software-related business how to apply 
                    Lean methodologies to create more value for customers with fewer resources.
                    </h3>

                <Flip top cascade>
                    <img id="lean-keywords" src={require("./assets/Lean-project-management.jpg")}
                        alt="lean keywords"
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