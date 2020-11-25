import { Layout, Menu, Breadcrumb } from 'antd';
import React, { Component } from 'react';
import 'antd/dist/antd.css';
import logo from '../logo.jpg';
import './Navi.css'
import UploadPage from "../upload/Upload";
const { Header, Content, Footer, Sider } = Layout;

class Navigation extends Component {
    state = {
        collapsed: false,
        mode: 'inline',
    };

    toggle = () => {
        this.setState({
            collapsed: !this.state.collapsed,
        });
    }

    render() {
        return (
            <Layout>
                <Sider
                    trigger={null}
                    collapsible
                    collapsed={this.state.collapsed}
                >
                    <div className="logo" />
                    <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
                        <Menu.Item key="1">
                            <span className="nav-text">Diagnosis</span>

                        </Menu.Item>
                        <Menu.Item key="2">
                            <span className="nav-text">Model mechanism</span>
                        </Menu.Item>
                        <Menu.Item key="3">
                            <span className="nav-text">contact us</span>
                        </Menu.Item>
                    </Menu>
                </Sider>
                <Layout>
                    <Header style={{ background: '#000', padding: 0 }}>

                        <span style={{color:'#fff', paddingLeft:'2%', fontSize:'1.4em'}}>Keratitis Diagnosis System</span>
                        <span style={{color:'#fff', float:'right', paddingRight:'1%'}}>
                            <a href={"https://www.bupt.edu.cn/"}>
                                <img src={logo} className="logo"/>
                            </a>
                        </span>
                    </Header>
                    <Content style={{ margin: '0 16px' }}>

                        <div style={{ padding: 24, background: '#fff', minHeight: 780 }}>
                            <UploadPage></UploadPage>

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

export default Navigation;