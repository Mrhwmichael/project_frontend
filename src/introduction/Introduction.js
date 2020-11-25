import { Layout, Menu } from 'antd';
import React, { Component } from 'react';
import 'antd/dist/antd.css';
import logo from '../logo.jpg';
import './Introduction.css'
import Diagnosis from "../diagnosis/Diagnosis";

const { Header, Content, Footer, Sider } = Layout;

class Introduction extends Component {

    state = {
        collapsed: false,
        mode: 'inline',
    };

    toggle = () => {
        this.setState({
            collapsed: !this.state.collapsed,
        });
    };

    render() {

        return (
            <Layout>
                <Sider>
                    <div className="logo" resource={"../logo.jpg"}/>
                    <Menu theme="dark" mode="inline" defaultSelectedKeys={['2']}>
                        <Menu.Item key="1"><a href={"#/nav"}>Diagnosis</a></Menu.Item>
                        <Menu.Item key="2"><a href={"#/intro"}>Model introduction</a></Menu.Item>
                        <Menu.Item key="3"><a href={"#/about"}>About us</a></Menu.Item>
                    </Menu>
                </Sider>

                <Layout>
                    <Header style={{ background: '#000', padding: 0 }}>

                        <a href={"#/"}>
                            <span style={{color:'#fff', paddingLeft:'2%', fontSize:'1.4em'}}>
                            Keratitis Diagnosis System
                            </span>
                        </a>
                        <span style={{color:'#fff', float:'right', paddingRight:'1%'}}>
                            <a href={"https://www.bupt.edu.cn/"}>
                                <img src={logo} className="logo"/>
                            </a>
                        </span>
                    </Header>
                    <Content style={{ margin: '0 16px' }}>

                        <div style={{ padding: 24, background: '#fff', minHeight: 780 }}>

                        </div>

                    </Content>
                    <Footer style={{ textAlign: 'center' }}>
                        Created by <a href={"https://mrhwmichael.github.io/"}>Haoyu Wang</a> in BUPT.
                    </Footer>
                </Layout>
            </Layout>
        );
    }
}

export default Introduction;