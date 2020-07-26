import React from 'react';

import { Link } from "@reach/router"
import './AllStyles.css';
//antd
import { Layout, Menu, PageHeader } from 'antd';
const { Header, Content, Footer } = Layout;

//mine


function Navbar(props) {
    return (
        <Layout className="layout">
            <Header>
                <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
                    <Menu.Item key="1"><Link to="/">Home</Link></Menu.Item>
                    <Menu.Item key="2"><Link to="cards_list">Cards</Link></Menu.Item>
                    <Menu.Item key="3"><Link to="about_project">Project</Link></Menu.Item>
                    <Menu.Item key="4"><Link to="about_author">Author</Link></Menu.Item>
                </Menu>
            </Header>
        </Layout>
    )
}

export default Navbar;