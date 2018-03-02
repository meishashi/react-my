import React from 'react';
import { Row, Col } from 'antd';
import { Menu, Icon } from 'antd';

export default class PCHeader extends React.Component {
    constructor(){
        super();
        this.state ={
            current: 'toutiao'
        }
    }
    render() {
        return (
            <header>
                <Row>
                    <Col span={2}></Col>
                    <Col span={4}>
                        <a href="/" className='logo'>
                            <img src="./src/images/logo.png" alt="logo"/>
                            <span>ReactNews</span>
                        </a>
                    </Col>
                    <Col span={16}>
                        <Menu 
                            mode="horizontal"
                            selectedKeys={[this.state.current]}>
                            <Menu.Item key="toutiao">
                                <Icon type="appstore" />头条
                            </Menu.Item>
                            <Menu.Item key="shehui">
                                <Icon type="mail" />社会
                            </Menu.Item>
                            <Menu.Item key="guonei">
                                <Icon type="mail" />国内
                            </Menu.Item>
                            <Menu.Item key="guoji">
                                <Icon type="mail" />国际
                            </Menu.Item>
                            <Menu.Item key="yule">
                                <Icon type="mail" />娱乐
                            </Menu.Item>
                        </Menu>
                    </Col>
                    <Col span={2}></Col>
                </Row>
            </header>
        );
    }
}