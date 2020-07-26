import React from 'react';

import { Link } from "@reach/router"

//antd
import { Layout, Menu } from 'antd';
const { Header } = Layout;

function Navbar() {
    return (
        <Layout className="layout">
            <Menu mode="horizontal" defaultSelectedKeys={['1']} className="nav-bar">
                <Menu.Item key="1">
                    <Link to="/">
                        <img src={require("./assets/Logo_no_text_white.png")}
                            alt=""
                            className="mini-logo" 
                            />
                    </Link>
                </Menu.Item>
                <Menu.Item key="2"><Link to="cards_list">Cards</Link></Menu.Item>
                <Menu.Item key="3"><Link to="about_project">Project</Link></Menu.Item>
                <Menu.Item key="4"><Link to="about_author">Author</Link></Menu.Item>
            </Menu>
        </Layout>
    )
}

export default Navbar;