import React from 'react';
import { Row, Col } from 'antd';
import { Menu, Icon } from 'antd';

export default class PCHeader extends React.Component {
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
                        <Menu mode="horizontal">
                            <Menu.Item key="mail">
                                <Icon type="mail" />Navigation One
                            </Menu.Item>
                            <Menu.Item>
                                <Icon type="appstore" />Navigation Two
                            </Menu.Item>
                            <Menu.Item>
                                <a href="https://ant.design" target="_blank" rel="noopener noreferrer">Navigation Four - Link</a>
                            </Menu.Item>
                            
                        </Menu>
                    </Col>
                    <Col span={2}></Col>
                </Row>
            </header>
        );
    }
}